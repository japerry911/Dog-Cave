# Script for populating the database. You can run it as:
#
#     mix run priv/repo/seeds.exs
#
# Inside the script, you can read and write to any of your
# repositories directly:
#
#     Backend.Repo.insert!(%Backend.SomeSchema{})
#
# We recommend using the bang functions (`insert!`, `update!`
#
# and so on) as they will fail if something goes wrong.

alias Backend.Repo
alias Backend.Users.User
alias Backend.Posts.Post
alias Backend.Topics.Topic
alias Backend.Categories.Category
alias Backend.Users
alias Backend.AuthToken

# Deletes all Tables
Repo.delete_all(AuthToken)
Repo.delete_all(Post)
Repo.delete_all(Topic)
Repo.delete_all(User)
Repo.delete_all(Category)

# Categories Table Population
category1 =
  Repo.insert!(%Category{name: "Technology", description: "Recent Technology topics, and more"})

category2 = Repo.insert!(%Category{name: "Dog News", description: "Biggest and Newest Dog News"})
category3 = Repo.insert!(%Category{name: "Sky Talk", description: "Talk about Sky"})
category4 = Repo.insert!(%Category{name: "Dog Toys", description: "Talk about dog toys"})
category5 = Repo.insert!(%Category{name: "Dog Treats", description: "Talk about dog treats"})
category6 = Repo.insert!(%Category{name: "Dog Food", description: "Talk about dog food"})

# Users Table Population
{_status, user1} =
  Users.create_user(%{
    username: "General",
    img_url:
      "https://dog-cave2134912939213.s3.us-east-2.amazonaws.com/ProfilePictures/breed_profile_germansheperd_1118000_hero_2536-6dc4ce05871945b8a894bd80c0ecc7f1.jpg",
    password: "password"
  })

{_status, user2} =
  Users.create_user(%{
    username: "Blair",
    img_url:
      "https://dog-cave2134912939213.s3.us-east-2.amazonaws.com/ProfilePictures/sheri-hooley-2bs9I0n7unY-unsplash+(1).jpg",
    password: "password"
  })

{_status, user3} =
  Users.create_user(%{
    username: "Roscoe",
    img_url:
      "https://dog-cave2134912939213.s3.us-east-2.amazonaws.com/ProfilePictures/tahoe-PGlA5efHOiI-unsplash.jpg",
    password: "password"
  })

# Topics Table Population
topic1 = Repo.insert!(%Topic{title: "Basic Elixir Question", user: user1, category: category1})
topic2 = Repo.insert!(%Topic{title: "Topic 2?", user: user2, category: category2})
topic3 = Repo.insert!(%Topic{title: "Topic 3", user: user3, category: category3})
topic4 = Repo.insert!(%Topic{title: "Topic 4", user: user1, category: category4})
topic5 = Repo.insert!(%Topic{title: "Topic 5", user: user2, category: category5})
topic6 = Repo.insert!(%Topic{title: "Topic 6", user: user3, category: category6})
topic7 = Repo.insert!(%Topic{title: "Phoenix Question", user: user1, category: category1})
topic8 = Repo.insert!(%Topic{title: "Topic 8", user: user2, category: category2})
topic9 = Repo.insert!(%Topic{title: "Topic 9", user: user3, category: category3})
topic10 = Repo.insert!(%Topic{title: "Topic 10", user: user1, category: category4})
topic11 = Repo.insert!(%Topic{title: "Topic 11", user: user2, category: category5})
topic12 = Repo.insert!(%Topic{title: "Topic 12", user: user3, category: category6})

# Posts Table Population
Repo.insert!(%Post{content: "What is Elixir?", is_question: true, topic: topic1, user: user1})
Process.sleep(1000)
Repo.insert!(%Post{content: "Post Content 2", is_question: true, topic: topic2, user: user2})
Process.sleep(1000)
Repo.insert!(%Post{content: "Post Content 3", is_question: true, topic: topic3, user: user3})
Process.sleep(1000)
Repo.insert!(%Post{content: "Post Content 4", is_question: true, topic: topic4, user: user1})
Process.sleep(1000)
Repo.insert!(%Post{content: "Post Content 5", is_question: true, topic: topic5, user: user2})
Process.sleep(1000)
Repo.insert!(%Post{content: "Post Content 6", is_question: true, topic: topic6, user: user3})
Process.sleep(1000)
Repo.insert!(%Post{content: "What is Phoenix?", is_question: true, topic: topic7, user: user1})
Process.sleep(1000)
Repo.insert!(%Post{content: "Post Content 8", is_question: true, topic: topic8, user: user2})
Process.sleep(1000)
Repo.insert!(%Post{content: "Post Content 9", is_question: true, topic: topic9, user: user3})
Process.sleep(1000)
Repo.insert!(%Post{content: "Post Content 10", is_question: true, topic: topic10, user: user1})
Process.sleep(1000)
Repo.insert!(%Post{content: "Post Content 11", is_question: true, topic: topic11, user: user2})
Process.sleep(1000)
Repo.insert!(%Post{content: "Post Content 12", is_question: true, topic: topic12, user: user3})
Process.sleep(1000)

Repo.insert!(%Post{
  content: "It is a language I think.",
  is_question: false,
  topic: topic1,
  user: user2
})

Process.sleep(1000)

Repo.insert!(%Post{content: "Post Content 14", is_question: false, topic: topic2, user: user2})
Process.sleep(1000)
Repo.insert!(%Post{content: "Post Content 15", is_question: false, topic: topic3, user: user3})
Process.sleep(1000)
Repo.insert!(%Post{content: "Post Content 16", is_question: false, topic: topic4, user: user1})
Process.sleep(1000)
Repo.insert!(%Post{content: "Post Content 17", is_question: false, topic: topic5, user: user2})
Process.sleep(1000)
Repo.insert!(%Post{content: "Post Content 18", is_question: false, topic: topic6, user: user3})
Process.sleep(1000)

Repo.insert!(%Post{
  content:
    "It's some framework for web applications, and is used as a backend on this site I think.",
  is_question: false,
  topic: topic7,
  user: user1
})

Process.sleep(1000)

Repo.insert!(%Post{content: "Post Content 20", is_question: false, topic: topic8, user: user2})
Process.sleep(1000)
Repo.insert!(%Post{content: "Post Content 21", is_question: false, topic: topic9, user: user3})
Process.sleep(1000)
Repo.insert!(%Post{content: "Post Content 22", is_question: false, topic: topic10, user: user1})
Process.sleep(1000)
Repo.insert!(%Post{content: "Post Content 23", is_question: false, topic: topic11, user: user2})
Process.sleep(1000)
Repo.insert!(%Post{content: "Post Content 24", is_question: false, topic: topic12, user: user3})
Process.sleep(1000)

Repo.insert!(%Post{
  content: "Elixir is like a potion isn't it? I don't know haha.",
  is_question: false,
  topic: topic1,
  user: user3
})

Process.sleep(1000)

Repo.insert!(%Post{content: "Post Content 26", is_question: false, topic: topic2, user: user2})
Process.sleep(1000)
Repo.insert!(%Post{content: "Post Content 27", is_question: false, topic: topic3, user: user3})
Process.sleep(1000)
Repo.insert!(%Post{content: "Post Content 28", is_question: false, topic: topic4, user: user1})
Process.sleep(1000)
Repo.insert!(%Post{content: "Post Content 29", is_question: false, topic: topic5, user: user2})
Process.sleep(1000)
Repo.insert!(%Post{content: "Post Content 30", is_question: false, topic: topic6, user: user3})
Process.sleep(1000)

Repo.insert!(%Post{
  content:
    "Some bird or something... haha just kidding, it's a web application framework and it is growing in popularity!",
  is_question: false,
  topic: topic7,
  user: user1
})

Process.sleep(1000)

Repo.insert!(%Post{content: "Post Content 32", is_question: false, topic: topic8, user: user2})
Process.sleep(1000)
Repo.insert!(%Post{content: "Post Content 33", is_question: false, topic: topic9, user: user3})
Process.sleep(1000)
Repo.insert!(%Post{content: "Post Content 34", is_question: false, topic: topic10, user: user1})
Process.sleep(1000)
Repo.insert!(%Post{content: "Post Content 35", is_question: false, topic: topic11, user: user2})
Process.sleep(1000)
Repo.insert!(%Post{content: "Post Content 36", is_question: false, topic: topic12, user: user3})
Process.sleep(1000)
Repo.insert!(%Post{content: "Wrong Category!!!", is_question: false, topic: topic1, user: user3})
Process.sleep(1000)
Repo.insert!(%Post{content: "Post Content 38", is_question: false, topic: topic2, user: user2})
Process.sleep(1000)
Repo.insert!(%Post{content: "Post Content 39", is_question: false, topic: topic3, user: user3})
Process.sleep(1000)
Repo.insert!(%Post{content: "Post Content 40", is_question: false, topic: topic4, user: user1})
Process.sleep(1000)
Repo.insert!(%Post{content: "Post Content 41", is_question: false, topic: topic5, user: user2})
Process.sleep(1000)
Repo.insert!(%Post{content: "Post Content 42", is_question: false, topic: topic6, user: user3})
Process.sleep(1000)

Repo.insert!(%Post{
  content: "Top answer is above, nothing to add.",
  is_question: false,
  topic: topic7,
  user: user1
})

Process.sleep(1000)

Repo.insert!(%Post{content: "Post Content 44", is_question: false, topic: topic8, user: user2})
Process.sleep(1000)
Repo.insert!(%Post{content: "Post Content 45", is_question: false, topic: topic9, user: user3})
Process.sleep(1000)
Repo.insert!(%Post{content: "Post Content 46", is_question: false, topic: topic10, user: user1})
Process.sleep(1000)
Repo.insert!(%Post{content: "Post Content 47", is_question: false, topic: topic11, user: user2})
Process.sleep(1000)
Repo.insert!(%Post{content: "Post Content 48", is_question: false, topic: topic12, user: user3})
Process.sleep(1000)

Repo.insert!(%Post{
  content:
    "Leave me alone Roscoe! Joking about potions and now telling me that I am in the wrong category. I bet you that your owner doesn't give you treats!",
  is_question: false,
  topic: topic1,
  user: user1
})

Process.sleep(1000)

Repo.insert!(%Post{
  content: "hahahahha General, why are you mad, just post in the right category bro!",
  is_question: false,
  topic: topic1,
  user: user3
})

Process.sleep(1000)

Repo.insert!(%Post{
  content: "Drama!!!",
  is_question: false,
  topic: topic1,
  user: user2
})
