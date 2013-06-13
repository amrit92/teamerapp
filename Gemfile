source 'http://rubygems.org'
ruby "1.9.3"

gem 'rails', '3.2.13'

# Bundle edge Rails instead:
# gem 'rails', :git => 'git://github.com/rails/rails.git'



#gem "vanity", :git => 'git://github.com/vishnu-chronus/vanity'
gem "vanity", :path => 'vanity'
#gem "vanity", :git => 'git@github.com:apartmentlist/vanity.git', :ref => '2521048fdf3662d6a4a95a42f5a2867bf2d2b9d2'

gem 'garb', :git => 'git://github.com/Sija/garb.git'

#gem "redis"

# Before A/B testing

gem 'bootstrap-datetimepicker-rails'
group :production, :staging do
  gem "pg"
end

group :development, :test do
  gem "sqlite3"
end

gem 'gravatar_image_tag'
gem 'therubyracer'
gem 'simple_form'
#gem 'bootstrap-sass'
gem 'binding_of_caller'

gem 'jquery-datatables-rails', github: 'rweng/jquery-datatables-rails'
# Gems used only for assets and not required
# in production environments by default.
group :assets do
  gem 'sass-rails',   '~> 3.2.3'
  gem 'coffee-rails', '~> 3.2.1'

  # See https://github.com/sstephenson/execjs#readme for more supported runtimes
  # gem 'therubyracer', :platforms => :ruby
  gem 'debugger'
  gem 'uglifier', '>= 1.0.3' 
 gem 'better_errors'
  gem 'faker'
  gem 'will_paginate'
end

gem 'jquery-rails'
gem 'jquery-ui-rails'

gem 'jquery_datepicker'
#group :development do
#	gem 'annotate-models', '1.0.4'
#end
# To use ActiveModel has_secure_password
# gem 'bcrypt-ruby', '~> 3.0.0'

# To use Jbuilder templates for JSON
# gem 'jbuilder'

# Use unicorn as the app server
# gem 'unicorn'

# Deploy with Capistrano
# gem 'capistrano'

# To use debugger

