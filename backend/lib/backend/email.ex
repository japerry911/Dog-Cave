defmodule Backend.Email do
  use Bamboo.Phoenix, view: Backend.EmailView

  def contact_us_email() do
    new_email()
    |> to(System.get_env("SMTP_USERNAME"))
    |> from(System.get_env("SMTP_USERNAME"))
    |> subject("Test Subject")
    |> text_body("Test Body")
  end
end
