import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });

function MinWindowSubstring(strArr) {
    let N = strArr[0];
    let K = strArr[1];

    // Create a dictionary to store the count of each character in K
    let char_count = {};
    for (let char of K) {
        char_count[char] = char_count[char] ? char_count[char] + 1 : 1;
    }

    // Initialize variables to keep track of the substring
    let start = 0;
    let min_length = N.length + 1;
    let min_substring = "";
    let count = K.length; // number of characters yet to be found in substring

    // Iterate through the string N
    for (let i = 0; i < N.length; i++) {
        // If the current character is in K, decrement the count
        if (char_count[N[i]] > 0) {
            count--;
        }
        char_count[N[i]]--;

        // Check if all characters in K have been found in the substring
        while (count === 0) {
            // Update the substring if it is smaller than the current minimum
            if (i - start + 1 < min_length) {
                min_length = i - start + 1;
                min_substring = N.substring(start, i + 1);
            }

            // If the start character is in K, increment the count
            if (char_count[N[start]] === 0) {
                count++;
            }
            char_count[N[start]]++;

            // Move the start pointer to the next character
            start++;
        }
    }

    // Return the smallest substring
    return min_substring;
}
     
  // keep this function call here 
  rl.question(MinWindowSubstring(["ahffaksfajeeubsne", "jefaa"]));