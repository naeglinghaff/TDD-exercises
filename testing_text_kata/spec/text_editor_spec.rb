require 'spec_helper'
require_relative '../lib/text_editor'

describe 'Text Editor' do

  it 'should return an empty array for no lines' do
    input = []
    expect(text_editor(input)).to eq([])
  end
end
