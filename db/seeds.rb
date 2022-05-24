# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# User.destroy_all
# Place.destroy_all
# Match.destroy_all


User.create(name: 'Evan', username: "Evan", password: '123', email:"thomasevanwatson@gmail.com")

Place.create!(name: "Natural History Museum", url:'https://washington.org/sites/default/files/michellefortephotography_overview-of-museum-of-natural-history-atrium_mydccool-via-crowdriff.jpg', address: "10th St. & Constitution Ave. NW, Washington, DC 20560", description: "The National Museum of Natural History is a natural history museum administered by the Smithsonian Institution, located on the National Mall in Washington, D.C., United States. It has free admission and is open 364 days a year.", likes: 1)
Place.create!(name: "Washington Monument", url:'https://media.npr.org/assets/img/2019/09/18/2019-09-17-washingtonmonument-mshaw-09_custom-62f6d7a78f3f4058fe985c3b61c755f313ebe3e3-s2600-c85.webp', address: "2 15th St NW, Washington, DC 20024", description: "The Washington Monument is an obelisk within the National Mall in Washington, D.C., built to commemorate George Washington, once commander-in-chief of the Continental Army in the American Revolutionary War and the first President of the United States.", likes: 1)

Match.create(user_id: 1, place_id: 1)

