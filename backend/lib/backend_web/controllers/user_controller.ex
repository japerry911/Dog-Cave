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

  # %{"user" => user_params}) do
  def create(conn, user_params) do
    if Map.has_key?(user_params, "img") and
         String.starts_with?(user_params["img"].content_type, "image") do
      img_file = File.read!(user_params["img"].path)

      random_number_string =
        :crypto.strong_rand_bytes(30)
        |> Base.url_encode64()
        |> binary_part(0, 30)

      ExAws.S3.put_object(
        "dog-cave2134912939213",
        "ProfilePictures/#{random_number_string <> user_params["img"].filename}",
        img_file
      )
      |> ExAws.request!()
      |> Map.fetch(:status_code)
      |> case do
        {:ok, _status_code} ->
          nil

        _ ->
          conn
          |> send_resp(500, "Internal Error. Please Try Again.")
      end

      updated_img_url =
        "https://dog-cave2134912939213.s3.us-east-2.amazonaws.com/ProfilePictures/#{
          random_number_string <> user_params["img"].filename
        }"

      user_params = Map.put(user_params, "img_url", updated_img_url)

      with {:ok, %User{} = user} <- Users.create_user(user_params) do
        conn
        |> put_status(:created)
        |> put_resp_header("location", Routes.user_path(conn, :show, user))
        |> render("show.json", user: user)
      end
    else
      with {:ok, %User{} = user} <- Users.create_user(user_params) do
        conn
        |> put_status(:created)
        |> put_resp_header("location", Routes.user_path(conn, :show, user))
        |> render("show.json", user: user)
      end
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

  def exists?(conn, %{"username" => username}) do
    IO.inspect(username)
    exists_status = Users.get_by_username(username)

    if exists_status do
      conn
      |> send_resp(406, "Not Acceptable")
    else
      conn
      |> send_resp(200, "OK")
    end
  end
end
