class PlaceSerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :description, :url, :likes
end
