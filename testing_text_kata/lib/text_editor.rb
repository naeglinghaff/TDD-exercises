def text_editor(input)
  line_no = input.length
  if line_no >= 1
    ["#{line_no}: #{input[0]}"]
  else
    []
  end
end
