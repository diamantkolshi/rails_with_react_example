class StudentsController < ApplicationController
  def index
    @students = Student.all
  end

  def create
    @student = Student.new(student_params)
    if @student.save
      render json: @student
    else
      render json: @student.errors, status: :unprocessable_entity
    end
  end

  def show
    @student = Student.first
  end

  def update
    @student = Student.find(params[:id])
    if @student.update(student_params)
      render json: @student
    else
      render json: @student.error, status: :unprocessable_entity
    end
  end

  def destroy
    @student = Student.find(params[:id])
    @student.destroy
    head :no_content
  end

  def search
    @students = Student.search(params[:keyword])
    render json: @students
  end

  private

  def student_params
    params.require(:student).permit(:name, :surname, :age, :total_point, :subject_count, :average)
  end
end
