class HalvingSum {

  constructor() {
  }

  sum(int) {
    let result = halfValue(int);

    if (int === 1) {
      return int;
    } else if (checksRemainder(int) === true) {
      return result + 1;
    } else {
      return result;
    }

    function halfValue(int) {
      return int + Math.floor(int/2);
    }

    function checksRemainder(int) {
     if ((int % 2) === 1) {
       return true;
     } else {
     return false;
    }
    }
  }

}
