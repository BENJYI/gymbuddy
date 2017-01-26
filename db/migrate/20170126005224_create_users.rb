class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.string :name
      t.float :height_in
      t.float :weight_lb
      t.string :email
      t.string :profile_image
      t.string :password_digest
      t.string :remember_digest

      t.timestamps
    end
  end
end
