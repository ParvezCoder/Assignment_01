let Name_case = "Zia khAn";

let NameCase1 =Name_case.toUpperCase();
let NameCase2 =Name_case.toLowerCase();
let NameCase3= Name_case.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');

console.log("Name in Uper case   "+NameCase1);
console.log("Name In Lower case  "+NameCase2);
console.log("Name In Litle case  "+NameCase3);
