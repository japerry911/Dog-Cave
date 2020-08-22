defmodule BackendWeb.SessionsView do
  use BackendWeb, :view

  def render("show.json", %{auth_token: auth_token}) do
    %{token: auth_token.token, user: auth_token.user}
  end
end
