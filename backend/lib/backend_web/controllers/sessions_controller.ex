defmodule BackendWeb.SessionsController do
  use BackendWeb, :controller

  alias Backend.Users.User

  def create(conn, %{"username" => username, "password" => password}) do
    case User.sign_in(username, password) do
      {:ok, auth_token} ->
        auth_token = Backend.Repo.preload(auth_token, :user)

        conn
        |> put_status(:ok)
        |> render("show.json",
          auth_token: %{
            token: auth_token.token,
            user: %{
              id: auth_token.user.id,
              username: auth_token.user.username,
              img_url: auth_token.user.img_url
            }
          }
        )

      {:error, reason} ->
        conn
        |> send_resp(401, reason)
    end
  end

  def delete(conn, _) do
    case User.sign_out(conn) do
      {:error, reason} ->
        conn
        |> send_resp(400, reason)

      {:ok, _} ->
        conn
        |> send_resp(204, "")
    end
  end
end
