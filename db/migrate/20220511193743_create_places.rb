class CreatePlaces < ActiveRecord::Migration[6.1]
  def change
    create_table :places do |t|
      t.string :name
      t.string :address
      t.string :description
      t.string :url
      t.integer :likes
      
      t.timestamps
    end
  end
end
