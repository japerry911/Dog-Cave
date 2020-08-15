defmodule Backend.Repo.Migrations.AddCategoryIdToTopics do
  use Ecto.Migration

  def change do
    alter table(:topics) do
      add :category_id, references(:categories)
    end
  end
end
