class PagesController < ApplicationController
def home
@title = "Home"

end


  def help
  	@title = "Help"
  end

  def about
  end
  
  def contact
  end
end
