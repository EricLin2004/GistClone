# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create!(:user_name => "Ean")
User.create!(:user_name => "Eric")

Gist.create!(:title => "Cool code", :user_id => 1)
Gist.create!(:title => "Gist code", :user_id => 2)
Gist.create!(:title => "Cool 2", :user_id => 1)

Favorite.create!(:user_id => 1, :gist_id => 1)
Favorite.create!(:user_id => 2, :gist_id => 3)