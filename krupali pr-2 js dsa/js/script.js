function majorityElement(arr) {
            let count = 0;
            let majorityElement = null;

            for (let i = 0; i < arr.length; i++) {
                if (count === 0) {
                    majorityElement = arr[i];
                    count = 1;
                } else if (majorityElement === arr[i]) {
                    count++;
                } else {
                    count--;
                }
            }

            count = 0;
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] === majorityElement) {
                    count++;
                }
            }

            if (count > arr.length / 2) {
                return majorityElement;
            } else {
                return "No majority element found";
            }
        }

     
        const arr = [3, 3, 4, 2, 4, 4, 2, 4, 4];
        console.log(majorityElement("majority Element is :",arr));
        document.write(majorityElement("majority Element is :",arr));



// 2


function words(str) {
    str = str.trim();

    const words = str.split(/ +/);

    const reversedWords = words.reverse();

    const reversedString = reversedWords.join(' ');

    return reversedString;
}

const inputString = "hello whats up";
console.log("Reversed String:", words(inputString));
document.write("Reversed String:", words(inputString));


// 3

function findOccurrence(str, str1) {
    return str.indexOf(str1);
}

const str = "hello krips.";
const str1 = "krips";
console.log("Index of first occurrence:", findOccurrence(str, str1));
document.write("Index of first occurrence:", findOccurrence(str, str1));