// Ex6.3 - organize strings 
 
// Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the 
// longest possible, containing distinct letters, 
 
// each taken only once - coming from s1 or s2. 
 
// Examples: 
// a = "xyaabbbccccdefww" 
// b = "xxxxyyyyabklmopq" 
// longest(a, b) -> "abcdefklmopqwxy" 
 
 
// a = "abcdefghijklmnopqrstuvwxyz" 
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz" 

function organizeStrings(s1, s2) {
    let presence = "",
      newText = (s1 + s2).toLowerCase();
    for (let char of newText) {
      if (presence.indexOf(char) === -1) {
        presence += char;
      }
    }
    return presence.split("").sort().join("");
  }
  console.log(organizeStrings("xyaabbbccccdefww", "xxxxyyyyabklmopq"));
console.log(
  organizeStrings("abcdefghijklmnopqrstuvwxyz", "abcdefghijklmnopqrstuvwxyz")
);