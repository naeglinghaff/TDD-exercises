class HalvingSum {

  constructor() {
    this.result = [];
  }

  sum(int) {

    let obj = this;
    let value = 0;

    if (int === 1) {
      return int;
    } else {
      for(let i = int; i > 1; i = Math.floor(i/2))
      obj.result.push(i);
    }

    for(let i = 0; i < obj.result.length; i++){
      value += obj.result[i]
    }

    if ( value % 0 ){
      return value;
    } else {
      return value + 1;
    }
  }
}
