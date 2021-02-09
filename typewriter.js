const sentence =
  "This is a string example and the console log will always come after";

const type = function(char) {
  setTimeout(() => {
    process.stdout.write(char);
  }, 50);
};

for (let char of sentence) {
  type(char);
}

setTimeout(() => {
  console.log();
}, sentence.length * 50);
