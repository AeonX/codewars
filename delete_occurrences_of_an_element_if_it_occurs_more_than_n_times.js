function deleteNth(arr,n){
    let countingOfObj = {}
    let newArray = [];

    arr.forEach((element) => {
      // check if objects value is undefined
      // if undefined, assigned 0
      // else, increment the value
      countingOfObj[element] = 
      typeof countingOfObj[element] === 'undefined' ?
      1 : countingOfObj[element] + 1;
      
      // put number in new array
      // if countingObj[element] <== n
      if(countingOfObj[element] <= n) {
          newArray.push(element)
      }
      
          
    });
    
    return newArray;
  }