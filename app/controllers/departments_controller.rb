class DepartmentsController < ApplicationController
  # GET /departments
  # GET /departments.json
  def index
    if current_user == nil
      redirect_to root_url
      return
    end
    subdepartments = Subdepartment.all
    departments = Department.all.order(:name)
    departments.uniq {|subdepartments| subdepartments.name}
    schools = School.all.order(:name)
    artSchoolId = 1
    engrSchoolId = 2

    @artDeps = columnize(departments.select{|d| d.school_id == artSchoolId})
    @engrDeps = columnize(departments.select{|d| d.school_id == engrSchoolId })
    @otherSchools = columnize(departments.select{|d| d.school_id != artSchoolId && d.school_id != engrSchoolId })

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @departments }
    end
  end

  # GET /departments/1
  # GET /departments/1.json
  def show
    @department = Department.find(params[:id])
    @subdepartments = @department.subdepartments #Subdepartment.where(:department_id => @department.id)

    @subdepartment_ids = @subdepartments.pluck(:id).uniq
    @courses = Course.where(subdepartment_id: @subdepartment_ids)
    @course_ids = @courses.pluck(:id).uniq
    @sections = Section.where(course_id: @course_ids)
    @courses_with_sections_ids = @sections.pluck(:course_id).uniq
    @courses_with_sections = @courses.where(id: @courses_with_sections_ids)
    @subdepartments_with_sections_ids = @courses_with_sections.pluck(:subdepartment_id).uniq
    @subdepartments_with_sections = @subdepartments.find(@subdepartments_with_sections_ids)

    @next_semester = Semester.find_by(season: "Spring", year: 2015)
    @next_session = Semester.find_by(season: "January", year: 2015)
    @next_semester_id = @next_semester.id
    @next_session_id = @next_session.id
    @semester_name = "#{@next_semester.season} #{@next_semester.year}"
    @session_name = "#{@next_session.season} #{@next_session.year}"
    @courses_taught_next_semester_ids = @sections.select{|s| s.semester_id == @next_semester_id}.map(&:course_id)
    @courses_taught_next_session_ids = @sections.select{|s| s.semester_id == @next_session_id}.map(&:course_id)    
    
    @all_semesters = Semester.all
    @semesters = Hash[@all_semesters.collect {|s| [s.id, s.number]}]
    @semester_map = Hash[@all_semesters.collect{|s| [s.id, s]}]
    @courses_last_semester = Hash.new

    @sections.each do |section|
      if @courses_last_semester[section.course_id].nil? and section.semester_id != nil and section.semester_id != @next_session.id and section.semester_id != @next_semester.id
        @courses_last_semester[section.course_id] = @semester_map[section.semester_id]
      else
        if @semesters[section.semester_id] != nil and section.semester_id != nil and section.semester_id != @next_session.id and section.semester_id != @next_semester.id
          if @courses_last_semester[section.course_id].number < @semesters[section.semester_id]
            @courses_last_semester[section.course_id] = @semester_map[section.semester_id]
          end
        end
      end
    end

    # @section_ids = @sections.pluck(:id)
    # @section_professor_mapping = SectionProfessor.where(section_id: @section_ids).pluck(:section_id, :professor_id)

    @count = @subdepartments.size

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @department }
    end
  end


  private
    def department_params
      params.require(:department).permit(:name)
    end

end
