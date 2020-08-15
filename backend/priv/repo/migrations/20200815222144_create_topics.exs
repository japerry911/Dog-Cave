defmodule Backend.Repo.Migrations.CreateTopics do
  use Ecto.Migration

  def change do
    create table(:topics) do
      add :title, :text
      add :user_id, references(:users, on_delete: :nothing)

      timestamps()
    end

    create index(:topics, [:user_id])
  end
end
