Rails.application.routes.draw do
  scope '/api', controller: :api do
    get :trends, :feed, :profile
  end

  get '/' => 'spa#index'
end
