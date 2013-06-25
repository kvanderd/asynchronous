get '/' do
  @grandma = params[:grandma]
  # Look in app/views/index.erb
  erb :index
end

post '/grandma' do
  @grandma = params["user_input"]
  if @grandma == @grandma.upcase
  	return @grandma = "hey"
  else
  	return @grandma = "speak up"
  end
  erb :index
end
