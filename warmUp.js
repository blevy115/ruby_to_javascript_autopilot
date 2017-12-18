var apples = 14
console.log(apples);

console.log('I have '+apples+' apples.');

var materials = ['wood', 'metal', 'stone'];
var words = {
  'elephant': "The world's largest mammal.",
  'school': "A place of learning",
  'ice cream': "A delicious milk-based dessert."
};

var num = 16
if (num > 10) {
  console.log(num + ' is greater than 10.');
} else if (num === 10) {
  console.log(num + ' is exactly 10.');
} else {
  console.log(num + ' must be less than 10.');
}

for (count = 0; count < 10; count ++){
  console.log('Doing the same thing over and over.');
}

var base = 5
for (count = 0; count < 20; count ++){
  console.log(base + count);
}

var total = 0
for (count = 0; count < 100; count ++){
  total += count;
}

console.log(total);

for (height = 3; height < 15; height ++){
  if (height > 9){
    console.log("You can get on the rollercoaster!");
  } else {
    console.log("You are too short to ride this rollercoaster");
  }
}

var containers = ['purse', 'wallet', 'backback']
for (var index = 0; index < containers.length; index ++){
  console.log(containers[index]);
}

function hello_world(){
  console.log("Hello World!");
}
hello_world()

function add(first_num, second_num){
  return first_num + second_num;
}

var amount = add(5, 7);
console.log(amount);
