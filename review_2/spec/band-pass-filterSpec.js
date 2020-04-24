describe('Band Pass', () => {

  it('should take 3 arguments and return an unfiltered value', () => {
    let bandPassFilter = new BandPassFilter([30], 22, 42);
    expect(bandPassFilter.changeFrequency()).toEqual([30]);
  })
})
