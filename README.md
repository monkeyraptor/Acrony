# Acrony
JavaScript snippet to get the first letters from words

This snippet will get the characters: `A-Z`, `a-z`, and `0-9`. Any other character will be converted to **1 horizontal white space** (as the splitting reference).

## Usage
```
acrony(the_strings, option)
```
| Argument | Description          |
| ------------- | ----------- |
| `the_strings`      | the input string |
| `option`     | can be `0` or `1`   |

Option `0` is the default output. `0` option will take the first letter of the word.

Option `1` will group the consecutive same characters with number.

## Examples
| Input | Output          |
| ------------- | ----------- |
| `acrony("Run Ran Run", 0)`      | "RRR" |
| `acrony("Run Ran Run", 1)`      | "R3" |
| `acrony("Run Run Run, You-Son_of-Off-chart", 1)`      | "R4Y2SO2C" |
| `acrony(80, undefined)`      | [ERROR string] |
| `acrony("Rambo Ratatoey Rudolph", 3)`   | [ERROR string] |
| `acrony(["string", "strong"], 0)`   | [ERROR string] |
| `acrony({key: value}, 1)`   | [ERROR string] |

## With HTML Interface
Go to <a href="http://portraptor.johanpaul.net/2015/12/initialismacronymer.html" target="_blank" title="new window">Port Raptor</a>
