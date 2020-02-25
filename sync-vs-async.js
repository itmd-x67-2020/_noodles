
function returnHello() {
  return "Hello";
}

async function returnHelloAsync() {
  return "Hello, I'm async";
}

function returnHelloPromise() {
  return new Promise(function(resolve,reject) {
    resolve("I'm a resolved promise! Hello!");
  });
};

console.log(`The value of returnHello() is ${returnHello()}`);

const now = Date.now();
setTimeout(function() {
  console.log(`Five seconds have passed; actually ${Date.now() - now} milliseconds have passed.`);
}, 5000);

const hello = returnHello();

console.log(`The value of hello is ${hello}`);
