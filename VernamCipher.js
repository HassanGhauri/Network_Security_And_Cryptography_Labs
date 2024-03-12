// Method 1
// Returning encrypted text
function stringEncryption(text, key) {
    // Initializing cipherText
    let cipherText = "";
 
    // Initialize cipher array of key length
    // which stores the sum of corresponding no.'s
    // of plainText and key.
    let cipher = [];
    for (let i = 0; i < key.length; i++) {
        cipher[i] = text.charCodeAt(i) - 'A'.charCodeAt(0) + key.charCodeAt(i) - 'A'.charCodeAt(0);
    }
 
    // If the sum is greater than 25
    // subtract 26 from it
    // and store that resulting value
    for (let i = 0; i < key.length; i++) {
        if (cipher[i] > 25) {
            cipher[i] = cipher[i] - 26;
        }
    }
 
    // Converting the no.'s into integers
 
    // Convert these integers to corresponding
    // characters and add them up to cipherText
    for (let i = 0; i < key.length; i++) {
        let x = cipher[i] + 'A'.charCodeAt(0);
        cipherText += String.fromCharCode(x);
    }
 
    // Returning the cipherText
    return cipherText;
}
 
// Method 2
// Returning plain text
function stringDecryption(s, key) {
    // Initializing plain text
    let plainText = "";
 
    // Initializing integer array of key length
    // which stores difference
    // of corresponding no.'s of
    // each character of cipherText and key
    let plain = [];
 
    // Running for loop for each character
    // subtracting and storing in the array
    for (let i = 0; i < key.length; i++) {
        plain[i] = s.charCodeAt(i) - 'A'.charCodeAt(0) - (key.charCodeAt(i) - 'A'.charCodeAt(0));
    }
 
    // If the difference is less than 0
    // add 26 and store it in the array.
    for (let i = 0; i < key.length; i++) {
        if (plain[i] < 0) {
            plain[i] = plain[i] + 26;
        }
    }
 
    // Converting int to corresponding char
    // add them up to plainText
    for (let i = 0; i < key.length; i++) {
        let x = plain[i] + 'A'.charCodeAt(0);
        plainText += String.fromCharCode(x);
    }
 
    // Returning plainText
    return plainText;
}
 
// Method 3
// Main driver method
function main() {
    // Declaring plain text
    let plainText = "Compute";
 
    // Declaring key
    let key = "decrypt";
 
    // Converting plain text to toUpperCase
    // function call to stringEncryption
    // with plainText and key as parameters
    plainText = plainText.toUpperCase();
    key = key.toUpperCase();
 
    let encryptedText = stringEncryption(plainText, key);
 
    // Printing cipher Text
    console.log("Cipher Text - " + encryptedText);
 
    // Calling above method to stringDecryption
    // with encryptedText and key as parameters
    console.log("Message - " + stringDecryption(encryptedText, key));
}
 
// Call the main function
main();