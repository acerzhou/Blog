![JavaScript](http://acerzhou.info/Blog/images/some-javascript-array-fundamentals/javascript.png)

## Overview and background

Recently, I am working on some React components, and it involved some manipulation on arrays. In C#, there is powerful Linq giving you pretty much all tools you are going to need. It is powerful and readable. However, Javascript is a different story. I am going to summarise some basic JavaScript Array manipulations.

**Audience**

1. People having some basic knowledge
2. Haven't doing manipulation and transformation using JavaScript a lot

## Some useful JavaScript Array Functions

#### Most common used - push, pop

```
    const array = [1, 2, 3, 4, 5];
    // add 6 at the end
    const lengthOfArray =  array.push(6); // array -> [1, 2, 3, 4, 5, 6], lengthOfArray -> 6

    // get the last element
    const lastElement = array.pop(); // array -> [1, 2, 3, 4, 5], lastElement -> 6

```

#### Opposite to push & pop - shift, unshift

```
    const array = [1, 2, 3, 4, 5];
    // add 6 at the beginning
    const lengthOfArray =  array.unshift(6); // array -> [6, 1, 2, 3, 4, 5], lengthOfArray -> 6

    // get the first element
    const firstElement = array.shift(); // array -> [1, 2, 3, 4, 5], firstElement -> 6

```

#### Filter the array - filter

This method is similar to Linq Where. However, you can manipulate the element in filter function.

```
    const array = [
        {
            key: 'a',
            value: 123
        },
        {
            key: 'b',
            value: 50
        }
    ]

    const elementValueGreaterThen50 = array.filter(element => element.value > 50);
    // elementValueGreaterThen50 -> [{key: 'a', value: 123}]
    const elementKeyIsB = array.filter(element => element.key === 'b');
    // elementKeyIsB -> [{key: 'b', value: 50}]

```

#### Create a new array based on current array - map

Map is sort of similar with Linq Select, but it more powerful, as it can add attribute to the element.

```
    const array = [
        {
            key: 'a',
            value: 123
        },
        {
            key: 'b',
            value: 50
        }
    ]

    const arrayOfKeys = array.map(a => a.key);
    // arrayOfKeys -> [ 'a', 'b' ]


    const arrayOnlyWithKey = array.map(a => {return {key: a.key}});
    // arrayOnlyWithKey -> [ { key: 'a' }, { key: 'b' } ]

    const arrayOnlyWithKeyAndTag = array.map(a => {
        return {
            key: a.key,
            tag: a.key + a.value
        }
    });
    // arrayOnlyWithKeyAndTag -> [ { key: 'a', tag: 'a123' }, { key: 'b', tag: 'b50' } ]
```

#### Loop Through the array - forEach

```
    const array = [
        {
            key: 'a',
            value: 123
        },
        {
            key: 'b',
            value: 50
        }
    ]

    array.forEach(a => console.log(a.key));
    // print a  b
```

#### Powerful and interesting tool - reduce

```
    const result = [0, 1, 2, 3, 4].reduce((accumulator, currentValue, currentIndex, array) => {
        return accumulator + currentValue
    }, 10) // 10 is initial value
    // result -> 20

    const array = [
        {
            key: 'a',
            values: ['value a-1']
        },
        {
            key: 'b',
            values: ['value b-1']
        },
        {
            key: 'a',
            values: ['value a-2']
        },
        {
            key: 'b',
            values: ['value b-2']
        }
    ]

    const newArray = array.reduce((acc, cur) => {

        const indexOfExistingItem = acc.map(a => a.key).indexOf(cur.key);

        if(indexOfExistingItem !== -1){

            acc[indexOfExistingItem].values = acc[indexOfExistingItem].values.concat(cur.values);
        }else{
            acc.push(cur);
        }
        return acc;
    },[]);
    // newArray -> [ { key: 'a', values: [ 'value a-1', 'value a-2' ] }, { key: 'b', values: [ 'value b-1', 'value b-2' ] } ]

    // This example is using reduce to combine element with same keyss
```
