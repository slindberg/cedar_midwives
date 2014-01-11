# Load DSL and Setup Up Stages
require 'capistrano/setup'

# Includes default deployment tasks
require 'capistrano/deploy'

# Include rails specific tasks
require 'capistrano/rails'

# App/server specific deploy tasks
namespace :deploy do
  desc 'Install Bower components'
  before :compile_assets, :install_bower do
    on roles(:app) do
      within release_path do
        with rails_env: fetch(:rails_env) do
          execute :rake, 'bower:install'
        end
      end
    end
  end

  desc 'Restart nginx'
  task :restart do
    on roles(:app), wait: 5 do
      execute "#{fetch(:deploy_to)}/bin/restart"
    end
  end

  after :finishing, 'deploy:cleanup'
end
