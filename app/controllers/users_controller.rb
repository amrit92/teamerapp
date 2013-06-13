class UsersController < ApplicationController
	before_filter :authenticate, :only => [:edit, :update]
before_filter :correct_user, :only => [:edit, :update]

before_filter :authenticate, :only => [:edit, :update]

  def new
@user = User.new
@title = "Sign up"
end


  def show
  	@user = User.find(params[:id])
    #@create_task = Task.new
    #@events = @user.events.paginate(:page => params[:page]) unless @user.events.empty?
    @events = @user.events
    @title = @user.name
    
  end

  def index
@title = "All users"
@users = User.all
end

def create
  @user = User.new(params[:user])
  if @user.save
    track! :signup      # track successful sign up
    track! :test_second_metric #, @user.follows
    sign_in @user

    redirect_to @user
  else
    @title = "Sign up"
    render 'new'
  end
end


def edit
@user = User.find(params[:id])
@title= "Edit User"
end

def update
@user = User.find(params[:id])
if @user.update_attributes(params[:user])
flash[:success] = "Profile updated."
redirect_to @user
else
@title = "Edit user"
render 'edit'
end

end

def destroy
User.find(params[:id]).destroy
flash[:success] = "User destroyed."
redirect_to users_path
end

private
def authenticate
deny_access unless signed_in?
end

def correct_user
@user = User.find(params[:id])
redirect_to(root_path) unless current_user?(@user)
end

def admin_user
redirect_to(root_path) unless current_user.admin?
end


end

