require 'spec_helper'
require_relative '../lib/domain_name'

describe "domain name"  do
  it 'should return a string of the domain name' do
    url = "www.free.com"
    expect(domain_name(url)).to eq('free')
  end

  it 'should return another string of the domain name' do
    url = "www.nothing.com"
    expect(domain_name(url)).to eq('nothing')
  end

  it 'should return domain names without www.' do
    url = "http://github.com/carbonfive/raygun"
    expect(domain_name(url)).to eq('github')
  end

  it 'should return domain names with .co.uk' do
    url = "http://www.zombie-bites.co.uk"
    expect(domain_name(url)).to eq('zombie-bites')
  end
end
