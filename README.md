# README

The code is based upon the examples in
*Agile Web Development with Rails 8*
by Sam Ruby and Dave Thomas

The main intent is to evaluate the feasibility of using sqlite3 and Kamal in a production environment for a Rails prototype web site.

The development environment is Ubuntu 24.04 LTS and Omakub 1.1.4, all running under VMWare Fusion 13.5.2. Hardware is a MacBook Air circa 2017, running macOS Monterey 12.7.6. The OS is no longer supported as a development machine by Apple or the Homebrew team, hence the virtual machine environment.

### Ruby version

3.3.4

### Database

sqlite3, version 2.5.0

### Database initialization

The usual Railsy thing: `./bin/rails db:create ; ./bin/rails db:migrate ; ./bin/rails db:seed`

### How to run the test suite

`./bin/rails test ; ./bin/rails test:system`

### Deployment Notes

I wanted to test the capabilities of Kamal, but *without* going to the trouble of renting a machine at Fly.io or Hetzner, etc, i.e. do a production deployment on localhost.

The first step was to eliminate the SSL requirement. See config/environments/production.rb and config/deploy.yml for settings. 

I also wanted to run deployments without doing a `git commit`. See the *context* setting in config/deploy.yml

I use the Brave browser for just about everything, and it has some pretty strict security settings out of the box. In order to use a non-SSL URL (i.e. HTTP) it was necessary to set (under Shields) Upgrade connections to HTTPS to *Strict*. The Firefox browser did not need any settings adjustments.

### State of the Code

Completed up to Chapter 18. Not done: Chapters 15 and 16.

One notable change in the code: the Store index view was using cache on the products list, and the images would not render in production mode. Removing the cache directives fixed the problem, but I don't have any idea why this fix worked. See the changes to app/views/store/index.html 

### Next Steps

Rails 8 has added an authentication generator. I want to work with that some more.
