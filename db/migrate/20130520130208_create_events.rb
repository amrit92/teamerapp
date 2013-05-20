class CreateEvents < ActiveRecord::Migration
  def change
    create_table :events do |t|
      t.integer :user_id
      t.string :title
      t.string :description
      t.datetime :date

      t.timestamps
    end
add_index :events, :user_id

  end


end
