describe('Band Pass', () => {

  it('should take 3 arguments and return an unfiltered value', () => {
    let bandPassFilter = new BandPassFilter([30], 22, 42);
    expect(bandPassFilter.changeFrequency()).toEqual([30]);
  })

  it('has to round up 1 value', () => {
    let bandPassFilter = new BandPassFilter([10], 40, 50);
    expect(bandPassFilter.changeFrequency()).toEqual([40])
  })

  it('has to round down 1 value', () => {
    let bandPassFilter = new BandPassFilter([12], 8, 10);
    expect(bandPassFilter.changeFrequency()).toEqual([10])
  })

  it('has 2 unfiltered values', () => {
    let bandPassFilter = new BandPassFilter([12, 14], 10, 15);
    expect(bandPassFilter.changeFrequency()).toEqual([12, 14])
  })

  it('has 2 values, one that has to be round up', () => {
    let bandPassFilter = new BandPassFilter([9, 14], 10, 15);
    expect(bandPassFilter.changeFrequency()).toEqual([10, 14])
  })

  it('has a nil value', () => {
    let bandPassFilter = new BandPassFilter([9, null], 10, 15);
    expect( function(){bandPassFilter.changeFrequency()}).toThrow('Error: corrupted file');
  })

  it('can take a longer list of values', () => {
    let bandPassFilter = new BandPassFilter([9, 10, 12, 18, 25], 10, 15);
    expect(bandPassFilter.changeFrequency()).toEqual([10, 10, 12, 15, 15])
  })
})
