const sentence = "hello there from lighthouse labs";
let timeout = 0;
// for (const char of sentence) {
// setTimeout(() => {
//   process.stdout.write(char);
// }, 1000);
// }
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(`${char}\n`);
  }, timeout);
  timeout += 500;
}