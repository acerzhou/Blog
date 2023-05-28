## Background and Audiences

In the early this week, I have encounter a problem that can solved by recursion. However, it took me a while to get it solved. In this post, I am going to get couple questions on recursion problem, and practice writing some code.

Audiences

- Having basic understanding on Programming
- Haven't familiar recursion problem

## Recursion

In computer science, recursion is a method of solving a problem where the solution depends on solutions to smaller instances of the same problem. (From [WikiPedia](<https://en.wikipedia.org/wiki/Recursion_(computer_science)>))

## Practices

#### Exercise One

Given n as positive integer, print n!.

```
const n = 3;

const calculate = (n) => {
    if(n <= 1){
        return 1;
    }

    return calculate(n-1)*n
}

console.log(calculate(n));
```

#### Exercise Two

Given 0，1，1，2，3，5，8，13，21，34，55，89，144..., print number in position n.

```
const n = 9;

const calculate = (n) => {
    if(n <= 1){
        return n;
    }

    return calculate(n-1) + calculate(n-2)
}

console.log(calculate(n));
```

#### Exercise Three

Given n = 12345, print 54321, reverse print n.

```
const n = 12345;

const calculate = (n) => {

    console.log(n%10);
    if(n > 10 ){
        calculate(Math.floor(n/10));
    }
}

calculate(n);
```

#### Exercise Four

Tower of Hanoi, given x, y, z poles, there are n (n > 1) plates on pole x. Goal is moving all plates on pole y.

1. Each time, only move one plate
2. big plates can't be on small plates.

```
const n = 3
const from = 'x', tmp = 'y', to = 'z'

const hanoi = (n, from, tmp, to) => {
    if(n > 0){
        hanoi(n-1, from, to, tmp);
        console.log(`take ${n} from ${from} to ${to}`);
        hanoi(n-1, tmp, from, to);
    }
}

hanoi(n, from, tmp, to);
```
