Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#home'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get "/dashboard", to: "pages#dashboard"
  get "/stats", to: "pages#stats"
  get "/library", to: "pages#library"

  resources :recordings, only: [ :new, :create, :show ]
  resources :observers, only: [ :new, :create ] do
    resources :reviews, only: [ :new, :create ] do
      member do
        get '/final_review', to: "reviews#final_review"
      end
    end
  end
end
