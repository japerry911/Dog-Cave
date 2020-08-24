defmodule BackendWeb.TopicController do
  use BackendWeb, :controller

  alias Backend.Topics
  alias Backend.Topics.Topic

  action_fallback BackendWeb.FallbackController

  def index(conn, _params) do
    topics = Topics.list_topics()

    render(conn, "index.json",
      topics:
        Enum.map(topics, fn topic ->
          %{
            id: topic.id,
            category_id: topic.category_id,
            title: topic.title,
            inserted_at: topic.inserted_at,
            updated_at: topic.updated_at,
            user: %{
              id: topic.user.id,
              username: topic.user.username,
              img_url: topic.user.img_url
            },
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
    )
  end

  def create(conn, topic_params) do
    with {:ok, %Topic{} = topic} <- Topics.create_topic(topic_params) do
      conn
      |> put_status(:created)
      |> put_resp_header("location", Routes.topic_path(conn, :show, topic))
      |> render("show.json", topic: topic)
    end
  end

  def show(conn, %{"id" => id}) do
    topic = Topics.get_topic!(id)

    render(conn, "show.json",
      topic: %{
        id: topic.id,
        category_id: topic.category_id,
        title: topic.title,
        inserted_at: topic.inserted_at,
        updated_at: topic.updated_at,
        user: %{
          id: topic.user.id,
          username: topic.user.username,
          img_url: topic.user.img_url
        },
        posts:
          Enum.map(topic.posts, fn post ->
            %{
              id: post.id,
              content: post.content,
              is_question: post.is_question,
              inserted_at: post.inserted_at,
              updated_at: post.updated_at,
              user: %{
                id: post.user.id,
                username: post.user.username,
                img_url: post.user.img_url
              }
            }
          end)
      }
    )
  end

  def update(conn, %{"id" => id, "topic" => topic_params}) do
    topic = Topics.get_topic!(id)

    with {:ok, %Topic{} = topic} <- Topics.update_topic(topic, topic_params) do
      render(conn, "show.json", topic: topic)
    end
  end

  def delete(conn, %{"id" => id}) do
    topic = Topics.get_topic!(id)

    with {:ok, %Topic{}} <- Topics.delete_topic(topic) do
      send_resp(conn, :no_content, "")
    end
  end
end
