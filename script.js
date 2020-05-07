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
    
   //instantaneos do objeto Date
   var dataUm = new Date(document.getElementById("dataUm").value);
   var dataDois = new Date(document.getElementById("dataDois").value);
   return parseInt((dataUm - dataDois) / (24 * 3600 * 1000));
    
}
 
function chamar(){
   document.getElementById("numeroDias").value = difDias() + 1;;  
}




// DATE CONTROLLER
var dateController = (function() {
  
})();



// UI CONTROLLER
var UIController = (function() {

   var DOMstrings = {
      inputDateOne: '.add__date-one',
      inputDateTwo: '.add__date-two',
      inputResult: '.add__result',
      inputBtn: '.add__check',
   }

   return {
      getInput: function() {

         return {
            dateOne: document.querySelector(DOMstrings.inputDateOne).value,
            dateTwo: document.querySelector(DOMstrings.inputDateTwo).value,
            resultDate: document.querySelector(DOMstrings.inputResult).value,
         };
         
      },

      addListItem: function() {
         

                  


      },
      
      getDOMstrings: function() {
         return DOMstrings;
      }

   };
  

})();


// GLOBAL CALCULATOR CONTROLLER
var controller = (function(dateCtrl, UIctrl) {

   var setupEventListeners = function() {

      var DOM = UIctrl.getDOMstrings();

      document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

      document.addEventListener('keypress', function(enter) {
      
         if(enter.keyCode === 13 || enter.which === 13) {
            ctrlAddItem();    
         }
         
      
      });
   };


   var ctrlAddItem = function() {
      var input, newItem;
      
      // 1. GET THE DATES IN THE INPUT.
      input = UIctrl.getInput();
      

      // 2. ADD THE DATES TO THE DATE CONTROLLER.
      
      // 3. ADD THE ITEM TO THE UI


      // 4. CALCULATE THE TOTAL OF DAYS


      // 5. DISPLAY THE TOTAL ON THE UI
   
      
   }

   // INITIALIZATION FUNCTION
   return {
      init: function() {
         console.log('Application is running');
         setupEventListeners();
      }
   };

})(dateController, UIController);

controller.init();