class Follow < ActiveRecord::Base
	attr_accessible :followed_id ,:follower_id
	belongs_to :follower, :class_name => "User"
	belongs_to :followed, :class_name => "Event"

	validates :follower_id, :presence => true
	validates :followed_id, :presence => true
end
