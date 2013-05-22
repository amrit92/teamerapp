class Task < ActiveRecord::Base
  attr_accessible :date, :description, :event_id, :required, :title, :user_id

  belongs_to :event, :dependent => :destroy
  has_many :users, :dependent => :destroy

  has_many :takens, :foreign_key => "taken_id",
					:dependent => :destroy

  default_scope :order => 'tasks.created_at DESC'

  validates :title, :presence =>true, :length => { :maximum => 40}
  validates :description, :presence => true, :length => { :maximum => 140}

  validates :user_id, :presence =>true
  validates :event_id, :presence =>true

  validates :required, :presence =>true
  validates :signedup, :presence =>true

end
