export default function Page() {
	return (
		<div className="flex flex-col gap-2 p-8">
			<h1>2026-05-01</h1>
			<div className="flex flex-col gap-2">
				<div>Native:{[1, 2, 3, 4, 5].map((item) => item * 2)}</div>
				<div>Custom:{map([1, 2, 3, 4, 5], (item) => item * 2)}</div>
			</div>
			<div className="flex flex-col gap-2">
				<div>Native:{[1, 2, 3, 4, 5].filter((item) => item % 2 === 0)}</div>
				<div>Custom:{filter([1, 2, 3, 4, 5], (item) => item % 2 === 0)}</div>
			</div>
			<div className="flex flex-col gap-2">
				<div>
					Native:{" "}
					{JSON.stringify(
						[2, 4, 6, 8, 10].every((item) => item % 2 === 0),
						null,
						2,
					)}
				</div>
				<div>
					Custom:{" "}
					{JSON.stringify(
						every([2, 4, 6, 8, 10], (item) => item % 2 === 0),
						null,
						2,
					)}
				</div>
			</div>
		</div>
	);
}

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

	const newArray: T[] = [];

	arr.forEach((item) => {
		if (fn(item)) {
			newArray.push(item);
		}
	});

	return newArray;
}

function every<T>(arr: T[], fn: (item: T) => boolean): boolean {
	// every is used to check whether every element in an array meets a certain criteria. It takes
	// a function as an argument, then loops over each element in the array and calls the function with
	// each one. If the function returns false for any of the elements the iteration stops and false is
	// immediately returned. If the function returns true for every element then true is returned.

	let result = true;

	arr.forEach((item) => {
		if (!fn(item)) {
			result = false;
			return;
		}
	});

	return result;
}
