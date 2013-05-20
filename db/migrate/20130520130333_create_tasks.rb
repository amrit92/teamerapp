class CreateTasks < ActiveRecord::Migration
  def change
    create_table :tasks do |t|
      t.integer :user_id
      t.integer :event_id
      t.string :title
      t.string :description
      t.datetime :date
      t.integer :required
      t.integer :signedup

      t.timestamps
    end
  end
end
