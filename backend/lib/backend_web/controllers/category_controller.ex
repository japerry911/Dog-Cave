defmodule BackendWeb.CategoryController do
  use BackendWeb, :controller

  alias Backend.Categories
  alias Backend.Categories.Category

  action_fallback BackendWeb.FallbackController

  def index(conn, _params) do
    categories = Categories.list_categories()

    render(conn, "index.json",
      categories:
        Enum.map(categories, fn category ->
          %{
            id: category.id,
            name: category.name,
            topics: Enum.map(category.topics, fn topic -> %{id: topic.id, title: topic.title} end)
          }
        end)
    )
  end

  def create(conn, %{"category" => category_params}) do
    with {:ok, %Category{} = category} <- Categories.create_category(category_params) do
      conn
      |> put_status(:created)
      |> put_resp_header("location", Routes.category_path(conn, :show, category))
      |> render("show.json", category: category)
    end
  end

  def show(conn, %{"id" => id}) do
    category = Categories.get_category!(id)

    render(conn, "show.json",
      category: %{
        id: category.id,
        name: category.name,
        topics:
          Enum.map(category.topics, fn topic ->
            %{
              id: topic.id,
              title: topic.title,
              posts:
                Enum.map(topic.posts, fn post ->
                  %{
                    id: post.id,
                    content: post.content,
                    is_question: post.is_question,
                    inserted_at: post.inserted_at,
                    updated_at: post.updated_at
                  }
                end)
            }
          end)
      }
    )
  end

  def update(conn, %{"id" => id, "category" => category_params}) do
    category = Categories.get_category!(id)

    with {:ok, %Category{} = category} <- Categories.update_category(category, category_params) do
      render(conn, "show.json", category: category)
    end
  end

  def delete(conn, %{"id" => id}) do
    category = Categories.get_category!(id)

    with {:ok, %Category{}} <- Categories.delete_category(category) do
      send_resp(conn, :no_content, "")
    end
  end
end
