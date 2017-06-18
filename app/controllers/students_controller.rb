class StudentsController < ApplicationController
  def index
  	@students = Student.all
  end

  def create
  	@student = Student.new(student_params)
  	render json: @student
  	# if @lift.save
  	# 	render json: @student
  	# else
  	# 	render json: @student.errors, status: :unprocessable_entity
  	# end
  end

  def show 
  	@student = Student.first
  end

  private

  def student_params 
  	params.require(:student).permit(:name, :surname, :age, :total_point, :subject_count, :average)
  end
end
