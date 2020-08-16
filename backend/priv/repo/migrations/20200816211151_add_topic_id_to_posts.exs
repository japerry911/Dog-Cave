defmodule Backend.Repo.Migrations.AddTopicIdToPosts do
  use Ecto.Migration

  def change do
    alter table(:posts) do
      add :topic_id, references(:topics)
    end
  end
end
