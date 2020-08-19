defmodule Backend.Posts.Post do
  use Ecto.Schema
  import Ecto.Changeset

  @derive {Jason.Encoder, only: [:content, :is_question]}

  schema "posts" do
    field :content, :string
    field :is_question, :boolean, default: false
    belongs_to :user, Backend.Users.User
    belongs_to :topic, Backend.Topics.Topic

    timestamps()
  end

  @doc false
  def changeset(post, attrs) do
    post
    |> cast(attrs, [:content, :is_question])
    |> validate_required([:content, :is_question])
  end
end
