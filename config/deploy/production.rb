set :stage, :production
set :rails_env, :production

# Single server hosts DB, webserver, and app
server 'cedarmidwives.com', user: fetch(:user), roles: %w{web app db}
