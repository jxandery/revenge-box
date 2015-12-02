Rails.application.routes.draw do
  mount MagicLamp::Genie, at: '/magic_lamp' if defined?(MagicLamp)

  resources :ideas

  namespace :api do
    namespace :v1 do
      resources :ideas
    end
  end

end


