defmodule BackendWeb.Router do
  use BackendWeb, :router

  pipeline :api do
    plug CORSPlug, origin: "http://localhost:3000"
    plug :accepts, ["json"]
  end

  pipeline :authenticate do
    plug BackendWeb.Plugs.Authenticate
  end

  scope "/api", BackendWeb do
    pipe_through :api

    resources "/users", UserController, except: [:new, :edit, :update]
    resources "/posts", PostController, except: [:new, :edit, :create, :update]
    resources "/topics", TopicController, except: [:new, :edit, :create, :update]
    resources "/categories", CategoryController, except: [:new, :edit, :create, :update]

    scope "/authed" do
      pipe_through :authenticate

      resources "/posts", PostController, only: [:create, :update]
      resources "/topics", TopicController, only: [:create, :update]
      resources "/users", UserController, only: [:update]
    end

    scope "/sessions" do
      post "/sign-in", SessionsController, :create
      delete "/sign-out", SessionsController, :delete
    end

    post "/contact/send-email", ContactController, :send_email
  end

  # Enables LiveDashboard only for development
  #
  # If you want to use the LiveDashboard in production, you should put
  # it behind authentication and allow only admins to access it.
  # If your application does not have an admins-only section yet,
  # you can use Plug.BasicAuth to set up some basic authentication
  # as long as you are also using SSL (which you should anyway).
  if Mix.env() in [:dev, :test] do
    import Phoenix.LiveDashboard.Router

    scope "/" do
      pipe_through [:fetch_session, :protect_from_forgery]
      live_dashboard "/dashboard", metrics: BackendWeb.Telemetry
    end
  end
end
