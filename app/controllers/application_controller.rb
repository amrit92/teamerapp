class ApplicationController < ActionController::Base

	use_vanity :current_user

  protect_from_forgery
  include SessionsHelper

  before_filter :instantiateUser

def instantiateUser
    @user = User.new
end

end
