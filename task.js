const a = [121, 144, 19, 161, 19, 144, 19, 11];
const b = [121, 14641, 20736, 361, 25921, 361, 20736, 361];
console.log(comp(a, b));

function comp(array1, array2) {
  if (!array1 || !array2) {
    return false;
  }
  if (array1.length !== array2.length) {
    return false;
  }
  const sortArray1 = [...array1].sort((prevVal, nextVal) => prevVal - nextVal);
  const sortArray2 = [...array2].sort((prevVal, nextVal) => prevVal - nextVal);
  console.log(sortArray1);
  console.log(sortArray2);
  for (let i = 0; i < sortArray1.length; i++) {
    const power = Math.pow(sortArray1[i], 2);
    if (power !== sortArray2[i]) {
      return false;
    }
  }
  return true;
}
