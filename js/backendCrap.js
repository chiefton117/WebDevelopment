      var promptID;

      function generateButtons(){
        switch(arguments[0]){
          case 0: 
          return false;
          break;
          case 1:
          return true;
          break;
          case 2: 
          return true;
          break;
          case 3:
          return true;
          break;
          default:
          return false;
          break;
        }
      }
      function getPromptByID(){
        switch(arguments[0]){ 
          case 0: 
            return "Please add any information we should know below:";
            break;
          case 1: 
            return "What is your favorite animal?";
            break;
          case 2: 
            return "What is your favorite breed of dog?";
            break;
          case 3: 
            return "Does your favorite type of bird fly?";
            break; 
          default: 
            return "Please add any information we should know below:";
            break;
        }
      } 
      function getGoTo(){ // gets the question id based on the response goto
        switch(arguments[0]){
          case "r1":
            return 1;
            break;
          case "r3":
            return 3;
            break;
          default: 
            printInfo();
            return 0; // should call gmail function
            break;
        }
      }
      function printInfo() {
        alert(document.getElementById('active'));
      }
      function getResponses(){ //gets array of responces based on question id
        switch(arguments[0]){
          case 1: 
            return ['r1','r2','r3','r4'];
            break;
          case 2:
            return ['r5','r6','r7','r8'];
            break;
          case 3:
            return ['r9','r10'];
            break;
          default: 
            return '';
            break;
        }
      }
      function getResponseByID(){
         switch(arguments[0]){
          case "r1":
            return "dog";
            break;
          case "r2":
            return "cat";
            break;
          case "r3":
            return "bird";
            break;
          case "r4":
            return "horse";
            break;
          case "r5":
            return "labrador";
            break;
          case "r6":
            return "collie";
            break;
          case "r7":
            return "collie";
            break;
          case "r8":
            return "beagle";
            break;
          case "r9":
            return "yes";
            break;
          case "r10":
            return "no";
            break;
          default: 
            return ""; // should call gmail function
            break;
        }
      }