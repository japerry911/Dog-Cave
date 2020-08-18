defmodule Backend.Email do
  use Bamboo.Phoenix, view: Backend.EmailView

  def contact_us_email(%{"email" => email, "message" => message, "subject" => subject}) do
    new_email()
    |> to(System.get_env("SMTP_USERNAME"))
    |> from(System.get_env("SMTP_USERNAME"))
    |> subject(subject)
    |> text_body(email <> "\n" <> message)
  end
end
