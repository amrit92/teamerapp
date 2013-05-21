class PagesController < ApplicationController
	before_filter :authenticate, :only => [:create, :destroy]
before_filter :authorized_user, :only => :destroy

def home
@title= "home"
@event = Event.new if signed_in?
end

def create
@event = current_user.events.build(params[:event])
if @event.save
flash[:success] = "Event created!"
redirect_to root_path
else
@feed_items = []
render 'pages/home'
end
end

def destroy
    @event.destroy
    redirect_to root_path
end

private

def authorized_user
@event = Event.find(params[:id])
redirect_to root_path unless current_user?(@event.user)
end


end