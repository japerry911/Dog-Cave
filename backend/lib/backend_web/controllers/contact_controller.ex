defmodule BackendWeb.ContactController do
  use BackendWeb, :controller

  alias Backend.Mailer

  def send_email(conn, _params) do
    Backend.Email.contact_us_email()
    |> Mailer.deliver_now()

    text(conn, "OK")
  end
end
