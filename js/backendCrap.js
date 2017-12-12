      var promptID;

      function generateButtons(id){
        switch(id){
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
          return true:
          break;
          default:
          return false;
          break;
        }
      }
      function getPromptByID(id){
        switch(id){ 
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
      function getGoTo(rID){ // gets the question id based on the responce goto
        switch(rID){
          case r1:
            return 1;
            break;
          case r3:
            return 3;
            break;
          default: 
            return 0; // should call gmail function
            break;
        }
      }
      function getResponses(id){ //gets array of responces based on question id
        switch(id){
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
        //TODO
      }