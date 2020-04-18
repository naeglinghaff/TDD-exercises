require 'spec_helper'
require_relative '../lib/school_results'

describe 'calculate_results' do

  describe 'it should count results of string' do
    it 'counts result of 1 item in string' do
      input = "Green"
      expect(calculate_results(input)).to eq("Green: 1")
    end

    it 'counts result of 2 of the same items in string' do
      input = "Green, Green"
      expect(calculate_results(input)).to eq("Green: 2")
    end

    it 'counts results of 2 different items in string' do
      input = "Green, Amber"
      expect(calculate_results(input)).to eq("Green: 1\nAmber: 1")
    end

    it 'counts results of 4 items in string' do
      input = "Green, Green, Amber, Red"
      expect(calculate_results(input)).to eq("Green: 2\nAmber: 1\nRed: 1")
    end
  end
end
