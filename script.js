//your code here
const input = document.querySelector("input");
const result = document.getElementById("result");
const submit = document.getElementById("submitBtn");
let arr = [];
const minCost =  () => {
  const values = input.value;
  arr = values.split(",");
  arr = arr.map(num => Number(num));
  result.innerHTML = minimumCostToConnectRopes(arr,arr.length);
}


function minimumCostToConnectRopes(arr, n) {
  // Initialize a priority queue with all the rope lengths
  let pq = new MinPriorityQueue({ priority: (rope) => rope });

  for (let i = 0; i < n; i++) {
    pq.enqueue(arr[i]);
  }

  let cost = 0;

  // Keep connecting ropes until only one rope is left
  while (pq.size() > 1) {
    // Remove the two shortest ropes from the priority queue
    let first = pq.dequeue().element;
    let second = pq.dequeue().element;

    // Add their lengths to the cost
    cost += first + second;

    // Add the new rope formed by connecting the two ropes to the priority queue
    pq.enqueue(first + second);
  }
	
  return cost;
}


let arr = [4, 2, 7, 6, 9];
let n = arr.length;

//console.log(minimumCostToConnectRopes(arr, n)); // Output: 62
//Here, we use a priority queue (implemented using the MinPriorityQueue class from the js-priority-queue package) to keep track of the shortest ropes at any given point. We keep connecting the two shortest ropes until only one rope is left, and add the lengths of the connected ropes to the total cost. Finally, we return the total cost.











