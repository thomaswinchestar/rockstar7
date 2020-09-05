function add(a){
  return function(b){
    return a + b;
  }
}

let two = add(2)

two(5)

const sum = x => y => x + y

let one = sum(1)

one(3)
