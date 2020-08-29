const selectionSort = (arr) => {
   for (let i = 0; i < arr.length - 1; i++) {
       let indexMin = i
       for (let j = i + 1; j < arr.length; j++) {
           if (arr[indexMin] > arr[j]) {
               indexMin = j
           }
       }
       if (indexMin !== i) {
           [arr[i], arr[indexMin]] = [arr[indexMin], arr[i]]
       }
    }
    return arr
}
