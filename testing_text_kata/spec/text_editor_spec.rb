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
end
