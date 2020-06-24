require 'spec_helper'
require_relative '../lib/text_editor'

describe 'Text Editor' do

  it 'should return an empty array for no lines' do
    input = []
    expect(text_editor(input)).to eq([])
  end

  it 'should return the line number and corresponding string with one line' do
    input = ["a"]
    expect(text_editor(input)).to eq(["1: a"])
  end

  it "should return line number and string with 2 lines" do
    input = ["a", "b"]
    expect(text_editor(input)).to eq(["1: a", "2: b"])
  end

  it "should return line number and string with 3 lines" do
    input = ["a", "b", "c"]
    expect(text_editor(input)).to eq(["1: a", "2: b", "3: c"])
  end

  it "should handle empty strings" do
    input = ["", "", ""]
    expect(text_editor(input)).to eq(["1: ", "2: ", "3: "])
  end

  it "should handle long input" do
    input = ["puts \"Hello, world\"", "puts \"Hello, world\"", "puts \"Hello, world\"", "puts \"Hello, world\"", "puts \"Hello, world\"", "puts \"Hello, world\""]
    expect(text_editor(input)).to eq(["1: puts \"Hello, world\"", "2: puts \"Hello, world\"", "3: puts \"Hello, world\"", "4: puts \"Hello, world\"", "5: puts \"Hello, world\"", "6: puts \"Hello, world\""])
  end

end
