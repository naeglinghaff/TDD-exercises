
def calculate_results(input)
  hash = Hash.new(0)
  result = []
  input.split(",").map(&:strip).each { |key| hash[key] += 1 }
  hash.each { |key, value| result.push("#{key}: #{value}") }
  return result.join("\n")
end
