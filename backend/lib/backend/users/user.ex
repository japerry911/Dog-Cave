defmodule Backend.Users.User do
  use Ecto.Schema
  import Ecto.Changeset
  alias Backend.Services.Authenticator
  alias Backend.Repo
  alias Backend.AuthToken

  @derive {Jason.Encoder, only: [:username, :img_url]}

  schema "users" do
    field :img_url, :string,
      default:
        "https://dog-cave2134912939213.s3.us-east-2.amazonaws.com/ProfilePictures/240_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg"

    field :username, :string
    field :password, :string, virtual: true
    field :password_hash, :string
    has_many :posts, Backend.Posts.Post
    has_many :topics, Backend.Topics.Topic
    has_many :auth_tokens, Backend.AuthToken

    timestamps()
  end

  @doc false
  def changeset(user, attrs) do
    user
    |> cast(attrs, [:username, :img_url])
    |> validate_required([:username])
    |> validate_length(:username, min: 5, max: 20)
  end

  @doc false
  def registration_changeset(user, params) do
    user
    |> changeset(params)
    |> cast(params, [:password])
    |> validate_required([:password])
    |> validate_length(:password, min: 6, max: 40)
    |> put_pass_hash()
  end

  @doc false
  defp put_pass_hash(changeset) do
    case changeset do
      %Ecto.Changeset{valid?: true, changes: %{password: pass}} ->
        put_change(changeset, :password_hash, Pbkdf2.hash_pwd_salt(pass))

      _ ->
        changeset
    end
  end

  def sign_in(username, password) do
    case Pbkdf2.check_pass(Repo.get_by(Backend.Users.User, username: username), password) do
      {:ok, user} ->
        token = Authenticator.generate_token(user)
        Repo.insert(Ecto.build_assoc(user, :auth_tokens, %{token: token}))

      error ->
        error
    end
  end

  def sign_out(conn) do
    case Authenticator.get_auth_token(conn) do
      {:ok, token} ->
        case Repo.get_by(AuthToken, %{token: token}) do
          nil -> {:error, :not_found}
          auth_token -> Repo.delete(auth_token)
        end

      error ->
        error
    end
  end
end
