class Idea < ActiveRecord::Base
  validates :title, :body, presence: true
end
