class Student < ApplicationRecord
  def self.search(keyword)
    where('name LIKE ?', "%#{keyword}%")
  end
end
