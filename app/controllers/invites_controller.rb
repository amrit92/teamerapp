class RelationshipsController < ApplicationController
	before_filter :authenticate
	def create
		@user = User.find(params[:invite][:eid])
		current_user.followevent!(@event)
		redirect_to @user
	end

	def destroy
		@user = Invite.find(params[:id]).invitee
		current_user.univite!(@event)
		redirect_to @user
	end
end
