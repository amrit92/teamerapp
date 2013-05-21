class Task < ActiveRecord::Base
  attr_accessible :date, :description, :event_id, :required, :signedup, :title, :user_id

  belongs_to :event, :dependent => :destroy
  has_many :users, :dependent => :destroy

end
