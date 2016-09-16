class Sighting < ActiveRecord::Base
  belongs_to :animal
  validates :latitude, length: { minimum: 1 }
  validates :longitude, length: {minimum: 1}
end
