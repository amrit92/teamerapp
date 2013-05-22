class TakensController < ApplicationController
	before_filter :authenticate
	def create
		@task = Task.find(params[:taken][:taken_id])
		current_user.take!(@task)
		redirect_to @current_user
	end
	def destroy
		@task = Task.find(params[:id]).taken
		#@task = Task.find(params[:taken][:taken_id])
		#@task = Task.find_by_id(:taken_id)
		#@task = Task.find(:taken_id)
		
		current_user.leave_task!(@task)
		redirect_to @current_user
	end
end
