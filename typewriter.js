const sentence = "hello there from lighthouse labs";
let num = 1000;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, num) // <= 1s delay to make it noticeable. Can dial it down later.
  num += 50;
}
setTimeout(() => {
  process.stdout.write("\n");
}, num); 