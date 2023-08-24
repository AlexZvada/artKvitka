// import cards from "./cards";
const sort = (array, param) => {
  let arrayToSort = [...array];
  
  let res;
  switch (param) {
    case "recomended":
      res = array;
      break;
    case "oldFirst":
      arrayToSort.sort((a, b) => {
        if (new Date(a.date) > new Date(b.date)) {
          return 1;
        }
        if (new Date(a.date) < new Date(b.date)) {
          return -1;
        }
        return 0;
      });
      res = arrayToSort;
      break;
    case "newFirst":
      arrayToSort.sort((a, b) => {
        if (new Date(a.date) < new Date(b.date)) {
          return 1;
        }
        if (new Date(a.date) > new Date(b.date)) {
          return -1;
        }
        return 0;
      });
      res = arrayToSort;
      break;
    case "cheapFirst":
      arrayToSort.sort((a, b) => {
        if (a.price > b.price) {
          return 1;
        }
        if (a.price < b.price) {
          return -1;
        }
        return 0;
      });
      res = arrayToSort;
      break;
    case "expenciveFirst":
      arrayToSort.sort((a, b) => {
        if (a.price < b.price) {
          return 1;
        }
        if (a.price > b.price) {
          return -1;
        }
        return 0;
      });
      res = arrayToSort;
      break;
    default:
      break;
  }
  return res;
};

export default sort;


