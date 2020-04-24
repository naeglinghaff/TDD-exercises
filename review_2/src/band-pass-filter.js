class BandPassFilter {
  constructor(array, lowerRange, upperRange) {
    this._track = array;
    this._lowerRange = lowerRange;
    this._upperRange = upperRange;
  }

  changeFrequency(){
    return this._track;
  }
}
