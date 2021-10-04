// return masked string
function maskify(cc) {
  let constructedWord = "";
  
  [...cc].forEach((el, i) => {
    constructedWord += i < [...cc].length - 4 ? "#" : el;
  }); 
  
  return constructedWord;
}
    