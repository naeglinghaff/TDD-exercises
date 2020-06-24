def text_editor(input)
  line_no = input.length
  results = []
  if line_no >= 1
    input.each do | line |
      results.push("#{input.index(line) + 1}: #{line}")
    end
  end
  results
end
