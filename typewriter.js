const sentence = "This is a string exmaple and the console log will always come after";

const type = async (char) => {
  setTimeout(() => {
    process.stdout.write(char)
  }, 50);
}

for (char of sentence)
{
  type(char);
}

setTimeout(() => {
  console.log()
}, sentence.length * 50);

