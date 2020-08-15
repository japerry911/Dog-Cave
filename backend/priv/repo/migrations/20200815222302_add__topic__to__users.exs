defmodule Backend.Repo.Migrations.Add_Topic_To_Users do
  use Ecto.Migration

  def change do
    alter table(:users) do
      add :topic_id, references(:topics)
    end
  end
end
