class EventsController < ApplicationController
before_filter :authenticate

def new
	@event = Event.new
end

def create
@event = current_user.events.build(params[:event])

	if @event.save
		flash[:success] = "Event created!"
		redirect_to root_path
		@current_user.followevent!(@event)
	else
		render 'pages/home'
	end
end

def destroy
end

def followshow
end

def show
	@event = User.find(params[:id])
	@events = @user.events.paginate(:page => params[:page])
	@title = @user.name
end


private

def authorized_user
	@event = Event.find(params[:id])
	redirect_to root_path unless current_user?(@event.user)
end


end
