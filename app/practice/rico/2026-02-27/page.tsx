const arrayOfStrings = ["1", "2", "3", "4", "5"];
const arrayOfNumbers = [1, 2, 3, 4, 5];
const arrayOfBooleans = [true, false, true, false, true];
const arrayOfObjects = [
	{ name: "John", age: 30 },
	{ name: "Jane", age: 25 },
	{ name: "Jim", age: 35 },
	{ name: "Jill", age: 28 },
];

export default function Page20260227() {
	const firstString = firstElement(arrayOfStrings);
	const firstNumber = firstElement(arrayOfNumbers);
	const firstBoolean = firstElement(arrayOfBooleans);
	const firstObject = firstElement(arrayOfObjects);

	return (
		<div>
			<h1>Rico&apos;s Practice - 2026-02-27</h1>
			<div>
				<p>
					The first element of the array of strings is:{" "}
					{JSON.stringify(firstString, null, 2)}
				</p>
				<p>
					The first element of the array of numbers is:{" "}
					{JSON.stringify(firstNumber, null, 2)}
				</p>
				<p>
					The first element of the array of booleans is:{" "}
					{JSON.stringify(firstBoolean, null, 2)}
				</p>
				<p>
					The first element of the array of objects is:{" "}
					{JSON.stringify(firstObject, null, 2)}
				</p>
			</div>
		</div>
	);
}

function firstElement<T>(arr: T[]): T {
	return arr[0];
}
