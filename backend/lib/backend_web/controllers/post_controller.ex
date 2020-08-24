defmodule BackendWeb.PostController do
  use BackendWeb, :controller

  alias Backend.Posts
  alias Backend.Posts.Post

  action_fallback BackendWeb.FallbackController

  def index(conn, _params) do
    posts = Posts.list_posts()

    render(conn, "index.json",
      posts:
        Enum.map(posts, fn post ->
          %{
            id: post.id,
            content: post.content,
            is_question: post.is_question,
            topic: %{id: post.topic.id, title: post.topic.title},
            user: %{id: post.user.id, username: post.user.username, img_url: post.user.img_url},
            inserted_at: post.inserted_at
          }
        end)
    )
  end

  def create(conn, post_params) do
    with {:ok, %Post{} = post} <- Posts.create_post(post_params) do
      conn
      |> put_status(:created)
      |> put_resp_header("location", Routes.post_path(conn, :show, post))
      |> render("show.json",
        post: %{
          content: post.content,
          is_question: post.is_question
        }
      )
    end
  end

  def show(conn, %{"id" => id}) do
    post = Posts.get_post!(id)

    render(conn, "show.json",
      post: %{
        id: post.id,
        content: post.content,
        is_question: post.is_question,
        topic: %{id: post.topic.id, title: post.topic.title},
        user: %{id: post.user.id, username: post.user.username, img_url: post.user.img_url}
      }
    )
  end

  def update(conn, %{"id" => id, "post" => post_params}) do
    post = Posts.get_post!(id)

    with {:ok, %Post{} = post} <- Posts.update_post(post, post_params) do
      render(conn, "show.json", post: post)
    end
  end

  def delete(conn, %{"id" => id}) do
    post = Posts.get_post!(id)

    with {:ok, %Post{}} <- Posts.delete_post(post) do
      send_resp(conn, :no_content, "")
    end
  end
end
