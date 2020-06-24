def text_editor(input)
  line_no = input.length
  results = []
  if line_no >= 1
    count = 0
    input.each do | line |
      if line == ""
        count += 1
        results.push("#{count}: #{line}")
      else
        results.push("#{input.index(line) + 1}: #{line}")
      end
    end
  end
  results
end
