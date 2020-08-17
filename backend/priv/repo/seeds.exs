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
# and so on) as they will fail if something goes wrong.

alias Backend.Repo
alias Backend.Users.User
alias Backend.Posts.Post
alias Backend.Topics.Topic
alias Backend.Categories.Category

# Deletes all Tables
Repo.delete_all(Post)
Repo.delete_all(Topic)
Repo.delete_all(User)
Repo.delete_all(Category)

# Categories Table Population
category1 = Repo.insert!(%Category{name: "Category 1", description: "Description1"})
category2 = Repo.insert!(%Category{name: "Category 2", description: "Description2"})
category3 = Repo.insert!(%Category{name: "Category 3", description: "Description3"})
category4 = Repo.insert!(%Category{name: "Category 4", description: "Description4"})
category5 = Repo.insert!(%Category{name: "Category 5", description: "Description5"})
category6 = Repo.insert!(%Category{name: "Category 6", description: "Description6"})

# Users Table Population
user1 = Repo.insert!(%User{username: "testusername1", img_url: "n/a"})
user2 = Repo.insert!(%User{username: "testusername2", img_url: "n/a"})
user3 = Repo.insert!(%User{username: "testusername3", img_url: "n/a"})

# Topics Table Population
topic1 = Repo.insert!(%Topic{title: "Topic 1", user: user1, category: category1})
topic2 = Repo.insert!(%Topic{title: "Topic 2", user: user2, category: category2})
topic3 = Repo.insert!(%Topic{title: "Topic 3", user: user3, category: category3})
topic4 = Repo.insert!(%Topic{title: "Topic 4", user: user1, category: category4})
topic5 = Repo.insert!(%Topic{title: "Topic 5", user: user2, category: category5})
topic6 = Repo.insert!(%Topic{title: "Topic 6", user: user3, category: category6})
topic7 = Repo.insert!(%Topic{title: "Topic 7", user: user1, category: category1})
topic8 = Repo.insert!(%Topic{title: "Topic 8", user: user2, category: category2})
topic9 = Repo.insert!(%Topic{title: "Topic 9", user: user3, category: category3})
topic10 = Repo.insert!(%Topic{title: "Topic 10", user: user1, category: category4})
topic11 = Repo.insert!(%Topic{title: "Topic 11", user: user2, category: category5})
topic12 = Repo.insert!(%Topic{title: "Topic 12", user: user3, category: category6})

# Posts Table Population
Repo.insert!(%Post{content: "Post Content 1", is_question: true, topic: topic1, user: user1})
Repo.insert!(%Post{content: "Post Content 2", is_question: true, topic: topic2, user: user2})
Repo.insert!(%Post{content: "Post Content 3", is_question: true, topic: topic3, user: user3})
Repo.insert!(%Post{content: "Post Content 4", is_question: true, topic: topic4, user: user1})
Repo.insert!(%Post{content: "Post Content 5", is_question: true, topic: topic5, user: user2})
Repo.insert!(%Post{content: "Post Content 6", is_question: true, topic: topic6, user: user3})
Repo.insert!(%Post{content: "Post Content 7", is_question: true, topic: topic7, user: user1})
Repo.insert!(%Post{content: "Post Content 8", is_question: true, topic: topic8, user: user2})
Repo.insert!(%Post{content: "Post Content 9", is_question: true, topic: topic9, user: user3})
Repo.insert!(%Post{content: "Post Content 10", is_question: true, topic: topic10, user: user1})
Repo.insert!(%Post{content: "Post Content 11", is_question: true, topic: topic11, user: user2})
Repo.insert!(%Post{content: "Post Content 12", is_question: true, topic: topic12, user: user3})
Repo.insert!(%Post{content: "Post Content 13", is_question: false, topic: topic1, user: user1})
Repo.insert!(%Post{content: "Post Content 14", is_question: false, topic: topic2, user: user2})
Repo.insert!(%Post{content: "Post Content 15", is_question: false, topic: topic3, user: user3})
Repo.insert!(%Post{content: "Post Content 16", is_question: false, topic: topic4, user: user1})
Repo.insert!(%Post{content: "Post Content 17", is_question: false, topic: topic5, user: user2})
Repo.insert!(%Post{content: "Post Content 18", is_question: false, topic: topic6, user: user3})
Repo.insert!(%Post{content: "Post Content 19", is_question: false, topic: topic7, user: user1})
Repo.insert!(%Post{content: "Post Content 20", is_question: false, topic: topic8, user: user2})
Repo.insert!(%Post{content: "Post Content 21", is_question: false, topic: topic9, user: user3})
Repo.insert!(%Post{content: "Post Content 22", is_question: false, topic: topic10, user: user1})
Repo.insert!(%Post{content: "Post Content 23", is_question: false, topic: topic11, user: user2})
Repo.insert!(%Post{content: "Post Content 24", is_question: false, topic: topic12, user: user3})
Repo.insert!(%Post{content: "Post Content 25", is_question: false, topic: topic1, user: user1})
Repo.insert!(%Post{content: "Post Content 26", is_question: false, topic: topic2, user: user2})
Repo.insert!(%Post{content: "Post Content 27", is_question: false, topic: topic3, user: user3})
Repo.insert!(%Post{content: "Post Content 28", is_question: false, topic: topic4, user: user1})
Repo.insert!(%Post{content: "Post Content 29", is_question: false, topic: topic5, user: user2})
Repo.insert!(%Post{content: "Post Content 30", is_question: false, topic: topic6, user: user3})
Repo.insert!(%Post{content: "Post Content 31", is_question: false, topic: topic7, user: user1})
Repo.insert!(%Post{content: "Post Content 32", is_question: false, topic: topic8, user: user2})
Repo.insert!(%Post{content: "Post Content 33", is_question: false, topic: topic9, user: user3})
Repo.insert!(%Post{content: "Post Content 34", is_question: false, topic: topic10, user: user1})
Repo.insert!(%Post{content: "Post Content 35", is_question: false, topic: topic11, user: user2})
Repo.insert!(%Post{content: "Post Content 36", is_question: false, topic: topic12, user: user3})
Repo.insert!(%Post{content: "Post Content 37", is_question: false, topic: topic1, user: user1})
Repo.insert!(%Post{content: "Post Content 38", is_question: false, topic: topic2, user: user2})
Repo.insert!(%Post{content: "Post Content 39", is_question: false, topic: topic3, user: user3})
Repo.insert!(%Post{content: "Post Content 40", is_question: false, topic: topic4, user: user1})
Repo.insert!(%Post{content: "Post Content 41", is_question: false, topic: topic5, user: user2})
Repo.insert!(%Post{content: "Post Content 42", is_question: false, topic: topic6, user: user3})
Repo.insert!(%Post{content: "Post Content 43", is_question: false, topic: topic7, user: user1})
Repo.insert!(%Post{content: "Post Content 44", is_question: false, topic: topic8, user: user2})
Repo.insert!(%Post{content: "Post Content 45", is_question: false, topic: topic9, user: user3})
Repo.insert!(%Post{content: "Post Content 46", is_question: false, topic: topic10, user: user1})
Repo.insert!(%Post{content: "Post Content 47", is_question: false, topic: topic11, user: user2})
Repo.insert!(%Post{content: "Post Content 48", is_question: false, topic: topic12, user: user3})
