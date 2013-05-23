class Invite < ActiveRecord::Base
  attr_accessible :uid, :eid

  belongs_to :inviter, :class_name => "User"
belongs_to :invitee, :class_name => "User"

validates :uid, :presence => true
validates :eid, :presence => true


end
