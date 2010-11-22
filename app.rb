require 'sinatra'
require 'uri'
require 'mongo'
require 'json/pure'

get '/' do
   File.read(File.join('public', 'index.html'))
end

get '/style.css' do
  content_type 'text/css', :charset => 'utf-8'
  File.read(File.join('public', 'style.css'))
end

post '/notify' do
  email = params[:email]
  uri = URI.parse(ENV['MONGOHQ_URL'])
  conn = Mongo::Connection.new(uri.host, uri.port)
  db = conn.db(uri.path.gsub(/^\//, ''))
  db.authenticate(uri.user, uri.password)
  coll = db.collection("emails")
  doc = {"email" => email}
  coll.insert(doc)
  if request.xhr?
    "true"
  else
     File.read(File.join('public', 'success.html'))
  end
end

get '/6n4rj806KBMdozxeqntB' do
  uri = URI.parse(ENV['MONGOHQ_URL'])
  conn = Mongo::Connection.new(uri.host, uri.port)
  db = conn.db(uri.path.gsub(/^\//, ''))
  db.authenticate(uri.user, uri.password)
  coll = db.collection("emails")
  coll.find.each{ |row| puts row.inspect }.to_json
end
