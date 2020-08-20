defmodule Backend.Users.User do
  use Ecto.Schema
  import Ecto.Changeset

  @derive {Jason.Encoder, only: [:username, :img_url]}

  schema "users" do
    field :img_url, :string
    field :username, :string
    field :password, :string, virtual: true
    field :password_hash, :string
    has_many :posts, Backend.Posts.Post
    has_many :topics, Backend.Topics.Topic

    timestamps()
  end

  @doc false
  def changeset(user, attrs) do
    user
    |> cast(attrs, [:username, :img_url])
    |> validate_required([:username, :img_url])
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

  def put_pass_hash(changeset) do
    case changeset do
      %Ecto.Changeset{valid?: true, changes: %{password: pass}} ->
        put_change(changeset, :password_hash, Pbkdf2.hash_pwd_salt(pass))

      _ ->
        changeset
    end
  end
end
