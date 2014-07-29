var a, addStuff, copy, end, i, info, key, middle, myList, myObj, myText, name, names, numberignorelast, numbers, numbers1to10, numbersalt, start, thing, value, _i, _len, _ref;

a = 3;

(addStuff = function() {
  var b, c;
  a = 4;
  b = "Srini";
  c = true;
  return $('#content').append("Don't miss it!");
})();

myList = ["Srini", 3, true];

console.log(myList);

numbers = [1, 2, 3, 4, 5];

console.log(numbers);

numbersalt = [1, 2, 3, 4, 5];

console.log(numbersalt);

numberignorelast = [0, 1, 2, 3, 4];

console.log(numberignorelast);

numbers1to10 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(numbers1to10);

start = numbers1to10.slice(0, 3);

console.log("Start : " + start);

middle = numbers1to10.slice(3, -2);

console.log("Middle : " + middle);

end = numbers1to10.slice(-2);

console.log("End : " + end);

copy = numbers1to10.slice(0);

console.log("Copy : " + copy);

[].splice.apply(copy, [3, 4].concat(_ref = ["a", "b", "c", "d"])), _ref;

console.log("Copy  after replace : " + copy);

myText = "The quick brown fox jumps over the lazy car";

$('#content').append(" " + myText);

myObj = {
  name: "Srini",
  travel: true,
  heros: [
    {
      name: 'Bob',
      age: 30
    }, {
      name: 'Pete',
      age: 40
    }
  ]
};

name = "Srinivas";

if (name === 'Srinivas') {
  name = "Srinivas Rao V";
}

console.log(name);

names = ["Barot Bellingham", "Constance Smith", "Hassum Harrod", "Hillary Goldwynn", "Xhou Ta"];

for (i = _i = 0, _len = names.length; _i < _len; i = ++_i) {
  thing = names[i];
  if (!(thing !== 'Hillary Goldwynn')) {
    continue;
  }
  console.log(thing);
  console.log("" + i + " " + thing);
}

info = {
  name: 'Ray',
  title: 'Staff Author',
  tuts: 'http://lynda.planetoftheweb.com'
};

for (key in info) {
  value = info[key];
  console.log("" + key + ": " + value);
}
