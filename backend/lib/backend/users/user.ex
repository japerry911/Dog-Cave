defmodule Backend.Users.User do
  use Ecto.Schema
  import Ecto.Changeset

  @derive {Jason.Encoder, only: [:username, :img_url]}

  schema "users" do
    field :img_url, :string
    field :username, :string
    has_many :posts, Backend.Posts.Post
    has_many :topics, Backend.Topics.Topic

    timestamps()
  end

  @doc false
  def changeset(user, attrs) do
    user
    |> cast(attrs, [:username, :img_url])
    |> validate_required([:username, :img_url])
  end
end
