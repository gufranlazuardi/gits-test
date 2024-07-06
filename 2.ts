function balanceBracket(strings: string): string {
  let balance: string[] = [];
  let bracket: { [key: string]: string } = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  for (let char of strings) {
    if (char === "(" || char === "[" || char === "{") {
      balance.push(char);
    } else if (char === ")" || char === "]" || char === "}") {
      if (balance.pop() !== bracket[char]) {
        return "NO";
      }
    }
  }

  return "YES";
}

console.log(balanceBracket("[{}]"));
console.log(balanceBracket("[{}]]"));
