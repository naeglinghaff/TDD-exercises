require 'spec_helper'
require_relative '../lib/domain_name'

describe "domain name"  do
  it 'should return a string of the domain name' do
    url = "www.free.com"
    expect(domain_name(url)).to eq('free')
  end

end
