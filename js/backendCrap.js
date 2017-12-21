      var promptID;
      var responses = "| ";
      /*
      Determines if front end should generate buttons or a text box
      @param int prompt ID 
      @return boolean true if buttons should be generated, false if a text field should be generated instead
      */
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
          return false;
          break;
          case 4: 
          return true;
          break;
          case 5: 
          return true;
          break;
          default:
          return false;
          break;
        }
      }
      /*
      Gets the text of a prompt by the ID of the prompt
      @param int prompt ID
      @return String prompt text
      */
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
      /*
      Gets the next prompt id based on the response goto
      @param String rID; ID of the response
      @return int prompt ID
      */ 
      function getGoTo(){
        switch(arguments[0]){
          case "r1":
            return 2;
            break;
          case "r2":
            return 3;
            break;
          case "r5":
            return 4;
            break;
          case "r7":
            return 5;
            break;
          case "r8":
            return 2;
            break;
          default:
            printInfo();
            return 0; // should call gmail function
            break;
        }
      }
      /*
      Prints history of prompts and selected responses
      */
      function printInfo() {
      for(var i = 0; i < document.getElementsByClassName("active").length; i++) {
          responses = responses.concat(document.getElementsByClassName("active")[i].innerHTML + " | ");
        }
        
        alert(responses);
      }
      /*
      Gets responses based on question ID
      @param int prompt ID 
      @return String[]
      */
      function getResponses(){
        switch(arguments[0]){
          case 1:
            return ['r1','r2','r3'];
            break;
          case 2:
            return ['r4','r5'];
            break;
          case 4:
            return ['r6','r7'];
            break;
          case 5;
            return ['r8'];
            break;
          default: 
            return '';
            break;
        }
      }
      /* Get response text based on rID
      @param String rID 
      @return String response text 
      */
      function getResponseByID(){
         switch(arguments[0]){
          case "r1":
            return "My Computer's Broken";
            break;
          case "r2":
            return "I need equipment set up";
            break;
          case "r3":
            return "Email directly with extraneous case";
            break;
          case "r4":
            return "Yes";
            break;
          case "r5":
            return "No";
            break;
          case "r6":
            return "Yes";
            break;
          case "r7":
            return "No";
            break;
          case "r8":
            return "OK";
            break;
          default: 
            return ""; // should call gmail function
            break;
        }
      }