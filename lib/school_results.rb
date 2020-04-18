
def calculate_results(input)
  input = input.split(",")
  hash = Hash.new(0)
  input.each { |key| hash[key] += 1 }
  hash.each do |key, value |
    return "#{key}: #{value}"
  end
end
