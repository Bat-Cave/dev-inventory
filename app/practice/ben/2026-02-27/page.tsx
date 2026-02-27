const Page = () => {

    return(
        <div>stuff</div>
    )
}

export default Page;


function firstElement<T>(arr: T[]): T {
    return arr[0];
}

const numArr = [1, 2, 3, 4, 5];
const strArr = ["a", "b", "c", "d", "e"];
const boolArr = [true, false, true, false, true];
const arrArr = [[1, 2, 3], ["a", "b", "c"], [true, false, true]];
const mixedArr = [1, "a", true, [1, 2, 3], "b", false, [true, "2", 1]];
const nameArr = ["John", "Jane", "Jim", "Jill", "Jack"];

firstElement(numArr);
firstElement(strArr);
firstElement(boolArr);
firstElement(arrArr);
firstElement(mixedArr);
firstElement(nameArr);

function identity<T>(arg: T): T {
    return arg;
};

identity(strArr);
identity(boolArr);
identity(arrArr);
identity(mixedArr);
identity(nameArr);
