require 'sinatra/base'

class BowlingChallenge < Sinatra::Base

    get '/' do
        erb :index
    end

    run! if app_file == BowlingChallenge

end