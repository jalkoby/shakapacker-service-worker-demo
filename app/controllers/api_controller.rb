class ApiController < ActionController::API
  def trends
    render json: 12.times.map { { name: FFaker::Lorem.word, count: 12 + rand(300) } }
  end

  def feed
    list = 20.times.map do
      {
        username: FFaker::Internet.user_name,
        body: FFaker::Lorem.paragraph,
        avatar: FFaker::Avatar.image
      }
    end
    render json: list
  end

  def profile
    render json: {  username: FFaker::Internet.user_name, avatar: FFaker::Avatar.image }
  end
end
