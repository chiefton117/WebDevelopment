let promptid = 0;
      let previousResponses = [null];

    	function reloadInterface(buttonnum) { // refreshes the interface and logs past responces
        switch(buttonnum){
          case 1: //use the responce id to get the goto of the prompt, add the responce and prompt to list of previous responces and prompts, and reload the interface based on the new prompt
          break;
          case 2:
          break;
          case 3:
          break;
          case 4:
          break;
        }
    		document.getElementById("prompt").innerHTML = 'prompt';
        document.getElementById("Button1").innerHTML = 'dog';
        document.getElementById("Button2").innerHTML = 'cat';
        document.getElementById("Button3").innerHTML = 'horse';
        document.getElementById("Button4").innerHTML = 'b';
        previousAnswers = previousResponses.push(promptid);
        promptid = getNextprompt();
        console.log(promptid);
    	}
      