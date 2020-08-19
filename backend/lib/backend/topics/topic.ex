defmodule Backend.Topics.Topic do
  use Ecto.Schema
  import Ecto.Changeset

  @derive {Jason.Encoder, only: [:id, :title, :posts]}

  schema "topics" do
    field :title, :string
    belongs_to :user, Backend.Users.User
    belongs_to :category, Backend.Categories.Category
    has_many :posts, Backend.Posts.Post

    timestamps()
  end

  @doc false
  def changeset(topic, attrs) do
    topic
    |> cast(attrs, [:title])
    |> validate_required([:title])
  end
end
