export default (arr) => {
  for (let i = 1; i < arr.length; i++) {
    const temp = arr[i];
    let j = i - 1;

    while (j >= 0 && temp < arr[j]) {
      arr[j + 1] = arr[j];
      arr[j] = temp;
      j--;
    }
  }

  return arr;
};