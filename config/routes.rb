GistClone::Application.routes.draw do
  root :to => "sessions#new"
  resources :sessions
  resources :favorites, :only => [:index]

  resources :gists do
    resources :favorites, :only => [:create, :destroy]
  end
end
