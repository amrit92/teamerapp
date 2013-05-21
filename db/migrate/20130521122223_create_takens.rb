class CreateTakens < ActiveRecord::Migration
  def change
    create_table :takens do |t|
      t.integer :taker_id
      t.integer :taken_id

      t.timestamps
    end

    add_index :takens, :taker_id   

	add_index :takens, :taken_id

	add_index :takens, [:taker_id, :taken_id], :unique => true

  end
end
