class Event < ActiveRecord::Base
	  attr_accessible :date, :description, :title, :user_id

	  has_many :users
	  
	  
	  has_many :reverse_follows, :foreign_key=> "followed_id",
                                   :class_name => "Follow",
                                   :dependent => :destroy
	has_many :followers, :through => :reverse_follows, :source => :follower

	has_many :tasks, :dependent => :destroy
	belongs_to :user

	validates :description, :presence => true, :length => { :maximum => 400 }
	validates :user_id, :presence => true
	default_scope :order =>	 'events.created_at DESC'

	validates :title, :presence => true

	validates :date, :presence => true

	def following?(followed)
		follows.find_by_followed_id(followed)
	end
end
