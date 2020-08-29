const binarySearch = (sortedArray, searchedEl) => {
    let start = 0
    let end = arr.length - 1

    while (start <= end) {
        let mid = Math.floor((start + end) / 2)
        let guess = sortedArray[mid]

        if (searchedEl === guess) {
            console.log('find: ', guess, searchedEl)
            return guess
        } else if (searchedEl > guess) {
            start = mid + 1
        } else if (searchedEl < guess) {
            end = mid - 1
        } else {
            return -1
        }
    }
}
