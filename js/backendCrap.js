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
          case "r3":
            return 3;
            break;
          case "r11":
            return 1;
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
          case 0: 
            return ['r1','r2','r3','r4'];
            break;
          case 1:
            return ['r5','r6','r7','r8'];
            break;
          case 2:
            return ['r9','r10'];
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
          case "r11":
            return "I need an equipment setup";
            break;
          default: 
            return ""; // should call gmail function
            break;
        }
      }