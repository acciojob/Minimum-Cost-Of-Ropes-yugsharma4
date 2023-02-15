//your code here
const input = document.querySelector("input");
const result = document.getElementById("result");
const submit = document.getElementById("submitBtn");
let arr = [];
const minCost =  () => {
  const values = input.value;
  arr = values.split(",");
  arr = arr.map(num => Number(num));
  arr.sort();
   let cost = arr[0] + arr[1];
    arr.shift();
   arr[0] = cost;
   
   let first = 0;
   let second = first + 1;
   let third = second + 1;
   
   while(third < arr.length){
   		let firstTwoSum = arr[first] + arr[second];
        let secThirdSum = arr[second] + arr[third];
        console.log("Inside: "+arr);
        if(firstTwoSum < secThirdSum){
        	cost += firstTwoSum;
            arr.shift(1);
            arr[0] = firstTwoSum;
        }
        else{
        	cost += secThirdSum;
            arr.pop();
            arr[1] = secThirdSum;
        }

   }

	if(arr.length != 0) cost += arr[0] + arr[1];
	result.textContent = cost;
}





