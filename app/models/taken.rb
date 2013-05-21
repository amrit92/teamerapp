class Taken < ActiveRecord::Base
  attr_accessible :taker_id
  
  belongs_to :taker, :class_name => “User”
  belongs_to :taken, :class_name => “Task”

  validates :taken_id :presence => true
  validates :taken_id :presence => true

end
