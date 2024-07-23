function quickSort(arr, left = 0, right = arr.length - 1) {
  console.log()
  if (left < right) {
    const pivot = partition(arr, left, right)
    console.log(`Pivot selected: ${pivot}, Array: ${arr}`)
    quickSort(arr, left, pivot - 1)
    quickSort(arr, pivot + 1, right)
  }
  return arr
}

function partition(arr, left, right) {
  const pivot = arr[right]
  console.log(`Partitioning with pivot ${pivot} from index ${left} to ${right}`)
  let i = left
  for (let j = left; j < right; j++) {
    if (arr[j] < pivot) {
      swap(arr, i, j)
      console.log(`Swapped ${arr[j]} and ${arr[i]}: ${arr}`)
      i++
    }
  }
  swap(arr, i, right)
  console.log(`Final swap with pivot: ${arr}`)
  return i
}

function swap(arr, i, j) {
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
  console.log(`Swapped ${i} and ${j}: ${arr}`)
}
  
let arr = [-6, -2, 4, 8, 20]
console.log("Original array:", arr)
arr = quickSort(arr)
console.log("Sorted array:", arr) // [-6, -2, 4, 8, 20]