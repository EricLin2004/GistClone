class User < ActiveRecord::Base
  attr_accessible :user_name

  has_many :gists
  has_many :favorites
end
