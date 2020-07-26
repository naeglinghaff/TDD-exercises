# Development Process Practice
---------------------

A collection of katas and simple problems which I have attempted to solve using TDD, modelling and some basic logic. The aim is to help improve my process and to practice refactoring and robust unit testing.

## Halving Sum Kata - JavaScript

Find the code in the halving sum kata file, to run the tests:

```
open SpecRunner.html
```

### Task

> Given a positive integer n, calculate the following sum:
n + n/2 + n/4 + n/8 + ...
All elements of the sum are the results of integer division.

Examples for tests:

Input: 1
Output = 1

Input: 2
Output: 2 + 1 = 3

Input: 5
Output: 5 + 2 + 1 = 8

Input: 10
Output: (10 + 5 + 2 + 1) => 18

Input: 25
Output: 25 + 12 + 6 + 3 + 1 = 47

Input: 127
Output: 247

### Process and thoughts for next time

I feel like this one took a lot longer than it should. The first 3 tests seemed to be suitable in terms of progression. However, the original solutions I developed to pass them, either made my other tests fail or created some strange scope that made it harder to pass future tests.

The simplest solution turned out to be the easiest and the best to refactor and implement. Instead of trying to loop through the addition itself and have the result evaluate itself as a even or odd number, I looped through an array which contained each half of the integer that came before it.

This allowed me to refactor my code and reduce a large number of if and else statements in the earlier versions.

--------------------------------
## School Results - Ruby

Find the code in the school results folder. To run these tests:

```
rspec
```

### Task

> Given a string of results, calculate the number of times each result appears in the string and then return the result

### Planning:

Since the code won't need to be expanded I decided to write it as a single method. The following is a table I used to plot out examples for my tests, increasing in difficulty as they go.

| Input       | Output                  |
|:------------- |:-------------        |
| Green | Green: 1 |
|Green, Green | Green: 2 |
| Green, Amber | Green: 1\nAmber: 1 |
| Green, Green, Amber, Red | Green: 2\nAmber: 1\nRed: 1 |
| Green, Green, Amber, Red, Green | Green: 3\nAmber: 1\nRed: 1 |

### For next time

Writing the first test was relatively simple. The next test ramped up the progression a little too much. Making it harder to get green results in the next step.

Next time I would like to think of some more progressive examples to help drive my tests, before jumping into solving the whole problem in one go.

-----------------------------
## Filtering songs - JavaScript

Find the code in the song filter folder. To run these tests:

```
open SpecRunner.html
```

### Task

To create software that can filter songs. The songs will be input as an array of frequencies (given in integers) which should be edited if they fall out of the range of acceptable frequencies. This range is also provided as input (as 2 separate numbers). If the numbers do fall outside of the range they should be rounded up or down to the bottom and top values that define the range. The filtered song should be returned as new frequencies in an array.

### Edge cases

Sometimes a value may be entered into the array as a nil value.
If this happens an error should be thrown.

### Approach

* Started by creating a long list of examples to plan my tests around:

| Input       | Output                  |
|:------------- |:-------------        |
| [30], 22, 42 | [30] |
|[10], 40, 50 | [40] |
| [12], 8, 10 | [10] |
| [12, 14], 10, 15 | [12, 14] |
| [9, 14], 10, 15 | [10, 14] |
| [10, 16], 10, 15 | [10, 15] |
| [9, 16], 10, 15 | [10, 15] |
| [9, nil], 10, 15 | Error!|

These weren't at all exhausted but seemed like a good starting point

* As I wrote my first test I decided to created a class and a single function to run the frequency change
* Got the first test passing, looked to refactor and committed the changes
* Repeated the process until the challenge was criteria were met

### Notes for next time

Don't try to refactor too soon. At first I didn't like the amount of if and else statements in the solution code. However, refactoring these before we got to iteration would have made the next step much harder.

I also decided to forego some of my tests for the input examples that included 2 numbers as they passed automatically and didn't push the code on further.

To improve next time I'd like to get some more practise of refactoring code.

## Extraction Kata - Ruby

Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

```
domain_name("http://github.com/carbonfive/raygun") == "github"
domain_name("http://www.zombie-bites.com") == "zombie-bites"
domain_name("https://www.cnet.com") == "cnet"
```

| Input       | Output                  |
|:------------- |:-------------        |
| "www.free.com" | "free" |
| "http://wwww.nothing.com" | "nothing" |
| "http://www.nothing.co.uk" | "nothing" |
| "https://www.nothing.com" | "nothing" |
| "http://zen-desk.com" | "zen-desk" |

### Approach

To extract the main bulk of the domain names I split the string on the "." value. To map the urls that did not fit this pattern I tested the length of the string as well to determine which part of the array to return.

### Notes for next time

More questions surrounding edge cases would have been beneficial to map out a more comprehensive solution.

## Testing text editor kata - Ruby

### Task

Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

Write a function which takes a list of strings and returns each line prepended by the correct number.

The numbering starts at 1. The format is n: string. Notice the colon and space in between.

| Input       | Output                  |
|:------------- |:-------------        |
|[] | [] |
| ["a"] | ["1:a"] |
| ["a", "b"] | ["1:a", "2:b"] |
| ["a", "b", "c"] | ["1: a", 2: b"], "3: c"]|


### Edge cases

It should be able to accept empty strings and long inputs.

### Approach

Using a results array I could push the index of the item + 1 to get the line number and then the item itself using string interpolation.

For edge cases I had to implement a count which could keep a note of how often a blank string had appeared. However, this had limitations. It would only work in cases where there were consecutive blank strings as per the example in the kata. For further edge cases where blank strings were intermingled a different approach would need to be adopted. 
