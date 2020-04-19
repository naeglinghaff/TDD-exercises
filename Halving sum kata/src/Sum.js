class HalvingSum {

  constructor() {
  }

  sum(int) {
    if (int === 1) {
      return int;
    } else {
    let result = int + (int/2);
    return result;
    }
  }
}
