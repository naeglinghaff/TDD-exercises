class BandPassFilter {
  constructor(array, lowerRange, upperRange) {
    this._track = array;
    this._lowerRange = lowerRange;
    this._upperRange = upperRange;
  }

  changeFrequency(){
    if (this._track >= this._lowerRange && this._track <= this._upperRange) {
      return this._track;
    } else {
      return [this._lowerRange];
    }
  }
}
