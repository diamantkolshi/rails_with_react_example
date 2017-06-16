class CreateStudents < ActiveRecord::Migration[5.0]
  def change
    create_table :students do |t|
      t.string :name, index: true
      t.string :surname
      t.integer :age
      t.integer :total_point
      t.integer :subject_count
      t.decimal :average

      t.timestamps
    end
  end
end
