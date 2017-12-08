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
      const getQuestionByID = id =>{
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
      const getNextQuestion = rID =>{ // gets the question id based on the responce goto
        switch(rID){
          default: 
            return 0;
            break;
        }
      }
      const getResponces = id =>{ //gets array of responces based on question id
        switch(id){
          case 0: 
          return ['r1','r2','r3','r4'];
          break;
          default: 
          return '';
          break;
        }
      }