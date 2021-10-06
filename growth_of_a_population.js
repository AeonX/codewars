function nbYear(p0, percent, aug, p) {
  // p0 population beginning of a year
  // percent is percentage increase per year
  // aug is amount of inhabitants coming per year
  // p is the targetted amount
  
  let year = 0;
  let growingP = 0;
  let tempP0 = p0;
  
do {
    // get growing population
    growingP = (tempP0 * (percent / 100)) + aug;
    
    // save growing population + previous population
    tempP0 = tempP0 + growingP;
    
    // increase year
    year++;
} while( tempP0 < p);

return year;
}

nbYear(1000, 2, 50, 1200);
nbYear(1500, 5, 100, 5000);
