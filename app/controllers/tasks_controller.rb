class TasksController < ApplicationController

#before_filter signed_in?   && belongs_to_event??
	def new
		#debugger
		@event = Event.find(params[:id]) 
		@task = Task.new # if signed_in?
	end
	
	def create
		#debugger
		@task = current_user.tasks.build(params[:task])
		if @task.save
			flash[:success] = "New Task Created"
			redirect_to root_path
		else
			render 'pages/home'
		end
	end

	def destroy   #should check if the current_user is same as creator user_id
		@task = Task.find(params[:id])
    	@task.destroy
	end

	def show

	end

end
