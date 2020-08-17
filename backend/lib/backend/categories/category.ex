defmodule Backend.Categories.Category do
  use Ecto.Schema
  import Ecto.Changeset

  @derive {Jason.Encoder, only: [:id, :name, :description]}

  schema "categories" do
    field :description, :string
    field :name, :string
    has_many :topics, Backend.Topics.Topic

    timestamps()
  end

  @doc false
  def changeset(category, attrs) do
    category
    |> cast(attrs, [:name, :description])
    |> validate_required([:name, :description])
  end
end
