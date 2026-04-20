function frankenSplice(array1, array2, index) {
  const copyArr1 = array1.slice();
  const copyArr2 = array2.slice();

  copyArr2.splice(index, 0, ...copyArr1);
  return copyArr2;
}

console.log(frankenSplice([1, 2, 3], [4, 5], 1));
