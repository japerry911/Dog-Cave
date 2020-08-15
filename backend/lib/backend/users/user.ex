defmodule Backend.Users.User do
  use Ecto.Schema
  import Ecto.Changeset

  schema "users" do
    field :img_url, :string
    field :username, :string
    has_many :posts, Backend.Posts.Post

    timestamps()
  end

  @doc false
  def changeset(user, attrs) do
    user
    |> cast(attrs, [:username, :img_url])
    |> validate_required([:username, :img_url])
  end
end
