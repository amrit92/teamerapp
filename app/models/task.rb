class Task < ActiveRecord::Base
  attr_accessible :date, :description, :event_id, :required, :signedup, :title, :user_id

  belongs_to :event, :dependent => :destroy
  has_many :users, :dependent => :destroy

  default_scope :order => 'tasks.created_at DESC'

  validates :title, :presence =>true, :length => { :maxmum => 40}
  validates :description, :presence => true, :length => { :maxmum => 140}

  validates :user_id, :presence =>true
  validates :event_id, :presence =>true

  validates :required, :presence =>true
  validates :signedup, :presence =>true

end
