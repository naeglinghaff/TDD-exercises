class BandPassFilter {
  constructor(array, lowerRange, upperRange) {
    this._track = array;
    this._lowerRange = lowerRange;
    this._upperRange = upperRange;
    this._newArray = [];
  }

  changeFrequency(){
   for(var i = 0; i < this._track.length; i++){
     if( this._track[i] === null){
       throw "Error: corrupted file";
     } else if (this._track[i] >= this._lowerRange && this._track[i] <= this._upperRange) {
       this._newArray.push(this._track[i]);
     } else if (this._track[i] > this._upperRange) {
       this._newArray.push(this._upperRange);
     } else {
       this._newArray.push(this._lowerRange);
     }
   }
  return this._newArray;
 }
}
