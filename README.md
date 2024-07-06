
# Balanced Bracket

1. First because I used typescript, we have to define a data type

```bash
  function balanceBracket(strings: string): string {
      // my code
  }
```
2. After that, I create temporary variable. I named it ```let balance: string[] = [];``` 

3. I am stating the balance bracket, which is this is a ```true``` condition

```bash
  let bracket: { [key: string]: string } = {
    ")": "(",
    "]": "[",
    "}": "{",
  };
```

4. I create the ```conditional rendering``` with ```for of```.
- If ```strings``` contain ```"(", "[", and "{"```, there are will be push on my temporary variable, which is ```let balance: string = []```
- If ```")", "]", and "}"``` in ```strings``` doesnt balance with comparing in a ```bracket``` the result will return "NO", and the balance ```strings``` will return "YES"
