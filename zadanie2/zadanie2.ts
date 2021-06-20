function addTs(a: string): string {
  if (a[0] === "t" && a[1] === "s") {
    return a;
  }
  return `ts${a}`;
};

console.log(addTs('aaa'));
console.log(addTs('tsssaaa'));

