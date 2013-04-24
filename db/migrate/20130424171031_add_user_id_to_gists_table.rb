class AddUserIdToGistsTable < ActiveRecord::Migration
  def change
    add_column :gists, :user_id, :integer
  end
end
