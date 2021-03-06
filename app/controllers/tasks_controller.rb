class TasksController < ApplicationController

#before_filter signed_in?   && belongs_to_event??
	def new
		@event = Event.find(params[:id]) 
		@task = Task.new # if signed_in?
	end
	
	def create
		@task = current_user.tasks.build(params[:task])
		if @task.save
			#flash[:success] = "New Task Created"
			redirect_to event_path(@task.event_id)
		else
			event_id = params[:task][:event_id]
			@event = Event.find(event_id)
			render 'new'
		end
	end

	def destroy   #should check if the current_user is same as creator user_id
		@task = Task.find_by_id(params[:id])
    	if @task.present?
			@task.destroy

		end
			redirect_back_or root_path
	end

	def index
		
	end

	def show
		@tasks = current_user.doing_tasks.all
	end

end
