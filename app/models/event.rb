class Event < ActiveRecord::Base
  attr_accessible :date, :description, :title, :user_id
  has_many :users, dependent => :destroy
  has_many :tasks,dependent => :destroy
belongs_to :user

validates :description, :presence => true, :length => { :maximum => 400 }
validates :user_id, :presence => true

end
