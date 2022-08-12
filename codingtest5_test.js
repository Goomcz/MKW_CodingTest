let new_idArray = '..Minwoong_kim...@a.mat...com/%1..2.3..4-..../.....';
console.log(new_idArray);

let new_idArrayStep1 = new_idArray.toLowerCase();
console.log(new_idArrayStep1); // Step1 소문자로 바꾸기

let reg= new RegExp(/[^0-9a-z-_.]/,'g');
let new_idArrayStep2 = new_idArrayStep1.replace(reg,''); //  Step2 가능한 문자/숫자 빼고 다 삭제한 배열
console.log(new_idArrayStep2);

let reg2= new RegExp(/[.]{2,}/,'g'); // Step 3 연속된 .(마침표)를 하나의 마침표로 replace
let new_idArrayStep3 = new_idArrayStep2.replace(reg2,'.');
console.log(new_idArrayStep3);

let new_idArrayStep3_1 = new_idArrayStep3.split('');
console.log(new_idArrayStep3_1);

let new_idArrayStep3_1Length = new_idArrayStep3_1.length;
console.log(new_idArrayStep3_1Length);

if(new_idArrayStep3_1[0] == '.' || new_idArrayStep2_1[new_idArrayStep3_1Length-1] == '.'){
    
    }