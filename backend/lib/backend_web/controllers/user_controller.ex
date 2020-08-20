defmodule BackendWeb.UserController do
  use BackendWeb, :controller

  alias Backend.Users
  alias Backend.Users.User

  action_fallback BackendWeb.FallbackController

  def index(conn, _params) do
    users = Users.list_users()

    render(
      conn,
      "index.json",
      users:
        Enum.map(users, fn user ->
          %{
            id: user.id,
            username: user.username,
            img_url: user.img_url,
            inserted_at: user.inserted_at,
            updated_at: user.updated_at,
            topics: Enum.map(user.topics, fn topic -> %{id: topic.id, title: topic.title} end),
            posts:
              Enum.map(user.posts, fn post ->
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
    )
  end

  def create(conn, %{"user" => user_params}) do
    with {:ok, %User{} = user} <- Users.create_user(user_params) do
      conn
      |> put_status(:created)
      |> put_resp_header("location", Routes.user_path(conn, :show, user))
      |> render("show.json", user: user)
    end
  end

  def show(conn, %{"id" => id}) do
    user = Users.get_user!(id)

    render(conn, "show.json",
      user: %{
        id: user.id,
        username: user.username,
        img_url: user.img_url,
        inserted_at: user.inserted_at,
        updated_at: user.updated_at,
        posts:
          Enum.map(user.posts, fn post ->
            %{
              id: post.id,
              content: post.content,
              is_question: post.is_question,
              inserted_at: post.inserted_at,
              updated_at: post.updated_at
            }
          end)
      }
    )
  end

  def update(conn, %{"id" => id, "user" => user_params}) do
    user = Users.get_user!(id)

    with {:ok, %User{} = user} <- Users.update_user(user, user_params) do
      render(conn, "show.json", user: user)
    end
  end

  def delete(conn, %{"id" => id}) do
    user = Users.get_user!(id)

    with {:ok, %User{}} <- Users.delete_user(user) do
      send_resp(conn, :no_content, "")
    end
  end
end
