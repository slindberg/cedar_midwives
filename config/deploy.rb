# This is used in other config values and for creating dirs during deploy
set :application, 'cedar_midwives'

# Convenience options; only used in other config values
set :user, 'slindberg'
set :home_dir, "/home/#{fetch(:user)}"

# Repository/branch to deploy from
set :repo_url, 'git@github.com:slindberg/cedar_midwives.git'
set :branch, 'private'

# Hosting-specific deploy paths
set :deploy_to, "#{fetch(:home_dir)}/webapps/#{fetch(:application)}"
set :tmp_dir, "#{fetch(:deploy_to)}/tmp"

# Environment vars to specify bins/gems local to app
set :default_env, {
  path: "#{fetch(:deploy_to)}/bin:#{fetch(:home_dir)}/bin:$PATH",
  gem_home: "#{fetch(:deploy_to)}/gems",
}

# Files/dirs that live in shared/ and are symlinked in
set :linked_files, %w{config/database.yml config/comfortable_mexican_sofa.yml}
set :linked_dirs, %w{bin log tmp/cache public/system}

# Debug logging too verbose when all goes well
set :log_level, :info
