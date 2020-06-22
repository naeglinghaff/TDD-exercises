def domain_name(url)
  result = url.split('.')
  if result.length >= 3
    result[1]
  elsif result.length == 2
    result = result[0].split("//")
    result[1]
  end
end
