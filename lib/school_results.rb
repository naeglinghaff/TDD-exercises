
def calculate_results(input)
  input = input.split(",").map(&:strip)
  hash = Hash.new(0)
  input.each { |key| hash[key] += 1 }
  result = []
  hash.each { |key, value| result.push("#{key}: #{value}") }
  return result.join("\n")
end
