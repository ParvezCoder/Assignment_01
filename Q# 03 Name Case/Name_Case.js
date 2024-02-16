var Name_case = "Zia khAn";
var sms = Name_case.toUpperCase();
var sms2 = Name_case.toLowerCase();
var sms3 = Name_case.split(' ').map(function (word) { return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(); }).join(' ');
// let sms3=Name_case .split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
console.log("Name in Uper case   " + sms);
console.log("Name In Lower case  " + sms2);
console.log("Name In Litle case  " + sms3);
