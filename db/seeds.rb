# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

puts "Generating default user, mst3k"

user = User.create(
  email: "mst3k@virginia.edu", 
  password: "foobarbaz", 
  password_confirmation: "foobarbaz",
  first_name: "Mystery",
  last_name: "Theater",
  confirmed_at: Time.now)

student = Student.create(
  grad_year: 2014,
  user_id: user.id)

puts "Generating users"

20.times do
  password = Faker::Internet.password(8)
  email = Faker::Internet.user_name + "@virginia.edu"
  u = User.find_by(email: email)

  if (u == nil)
    new_user = User.create(
      email: email, 
      password: password, 
      password_confirmation: password,
      first_name: Faker::Name.first_name,
      last_name: Faker::Name.last_name,
      confirmed_at: Time.now)

    Student.create(
      grad_year: 2010 + rand(7),
      user_id: new_user.id)
  end
end

puts "Generating majors"

40.times do
  Major.find_or_create_by(name: Faker::Lorem.words(3).join.capitalize)
end

puts "Creating schools"

schools = School.create([
  {name: "College of Arts & Sciences"},
  {name: "School of Engineering & Applied Science"},
  {name: "Other Schools"}
])

puts "Generating departments"

3.times do |i|
  4.times do
    Department.find_or_create_by(name: Faker::Lorem.words(3).join.capitalize, school_id: i+1)
  end
end

puts "Generating subdepartments"

Department.count.times do |i|
  2.times do 
    name = Faker::Lorem.words(4).join.capitalize
    s = Subdepartment.find_or_create_by(name: name, mnemonic: name[0..3].upcase)
    if !Department.find(i+1).subdepartments.include?(s)
      Department.find(i+1).subdepartments.push(s)
    end
  end
end

puts "Generating courses"

Subdepartment.count.times do |i|
  10.times do
    Course.find_or_create_by(title: Faker::Company.name, course_number: 1000+rand(8000), subdepartment_id: i+1)
  end
end

puts "Generating professors"

50.times do
  f = Faker::Name.first_name
  l = Faker::Name.last_name
  ea = f[0] + (97 + rand(26)).chr + l[0] + rand(10).to_s + (0...2).map{ (97 + rand(26)).chr }.join
  Professor.find_or_create_by(first_name: f, last_name: l, email_alias: ea)
end

years = (2008..2014).to_a
seasons = ["January", "Spring", "Summer", "Fall"]

puts "Creating semesters"

years.each do |year|
  seasons.each do |season|
    p = {semester_year: year, semester_season: season}
    num = Semester.get_number(p)
    Semester.find_or_create_by(:season => season, :year => year, :number => num)
  end
end

puts "Creating course semesters"

Course.count.times do |c|
  Semester.count.times do |s|
    CourseSemester.create(course_id: c+1, semester_id: s+1)
  end
end

types = ["Lecture", "Laboratory", "Discussion"]

puts "Generating sections"

100.times do
  s = Section.find_or_create_by(sis_class_number: 10000 + rand(10000))
  s.section_number = 1 + rand(5)
  s.units = 1 + rand(4)
  s.capacity = ((rand(100)+5)*10)/10
  s.section_type = types[rand(3)]
  s.course_semester_id = 1+rand(CourseSemester.count)
  s.save
end

puts "Generating section professors"

Section.count.times do |s|
  SectionProfessor.find_or_create_by(section_id: s+1, professor_id: 1+rand(Professor.count))
end

puts "Generating reviews"

Course.all.each do |c|
  c.professors.each do |p|
    10.times do
      Review.create(course_id: c.id, professor_id: p.id, semester_id: 1+rand(Semester.count), 
                    student_id: 1+rand(User.count), professor_rating: (rand*5*2).round / 2.0, enjoyability: rand(5)+1, 
                    difficulty: rand(5)+1, recommend: rand(5)+1, amount_reading: (rand*5*2).round / 2.0,
                    amount_writing: (rand*5*2).round / 2.0, amount_homework: (rand*5*2).round / 2.0,
                    amount_group: (rand*5*2).round / 2.0,
                    comment: Faker::Lorem.paragraph(1+rand(3)))
    end
  end
end


# reviews = Review.create([
#   {course_id: 1, professor_id: 1, semester_id: 1, student_id: 1, 
#     professor_rating: 4.0, enjoyability: 5, difficulty: 3, recommend: 4,
#     amount_reading: 2.0,
#     comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum posuere justo eget blandit dictum. Etiam mattis tellus vel fermentum molestie. Sed sed porttitor lacus. Donec quis varius est. Ut sed pretium lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec accumsan nunc eu risus elementum convallis. Vestibulum lobortis, nulla sit amet consequat cursus, eros lacus ultricies lacus, id tincidunt massa eros et tellus. Mauris ultrices odio nec nulla congue faucibus. Pellentesque pharetra convallis purus, nec tincidunt sapien viverra sed. Sed sit amet volutpat nisi. Phasellus tincidunt lectus id tincidunt lobortis. Mauris ut ipsum vulputate, convallis ipsum vitae, tempor erat. Morbi suscipit nec odio vitae imperdiet."},
#   {course_id: 2, professor_id: 2, semester_id: 1, student_id: 1, 
#     professor_rating: 4.0, enjoyability: 5, difficulty: 3, recommend: 4,
#     amount_reading: 2.0,
#     comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fermentum dui et posuere lobortis. Aenean congue lectus sit amet arcu luctus, vel molestie odio tempor. Integer vitae semper est. Aenean semper leo in dolor elementum, sit amet convallis diam fringilla. Ut a feugiat turpis, quis aliquet nibh. Vivamus quis facilisis libero, ac accumsan dui. Aenean magna turpis, porta vel porttitor id, feugiat in tortor. Donec euismod non sapien sed convallis."},
#   {course_id: 3, professor_id: 3, semester_id: 1, student_id: 1, 
#     professor_rating: 4.0, enjoyability: 5, difficulty: 3, recommend: 4,
#     amount_reading: 2.0,
#     comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fermentum dui et posuere lobortis. Aenean congue lectus sit amet arcu luctus, vel molestie odio tempor. Integer vitae semper est. Aenean semper leo in dolor elementum, sit amet convallis diam fringilla. Ut a feugiat turpis, quis aliquet nibh. Vivamus quis facilisis libero, ac accumsan dui. Aenean magna turpis, porta vel porttitor id, feugiat in tortor. Donec euismod non sapien sed convallis."}
# ])

days = ["Mo", "Tu", "We", "Th", "Fr"]

sm = ["00", "30"]

puts "Generating daytimes"

50.times do
  day = days[rand(5)]
  start_hour = 8 + rand(12)
  start_minute = sm[rand(2)]
  if day == "Mo" || day == "We" || day == "Fr"
    if start_minute == "00"
      end_hour = start_hour
      end_minute = "50"
    else
      end_hour = start_hour+1
      end_minute = "20"
    end
  else
    end_hour = start_hour+1
    if start_minute == "00"
      end_minute = "15"
    else
      end_minute = "45"
    end
  end

  DayTime.find_or_create_by(days: day, start_time: "#{start_hour}:#{start_minute}", end_time: "#{end_hour}:#{end_minute}")
end

bldg = ["Hall", "Bldg", "Library"]

puts "Generating locations"

50.times do
  Location.find_or_create_by(location: Faker::Name.last_name + " " + bldg[rand(3)] + " " + rand(500).to_s)
end
