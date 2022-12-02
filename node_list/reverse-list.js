//print all values of list in a straight and reverse order

class Node {
  constructor(value, next) {
    (this.value = value), (this.next = !!next ? next : null);
  }
}

const straightList = (list) => {
  while (list) {
    console.log("Node", list.value);
    list = list.next;
  }
};

const reverseList = (list) => {
  if (list.next) reverseList(list.next);
  console.log("Node", list.value);
};

const reverseArrList = (list) => {
  const arr = [];
  while (list) {
    arr.unshift(list.value);
    list = list.next;
  }
  for (let i = 0; i < arr.length; i++) {
    console.log("Node:", arr[i]);
  }
};


//---------test with log------------
// const a = new Node(3);
// const b = new Node(2, a);
// const c = new Node(1, b);

// console.log("reverse");
// reverseList(c);

// console.log("reverseArr");
// reverseArrList(c);

// console.log("Straight");
// straightList(c);
