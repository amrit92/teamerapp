class TaskController < ApplicationController

#before_filter signed_in?   && belongs_to_event??
	def new
		@task = Task.new
		render 'task/new'
	end
	
	def create
		@task = current_event.task.build(params[:task])
		@task.user_id = current_user.id
		if @task.save
			flash[:success] = "New Task Created"
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
