describe('HalvingSum', () => {
  let calculate;

  beforeEach( () => {
    calculate = new HalvingSum();
  })

  it('can calculate the result for 1', () => {
    expect(calculate.sum(1)).toEqual(1);
  })

  it('can calculate result for 2', () => {
    expect(calculate.sum(2)).toEqual(3);
  })

  it('can calculate result for 5', () => {
    expect(calculate.sum(5)).toEqual(8);
  })

})
