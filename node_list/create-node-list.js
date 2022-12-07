class ListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }

  toString(callback) {
    return callback ? callback(this.value) : `${this.value}`;
  }
};

const makeList = (arr) => {
  let res;
  arr
    .reverse()
    .forEach((item, i) => (res = new ListNode(+item, i === 0 ? null : res)));
  return res;
};

//console.log(makeList([1, 2, 3]));

// {
//     value: 1,
//     next: {
//         value: 2,
//         next: {
//             value: 3,
//             next: null
//         }
//     }
// }
