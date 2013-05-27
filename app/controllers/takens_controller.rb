class TakensController < ApplicationController
	before_filter :authenticate
	def create
		@task = Task.find(params[:taken][:taken_id])
		current_user.take!(@task)
		redirect_to event_path(@task.event_id)
		#redirect_to @current_user
	end
	def destroy

		#@task = Task.find(params[:taken][:taken_id])
		
		@taken = Taken.find(params[:id])
		#@task = Task.find(:taken_id)
		
		current_user.leave_task!(params[:id])
		#redirect_to event_path((@taken.taken_id).event_id)
		redirect_to @current_user
	end
end
