// // // // arr = [3,1,2,3,7,34,1];
// // // // const sortedArr = arr => {
// // // //     for(var x=1; x<arr.length ;x++) {
// // // //         while(arr[x-1]>arr[x]) {
// // // //             var temp = arr[x-1];
// // // //             arr[x-1] = arr[x];
// // // //             arr[x] = temp;
// // // //         }
// // // //     }
// // // //     return arr;
// // // // }
// // // // console.log(sortedArr);

// const { resourceLimits } = require("worker_threads");

// // // // function insertionsort(arr){
// // // //     for(var i=1; i<arr.length ;i++) {
// // // //         var x=i;
// // // //         while(arr[x-1]>arr[x]) {
// // // //             var temp = arr[x-1];
// // // //             arr[x-1] = arr[x];
// // // //             arr[x] = temp;
// // // //             x -= 1;
// // // //         }
// // // //     }
// // // //     return arr;
// // // // }
// // // // console.log(insertionsort([345,122,423,53,237,134,143]));


// // // // //one function to combine two already sorted array (helper function)
// // // // const combine = (arr1, arr2)=>{
// // // //     result = [] 
// // // //     //no nested loops!
// // // //     while(arr1.length!=0 && arr2.length!=0) {
// // // //         if(arr1[0]<arr2[0]) {
// // // //             result.push(arr1.pop());
// // // //         }
// // // //         else {
// // // //             result.push(arr2.pop());
// // // //         }
// // // //     }
// // // //     result=result+arr1+arr2;
// // // //     return result;
// // // // }



// // // // //https://www.hackerearth.com/practice/algorithms/sorting/merge-sort/visualize/  with this array [2,4,6,3,5,1,9,0] start at step 74 for the logic if you need a hint

// // // // console.log(combine([2,3,4,6],[0,1,5,9]));



// // // // const merge = (arr)=>{
// // // //     //this function will break down one unsorted array into single element arrays and recursively call the combine function to combine the already sorted arrays- hint--> you can use .slice()
// // // //     if(arr.length==1) return arr;
// // // //     var midpt = Math.floor(arr.length/2);
// // // //     var leftArr=merge(arr.slice(0,midpt))
// // // //     var rightArr=merge(arr.slice(-midpt))
// // // //     return combine(leftArr,rightArr);

// // // // }
// // // // console.log(merge([2,3,4,0,1,5,9]));

// // // //helper function Partition--> goal is to pick a number at the end of the array, and arrange the array so that there is this element has everything that is less than it to the left (doesn't have to be ordered) and everything greater than it to the right (doesnt have to be ordered)
// // // const partition = (arr, start=0, end = arr.length-1)=>{ //when integrating this with quicksort, you'll need to give default parameters
// // //     var numless=start;
// // //     for(var i=start; i<=end;i++) {
// // //         if((arr[i] < arr[end]) || (i == end)) {
// // //             var temp = arr[numless];
// // //             arr[numless] = arr[i];
// // //             arr[i] = temp;
// // //             numless++;
// // //         }
// // //     }
// // //     numless--;
// // //     return numless;
// // // }

// // // //[7,3,4,9,0,2,5]
// // // //select a element at the end (this element is called out pivot number) --(5)
// // // //go from left to right and count how many elements are less than the pivot, and whenever an element that is less than the pivot is found, swap the current value with the index of numless
// // // //[3,7,4,9,0,2,5]
// // // //[3,4,7,9,0,2,5]
// // // //[3,4,0,9,7,2,5]
// // // //[3,4,0,2,7,9,5]
// // // //[3,4,0,2,5,9,7]
// // // //return back the index number that the pivot number ended up in->4
// // // // partition([7,3,4,9,0,2,5])



// // // //numless = 0->1->2->3->4

// // // const quicksort = (arr, start=0, end = arr.length-1)=>{
// // //     if(end > start) {
// // //         var pivotInd = partition(arr, start, end);
// // //         quicksort(arr, start, pivotInd-1);
// // //         quicksort(arr, pivotInd+1,end);
// // //     }
// // // }

// // // var arr = [3,7,4,9,0,2,5];
// // // quicksort(arr);
// // // console.log(arr);

// // ////given a string that can be a sentence, put each word into an array
// // // let sentence = "Hi everybody, welcome to week two"

// // // const stringToWordArr = (input)=>{
// // //     var arr=[];
// // //     var word = "";
// // //     for(var i=0; i<input.length; i++) {
// // //         if(input[i] == " ") {
// // //             arr.push(word.replace(/[,]+/, "").trim());
// // //             word="";
// // //         }
// // //         else if(input[i] == [a-zA-Z]) word +=input[i];
// // //     }
// // //     if(word!="") arr.push(word);
// // //     console.log(arr);
// // // }



// // // stringToWordArr(sentence) //["Hi", "everybody," , "welcome", "to", "week", "two"]

// // //rotate string--> given a string and a number, return a string that is the rotated version of the original by x number of characters


// // // function rotateString(str,num){
// // //     // let result=str.substr(str.length-num)+str.substr(0,str.length-num);
    
// // //     let result="";
// // //     for(var i=str.length-num; i<=str.length-1; i++) {
// // //         result += str[i];
// // //     }
// // //     for(var i=0; i<str.length-num; i++) {
// // //         result += str[i];
// // //     }
// // //     return result;
// // // }


// // // rotateString("hello", 2) //"olhel"
// // // rotateString("steph curry is best shooter of all time", 4) //"time steph curry is best shooter of all"
// // // rotateString("them roots tho", 6) //"ts thothem roo"



// // // //bonus- isRotation-->given two strings, return a boolean on if they are rotations of one another
// // // function isRotation(str1, str2){
// // //     for(var i=1; i<str1.length; i++) {
// // //         if(rotateString(str1,i) == str2) return true;
// // //     }
// // //     return false;
// // // }

// // // console.log(isRotation("hello", "lohel")) //true
// // // console.log(isRotation("abcd", "dacc")) //false

// // // //instructions: Given a string, create a function that returns to you a new string containing only the latest instance of each letter from the sentence, without any duplicates. Make it case sensitive first so 'S' and 's' are not considered duplicates

// // // function dedupeStr(str){
// // //     var arr=[];
// // //     for(var i=0;i<str.length-1;i++) {
// // //         for(var j=i+1; j<str.length; j++) {
// // //             if(str[i] == str[j]) break;
// // //             else {
// // //                 if(j==str.length-1) arr.push(str[i]);
// // //             }
// // //         }
// // //         if(i==str.length-2) arr.push(str[i+1]);
// // //     }
// // //     return arr;
// // // }

// // // console.log(dedupeStr("Snaps! crackles! pops!"))// ['S', 'n', 'r', 'a', 'c', 'k', 'l', 'e', ' ', 'o', 'p', 's', '!' ]

// // //encode--> given a string with repeating consecuctive characters, give a number for each number of repeats next to the letter
// // //example ---> aaabccccdd -> a3b1c3d2
// // const encode = (str)=>{
// //     let output = ""
// //     let count = 0;
// //     for(var i=0;i<str.length;i++) {
// //         if (i==0 || str[i]==str[i-1]) count++ 
// //         else {
// //             output += str[i-1]+count; 
// //             count=1;
// //         }
// //     }
// //     return output
    
// // }

// // console.log(encode("aaabbbsddsssddcccaaabc")) //a3b1c3d2


// // //decode--> given an encoded string, decode it
// // //example ---> a2b3c1---> aabbbc

// // const decode = (str)=>{
// //     let output = ""
// //     for(var i=0;i<str.length-1;i++) {
// //         if(/[a-z]/.test(str[i])){
// //             var stopInd = str.substring(i+1).search(/[a-zA-Z]/)+1
// //             if (!stopInd) stopInd=(str.length-1)-i;
// //             output += (str[i]).repeat(parseInt(str.substring(i+1,stopInd+i+1)));
// //         }
// //     }
// //     return output;
// // }

// // console.log(decode("a10b10c1")) //aabbbc

// //Intersect Sorted Arrays
// //Given two sorted arrays, return a new array containing all the numbers they have in common

// //Ex: given [2,4,7,9,10] and [2,3,5,7,9,10], return [2,7,9,10]
// //Ex: given [1,1,4,5,8] and [1,1,1,5,6,8] return [1,1,5,8]
// //Ex: given [1,3,5,7,9] and [2,4,6,8,10] return []

// const intersect = (arrLeft, arrRight) => {
    
//     const result = arrLeft.filter(val => {
//         const ind = arrRight.indexOf(val);
//         if(ind!=-1) arrRight.splice(ind,1);
//         return ind > -1
//     })
//     return result;
// }

// console.log(intersect([2,3,5,7,9,10],[2,4,7,9,10]));
// console.log(intersect([1,1,1,5,6,8],[1,1,4,5,8]));
// console.log(intersect([2,4,6,8,10],[1,3,5,7,9]));
// console.log(intersect([-5, 0, 1, 1, 1, 1, 1, 2, 4, 4, 6, 7],[-9, 1, 3, 4, 4, 4, 4, 4, 4, 5, 7]));

// //Union Sorted Arrays
// //Efficiently combine two pre-sorted arrays into a new sorted array

// //Ex: given [2,4,7,9,10] and [2,3,5,7,9,10], return [2,3,4,5,7,9,10]
// //Ex: given [1,2,2,2,7] and [2,2,6,6,7] return [1,2,2,2,6,6,7]
// //Ex: given [1,5,9] and [2,6,10] return [1,2,5,6,9,10]

// const union = (arrLeft, arrRight) => {
//     arrLeft.forEach(val => {
//         const ind = arrRight.indexOf(val);
//         if(ind!=-1) arrRight.splice(ind,1);
//     })
//     result=arrLeft.concat(arrRight)
//     return result.sort((a,b)=>a-b);
// }

// console.log(union([2,4,7,9,10],[2,3,5,7,9,10]));
// console.log(union([2,2,6,6,7],[1,2,2,2,7]));
// console.log(union([1,5,9],[2,6,10]));
// console.log(union([2,6,10],[1,5,9]));

function fiveHeads() {
        return new Promise( (resolve, reject) => {
            if(Math.floor(Math.random()*2)==0) resolve("head");
            else reject("tail")
        });
    }
    fiveHeads()
        .then( res => console.log(res) )
        .catch( err => console.log(err) );
    console.log( "When does this run now?" );
    