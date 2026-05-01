const Page = () => {
    return(
        <div className="flex flex-col items-start">
            <h1>2026-05-1</h1>
            <div className="mt-12 flex flex-col items-start gap-4">
                <p>For real: {[1,2,3,4,5].map((num) => num * 3)}</p>
                <p>Mine: {map([1,2,3,4,5], (num) => num * 3)}</p>
            </div>
            <div className="mt-12 flex flex-col items-start gap-4">
                <p>For real: {[1,2,3,4,5,6,7,8,9,10].filter((num) => num % 2 === 0)}</p>
                <p>Mine: {filter([1,2,3,4,5,6,7,8,9,10], (num) => num % 2 === 0)}</p>
            </div>
            <div className="mt-12 flex flex-col items-start gap-4">
                <p>For real: {[5,10,25,85,10].every((num) => num % 5 === 0) ? "Yippie it passed" : "You failed and are going to hell!"}</p>
                <p>Mine: {every([5,10,25,85,10], (num) => num % 5 === 0) ? "Yippie it passed" : "You failed and are going to hell!"}</p>
            </div>
        </div>
    )
}

export default Page

function map<T, U>(arr: T[], fn: (item: T) => U): U[] {
  // map is used to transform each value in an array. It takes a function as an argument, then
  // loops over each element in the array and calls the function with each one. Whatever that
  // function returns is used as a new value in a new array.

  const newArray: U[] = [];

  arr.forEach((item) => {
    const newItem = fn(item);
    newArray.push(newItem);
  });

  return newArray;
}

function filter<T>(arr: T[], fn: (item: T) => boolean): T[] {
    // filter is used to remove elements you don't want from an array. It takes a function as an
    // argument, then loops over each element in the array and calls the function with each one.
    // If the function returns true the element is kept, otherwise it is filtered out.

    const newArray: Array<T> = []

    arr.forEach((item) => fn(item) && newArray.push(item))

    return newArray;
}

function every<T>(arr: T[], fn: (item: T) => boolean): boolean {
    // every is used to check whether every element in an array meets a certain criteria. It takes
    // a function as an argument, then loops over each element in the array and calls the function with
    // each one. If the function returns false for any of the elements the iteration stops and false is
    // immediately returned. If the function returns true for every element then true is returned.

    let returnVal: boolean = true

    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i]) === false) {
            returnVal = false
        }
    }

    return returnVal;
}