class AddMuscleIdToExercises < ActiveRecord::Migration[5.0]
  def change
    add_column :exercises, :muscle_id, :integer
    add_index  :exercises, :muscle_id
  end
end
