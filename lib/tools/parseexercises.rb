file_contents = File.open('/Users/srirachacha/Desktop/PROGRAMMING/RAILS/scraper/file_contents.json','r') { |f| f.read}
exercise_json = JSON.parse(file_contents)
exercise_json.each do |exercise|
  e = Exercise.create
  muscle_name = exercise['muscle_targeted'].downcase
  m = Muscle.find_by(name:muscle_name)
  if !m
    m = Muscle.create(name:muscle_name)
  end
  e.name = exercise['name']
  m.exercises << e
end