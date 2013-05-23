  class Task < ActiveRecord::Base
  attr_accessible :date, :description, :event_id, :required, :title, :user_id, :signedup

  belongs_to :event #:dependent => :destroy
  has_many :users, :through => :takens, :source => :taker

  has_many :takens, :foreign_key => "taken_id",
					:dependent => :destroy

  


  default_scope :order => 'tasks.created_at DESC'

  validates :title, :presence =>true, :length => { :maximum => 40}
  validates :description, :presence => true, :length => { :maximum => 140}

  validates :user_id, :presence =>true
  validates :event_id, :presence =>true

  validates :required, :presence =>true
  validates :signedup, :presence =>true

  def taken?(followed)
    takens.find_by_taken_id(taken)
  end

end
