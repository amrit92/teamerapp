class CreateInvites < ActiveRecord::Migration
  def change
    create_table :invites do |t|
      t.integer :uid
      t.integer :eid

      t.timestamps
    end

    add_index :invites, [:eid, :uid], :unique => true

  end
end
