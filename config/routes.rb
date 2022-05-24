Rails.application.routes.draw do
  
  resources :matches, only: [:create, :index, :update, :destroy]
  resources :places, only: [:index, :show, :create, :update]
  resources :users

  # except: [:index]
  # get '/users', to: 'users#index'

post '/login', to:"session#create"
get '/userInSession', to: 'session#get_logged_in_user'
delete '/logout', to:'session#destroy'
post '/createNewUser', to:'users#create'
# post '/login', to: 'application#login'


  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  delete "/deleteMatch/:id", to: 'matches#delete_match'
  patch "/placeLikes/:id", to: "places#is_liked"
end
