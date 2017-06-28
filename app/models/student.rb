class Student < ApplicationRecord
	validates :name, :surname, :age, :presence => true

  def self.search(keyword)
    where('name LIKE ?', "%#{keyword}%")
  end
end
