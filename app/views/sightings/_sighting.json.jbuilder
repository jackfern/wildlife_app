json.extract! sighting, :id, :date, :time, :latitude, :longitude, :animal_id, :created_at, :updated_at, :region 
json.url sighting_url(sighting, format: :json)
