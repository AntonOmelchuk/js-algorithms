const quickSort = arr => {
  if (!arr.length || arr.length === 1) {
    return arr
  }

  const pivot = arr[Math.floor(arr.length / 2)]
  const less = []
  const greater = []

  arr.splice(arr.indexOf(pivot), 1)
  arr = [pivot].concat(arr)

  for (let i = 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      less.push(arr[i]);
    } else {
      greater.push(arr[i]);
    }
  }
  return quickSort(less).concat(pivot, quickSort(greater))
}
