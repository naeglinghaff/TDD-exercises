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

  it('can calculate result for 10', () => {
    expect(calculate.sum(10)).toEqual(18);
  })

  it('can calculate result for 25', () => {
    expect(calculate.sum(25)).toEqual(47);
  })

  it('can calculate result for 127', () => {
    expect(calculate.sum(127)).toEqual(247);
  })

})
