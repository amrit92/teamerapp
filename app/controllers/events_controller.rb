class EventsController < ApplicationController
before_filter :authenticate, :only => [:create, :show, :destroy]
#before_filter :creator_user, :only => :destroy


def new
	@event = Event.new
end

def create
@event = current_user.events.build(params[:event])

	if @event.save
		#flash[:success] = "Event created!"
		redirect_to event_path(@event)
		@current_user.followevent!(@event)
	else
		#flash[:error] = "Failed to create"
		render new_event_path
	end
end

def destroy
	@event = Event.find(params[:id])
	if @event.present?
	@event.destroy
	end
	redirect_back_or root_path
end


def followshow
end

def show
	#flash[:success] = "Event "
	@event = Event.find(params[:id])
	@events = @user.events

	#@events = @user.events.paginate(:page => params[:page])
	@title = @user.name
end


private

def authorized_user
	@event = Event.find(params[:id])
	redirect_to root_path unless current_user?(@event.user)
end


end
