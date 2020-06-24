/****** ATUALIZA O DIA DO WEBSITE *******/

function date() {

    var now = new Date();
 
    months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    dates = [' ', '1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th', '11th', '12th', '13th', '14th', '15th', '16th', '17th', '18th', '19th', '20th', '21st', '22nd', '23rd', '24th', '25th', '26th', '27th', '28th', '29th', '30th', '31st', '32nd'];
 
    month = now.getMonth();
    day = now.getDate();
    year = now.getFullYear();
 
    document.getElementById('monthday').innerHTML = months[month] + ' ' + dates[day] + ''+ ', ' + year;
 
 };
 
 date();
 
 
 /******* função que recupera os valores dos inputs tipo date e
 calcula a diferença entre eles. *******/

function difDias(){
   
   var dataUm = new Date(document.getElementById("dataUm").value);
   var dataDois = new Date(document.getElementById("dataDois").value);
   return parseInt((dataUm - dataDois) / (24 * 3600 * 1000) + 1);
    
}
 


/******** APRESENTA O RESULTADO DA DIFERENÇA DAS DATAS ********/

function chamar(){
   document.getElementById("numeroDias").value = difDias();
}

var resultado = document.getElementsByName('valor[]');
var total = 0;
var n = 0;
var dias = [];

function somaDias() {
    
   var dataUm = new Date(document.querySelector('.add__date-two').value);
   var dataDois = new Date(document.querySelector('.add__date-one').value);
   var resultado = parseInt(((dataUm - dataDois) / (60 * 60 * 24 * 1000)) + 1);

   dias.push(resultado)
   total = total + dias[n]
   n++

   document.getElementById('total').innerHTML = total + ' Days';
}



document.querySelector('.add__check').addEventListener('click', function() {

   var inputValue1 = new Date(document.getElementById('dataUm').value);

   var inputValue2 = new Date(document.getElementById('dataDois').value);
   console.log(typeof inputValue1);

   var day1 = inputValue1.getUTCDate();
   var month1 = inputValue1.getUTCMonth() + 1;
   var year1 = inputValue1.getFullYear();

   if (day1 < 10 ) {
      day1 = '0' + day1;
   }

   if (month1 < 10) {
      month1 = '0' + month1;
   }

   var day2 = inputValue2.getUTCDate();
   var month2 = inputValue2.getUTCMonth() + 1;
   var year2 = inputValue2.getFullYear();

   if (day2 < 10 ) {
      day2 = '0' + day2;
   }

   if (month2 < 10) {
      month2 = '0' + month2;
   }

   if (true) {
       document.getElementById('firstdate').innerHTML += day2 + '/' + month2 + '/' + year2 + '</br>';
       document.getElementById('seconddate').innerHTML += day1 + '/' + month1 + '/' + year1 + '</br>';
       document.getElementById('sinal').innerHTML += '-' + '</br>';
       document.getElementById('resultdays').innerHTML += difDias() + ' Days' + '</br>';
   }

})
