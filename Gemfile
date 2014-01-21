source 'https://rubygems.org'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '4.0.2'

# Use sqlite3 in development, postgresql in production
gem 'sqlite3', group: :development
gem 'pg', group: :production

# Use SCSS for stylesheets
gem 'sass-rails', '~> 4.0.0'

# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '>= 1.3.0'

# Use CoffeeScript for .js.coffee assets and views
gem 'coffee-rails', '~> 4.0.0'

# See https://github.com/sstephenson/execjs#readme for more supported runtimes
# gem 'therubyracer', platforms: :ruby

# Use jquery as the JavaScript library
gem 'jquery-rails'

# Turbolinks makes following links in your web application faster. Read more: https://github.com/rails/turbolinks
gem 'turbolinks'

# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 1.2'

group :doc do
  # bundle exec rake doc:rails generates the API under doc/api.
  gem 'sdoc', require: false
end

# Use ActiveModel has_secure_password
# gem 'bcrypt-ruby', '~> 3.1.2'

# Use unicorn as the app server
# gem 'unicorn'

# Use debugger
# gem 'debugger', group: [:development, :test]

group :development do
  # Use Capistrano for deployment
  gem 'capistrano', '~> 3.0.1'
  gem 'capistrano-rails', '~> 1.1.0'

  # An issue with the current SSHKit gem on rubygems.org prevents deploy with --dry-run
  # see: https://github.com/capistrano/sshkit/issues/39
  gem 'sshkit', '~> 1.3.0', github: 'capistrano/sshkit'

  # Live-reload support
  gem 'guard', :require => false
  gem 'guard-livereload', require: false
  gem "rack-livereload"
end

# Comfortable Mexican Sofa CMS
# gem 'comfortable_mexican_sofa', '~> 1.11.0'
gem 'comfortable_mexican_sofa', github: 'slindberg/comfortable-mexican-sofa', :branch => 'issue/default-json-response'

# Bower package manager support
gem "bower-rails", "~> 0.6.1"

# Provides google webfonts helpers
gem 'google-webfonts'
