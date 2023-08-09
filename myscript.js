function findBiggestAndSmallest(numbers) {
    if (numbers.length === 0) {
      return { };
    }
    let biggest = numbers[0];
    let smallest = numbers[0];
  
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] > biggest) {
        biggest = numbers[i];
      }
      if (numbers[i] < smallest) {
        smallest = numbers[i];
      }
    }
  
    return { biggest, smallest };
  }