      var promptID;
      var responses = "| ";
      var userLog = "";
      var textField = '';
      //adds a prompt to the running record
      function recordPrompt(promptID){
        userLog += getPromptByID(arguments[0]) + ": ";
      }
      //adds a response to the running record, to be called after recordPrompt() before any other records
      function recordResponse(rID){
        userLog += getResponseByID(arguments[0]) + "<br>";
      }
      //adds text to the running record from a text field
      function recordText(text){
        userLog += arguments[0] + "<br>";
      }
      function recordTextField(text) {
        textField = arguments[0] + "<br>";
      }
      //returns current user log
      function getLog(){
        return userLog;
      }
      function submit(){
        
        console.log("Please send an email to rts@westboroughk12.org, copying and pasting this information directly into the email.  <br>" + userLog);
        
        $(document.getElementById("responseContainer")).remove();
        newPrompt("Thank you for using our service");
        var container = document.createElement("div");
        var row = document.createElement("div");
        var col = document.createElement("div");
        var prompt = document.createElement("p");

        container.setAttribute('class', "container");
        row.setAttribute('class', "row");
        col.setAttribute('class', "col-md-12");

        container.setAttribute('id', "displayContainer");
        row.setAttribute('id', "displayRow");
        col.setAttribute('id', "displayCol");
        prompt.setAttribute('id', "displayPrompt");
        prompt.innerHTML = "Please send an email to rts@westboroughk12.org, copying and pasting this information directly into the email.  <br>" + userLog;

        document.body.appendChild(container);
        document.getElementById("displayContainer").appendChild(row);
        document.getElementById("displayRow").appendChild(col);
        document.getElementById("displayCol").appendChild(prompt);
      }
      /*
      Determines if front end should generate buttons or a text box
      @param int prompt ID 
      @return boolean true if buttons should be generated, false if a text field should be generated instead
      */
      function generateButtons(promptID){
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
            return "Please add any information we should know below";
            break;
          case 1: 
            return "Please select an option below";
            break;
          case 2: 
            return "Does it turn on?";
            break;
          case 3: 
            return "Please describe the equipment you need";
            break; 
          case 4: 
            return "Is it plugged in?";
            break;
          case 5: 
            return "Please plug in the device, then click OK";
            break;  
          default: 
            return "";
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
          case "r3":
            return 0;
            break;
          case "r4":
            return 0;
            break;
          case "r5":
            return 4;
            break;
          case "r6":
            return 0;
            break;
          case "r7":
            return 5;
            break;
          case "r8":
            return 2;
            break;
          case "r9":
            return 0;
          default:
            return null; // should call gmail function
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
          case 3:
            return['r9'];
            break;
          case 4:
            return ['r6','r7'];
            break;
          case 5:
            return ['r8'];
            break;
          default: 
            return ['r0'];
            break;
        }
      }
      /* Get response text based on rID
      @param String rID 
      @return String response text 
      */
      function getResponseByID(){
        console.log(textField);
        console.log(document.getElementById("row" + rowCount + "text"));
         switch(arguments[0]){
          case "r0":
            return textField;
            break;
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
          case "r9":
            return "Equipment Information";
            break;
          default: 
            return ""; // should call gmail function
            break;
        }
      }