describe('HalvingSum', () => {
  let calculate;

  beforeEach( () => {
    calculate = new HalvingSum();
  })

  it('can calculate the result for a low number', () => {
    expect(calculate.sum(1)).toEqual(1);
  })

})
