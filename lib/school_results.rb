
def calculate_results(input)
  input = input.split(",").map(&:strip)
  hash = Hash.new(0)
  input.each { |key| hash[key] += 1 }
  p hash
  hash.each do |key, value |
    return "#{key}: #{value}"
  end
end
