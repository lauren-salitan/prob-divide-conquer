function findFirst(arr, num) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] < num) left = mid + 1;
    else right = mid - 1;
  }
  return left;
}

function sortedFrequency(arr, num) {
  const firstPos = findFirst(arr, num);
  if (arr[firstPos] !== num) return -1;
  const lastPos = findFirst(arr, num + 1);
  return lastPos - firstPos;
}

module.exports = sortedFrequency;
