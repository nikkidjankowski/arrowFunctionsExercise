
/*
function double(arr) {
    return arr.map(function(val) {
      return val * 2;
    });
  }
  */
 const arr = [1,2,3,4];

const arrDoub = arr.map(val => val * 2);

const numbers = [1,2,3,4,5,6,7,8,9,12]; 

const find = (numbers) => numbers.map(num => num ** 2).filter(square => square % 2 === 0);

