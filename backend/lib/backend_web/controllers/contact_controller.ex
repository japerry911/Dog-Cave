defmodule BackendWeb.ContactController do
  use BackendWeb, :controller

  alias Backend.Mailer

  def send_email(conn, params) do
    Backend.Email.contact_us_email(params)
    |> Mailer.deliver_now()

    text(conn, "OK")
  end
end
