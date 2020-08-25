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

{_status, user4} =
  Users.create_user(%{
    username: "Skylord",
    img_url:
      "https://dog-cave2134912939213.s3.us-east-2.amazonaws.com/ProfilePictures/IMG_4580.png",
    password: "password"
  })

{_status, user5} =
  Users.create_user(%{
    username: "Charlotte",
    img_url:
      "https://dog-cave2134912939213.s3.us-east-2.amazonaws.com/ProfilePictures/FF699225-3FAE-42FD-860D-0632064EE63C_1_105_c.jpeg",
    password: "password"
  })

# Topics Table Population
topic1 = Repo.insert!(%Topic{title: "Basic Elixir Question", user: user1, category: category1})

topic2 =
  Repo.insert!(%Topic{title: "Which dog breed is the best?", user: user2, category: category2})

topic3 =
  Repo.insert!(%Topic{title: "What is Sky's favorite treat?", user: user3, category: category3})

topic4 =
  Repo.insert!(%Topic{title: "What is your favorite dog toy?", user: user1, category: category4})

topic5 =
  Repo.insert!(%Topic{title: "What's your favorite treat?", user: user2, category: category5})

topic6 =
  Repo.insert!(%Topic{
    title: "What's your favorite dog food brand?",
    user: user3,
    category: category6
  })

topic7 = Repo.insert!(%Topic{title: "Phoenix Question", user: user1, category: category1})

topic8 =
  Repo.insert!(%Topic{title: "New vet opened down the street", user: user2, category: category2})

topic9 =
  Repo.insert!(%Topic{
    title: "What is Sky's favorite thing to do?",
    user: user3,
    category: category3
  })

topic10 =
  Repo.insert!(%Topic{title: "How are Kong Toys nowadays?", user: user1, category: category4})

topic11 =
  Repo.insert!(%Topic{title: "What do you think of Crunchy Os?", user: user2, category: category5})

topic12 =
  Repo.insert!(%Topic{
    title: "How is the bird game food from Fromms?",
    user: user3,
    category: category6
  })

# Posts Table Population
Repo.insert!(%Post{content: "What is Elixir?", is_question: true, topic: topic1, user: user1})
Process.sleep(1000)

Repo.insert!(%Post{
  content: "Which dog breed is the best and why?",
  is_question: true,
  topic: topic2,
  user: user2
})

Process.sleep(1000)

Repo.insert!(%Post{
  content: "What is Sky's favorite treat?",
  is_question: true,
  topic: topic3,
  user: user3
})

Process.sleep(1000)

Repo.insert!(%Post{
  content: "What is your favorite dog toy?",
  is_question: true,
  topic: topic4,
  user: user1
})

Process.sleep(1000)

Repo.insert!(%Post{
  content: "What's your favorite treat?",
  is_question: true,
  topic: topic5,
  user: user2
})

Process.sleep(1000)

Repo.insert!(%Post{
  content: "What's your favorite dog food brand?",
  is_question: true,
  topic: topic6,
  user: user3
})

Process.sleep(1000)
Repo.insert!(%Post{content: "What is Phoenix?", is_question: true, topic: topic7, user: user1})
Process.sleep(1000)

Repo.insert!(%Post{
  content:
    "How is the new vet down the street, just read an article in the newspaper on the opening?",
  is_question: true,
  topic: topic8,
  user: user2
})

Process.sleep(1000)

Repo.insert!(%Post{
  content: "What is Sky's favorite thing to do?",
  is_question: true,
  topic: topic9,
  user: user3
})

Process.sleep(1000)

Repo.insert!(%Post{
  content: "How are Kong Toys nowadays?",
  is_question: true,
  topic: topic10,
  user: user1
})

Process.sleep(1000)

Repo.insert!(%Post{
  content:
    "What do you think of Crunchy Os? If you are not familiar with them, they are a great treat from Fromms.",
  is_question: true,
  topic: topic11,
  user: user2
})

Process.sleep(1000)

Repo.insert!(%Post{
  content:
    "How is the bird game food from Fromms? I can't catch any birds in the wild, so I don't know the taste. Thanks.",
  is_question: true,
  topic: topic12,
  user: user3
})

Process.sleep(1000)

Repo.insert!(%Post{
  content: "It is a language I think.",
  is_question: false,
  topic: topic1,
  user: user2
})

Process.sleep(1000)

Repo.insert!(%Post{
  content: "Obviously every dog is the best!",
  is_question: false,
  topic: topic2,
  user: user3
})

Process.sleep(1000)

Repo.insert!(%Post{
  content: "He absolutely loves carrot cake.",
  is_question: false,
  topic: topic3,
  user: user5
})

Process.sleep(1000)

Repo.insert!(%Post{
  content: "DID SOMEBODY SAY CARROT CAKE?!",
  is_question: false,
  topic: topic3,
  user: user4
})

Process.sleep(1000)

Repo.insert!(%Post{
  content: "I absolutely love a good rope toy and love playing tug-a-war.",
  is_question: false,
  topic: topic4,
  user: user2
})

Process.sleep(1000)

Repo.insert!(%Post{
  content: "Do not judge me, but I love carrots.",
  is_question: false,
  topic: topic5,
  user: user4
})

Process.sleep(1000)

Repo.insert!(%Post{
  content: "What a nerd, we all know that dog biscuits are the best!",
  is_question: false,
  topic: topic5,
  user: user5
})

Process.sleep(1000)

Repo.insert!(%Post{
  content: "I absolutely love Science Diet, it is so tasty and healthy.",
  is_question: false,
  topic: topic6,
  user: user5
})

Process.sleep(1000)

Repo.insert!(%Post{
  content:
    "It's some framework for web applications, and is used as a backend on this site I think.",
  is_question: false,
  topic: topic7,
  user: user1
})

Process.sleep(1000)

Repo.insert!(%Post{
  content: "Nerd!!!",
  is_question: false,
  topic: topic7,
  user: user4
})

Process.sleep(1000)

Repo.insert!(%Post{
  content: "I think that's an actual hospital for human people man... You're crazy.",
  is_question: false,
  topic: topic8,
  user: user3
})

Process.sleep(1000)

Repo.insert!(%Post{
  content: "Sky loves to sleep and sleep and sleep.",
  is_question: false,
  topic: topic9,
  user: user1
})

Process.sleep(1000)

Repo.insert!(%Post{
  content: "What are you talking about, you're literally always sleeping.",
  is_question: false,
  topic: topic9,
  user: user4
})

Process.sleep(1000)

Repo.insert!(%Post{
  content: "They are still pretty durable, I heard Sky ate one once.",
  is_question: false,
  topic: topic10,
  user: user2
})

Process.sleep(1000)

Repo.insert!(%Post{
  content: "That's just not true...",
  is_question: false,
  topic: topic10,
  user: user4
})

Process.sleep(1000)

Repo.insert!(%Post{
  content: "Crunchatise me captain!",
  is_question: false,
  topic: topic11,
  user: user5
})

Process.sleep(1000)

Repo.insert!(%Post{
  content: "Wrong food. That's Captain Crunch...",
  is_question: false,
  topic: topic11,
  user: user4
})

Process.sleep(1000)

Repo.insert!(%Post{
  content: "It's fantastic, had a bowl this morning, highly recommend.",
  is_question: false,
  topic: topic12,
  user: user4
})

Process.sleep(1000)

Repo.insert!(%Post{
  content: "Elixir is like a potion isn't it? I don't know haha.",
  is_question: false,
  topic: topic1,
  user: user3
})

Process.sleep(1000)

Repo.insert!(%Post{
  content: "Obviously Catahoula Leopard! AROOOO!! RUFF RUFF!",
  is_question: false,
  topic: topic2,
  user: user4
})

Process.sleep(1000)

Repo.insert!(%Post{
  content: "Um, no... Cavilier King Charles Spaniel is.",
  is_question: false,
  topic: topic2,
  user: user5
})

Process.sleep(1000)

Repo.insert!(%Post{
  content: "He loves to eat grilled chicken last I heard.",
  is_question: false,
  topic: topic3,
  user: user3
})

Process.sleep(1000)

Repo.insert!(%Post{
  content: "I think the best dog toy is... MY TAIL!",
  is_question: false,
  topic: topic4,
  user: user3
})

Process.sleep(1000)
Repo.insert!(%Post{content: "I love beef jerky.", is_question: false, topic: topic5, user: user1})
Process.sleep(1000)

Repo.insert!(%Post{
  content: "Fromm with Chicken Broth!",
  is_question: false,
  topic: topic6,
  user: user4
})

Process.sleep(1000)

Repo.insert!(%Post{
  content:
    "Some bird or something... haha just kidding, it's a web application framework and it is growing in popularity!",
  is_question: false,
  topic: topic7,
  user: user1
})

Process.sleep(1000)

Repo.insert!(%Post{
  content: "OH NO NOT ANOTHER VET!",
  is_question: false,
  topic: topic8,
  user: user4
})

Process.sleep(1000)

Repo.insert!(%Post{
  content: "I love go for walks!",
  is_question: false,
  topic: topic9,
  user: user4
})

Process.sleep(1000)
Repo.insert!(%Post{content: "Boring as usual.", is_question: false, topic: topic10, user: user5})
Process.sleep(1000)
Repo.insert!(%Post{content: "Fantastic", is_question: false, topic: topic11, user: user1})
Process.sleep(1000)

Repo.insert!(%Post{
  content: "Top answer is above, nothing to add.",
  is_question: false,
  topic: topic7,
  user: user1
})

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

Process.sleep(1000)

Repo.insert!(%Post{
  content: "haha! I am eating popcorn while I watch this unfold in Dog-Cave.",
  is_question: false,
  topic: topic1,
  user: user4
})
