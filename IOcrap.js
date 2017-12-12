let questionid = 0;
      let previousAnswers = [null];

    	function reloadInterface(buttonnum) { // refreshes the interface and logs past responces
        switch(buttonnum){
          case 1: //use the responce id to get the goto of the question, add the responce and question to list of previous responces and questions, and reload the interface based on the new question
          break;
          case 2:
          break;
          case 3:
          break;
          case 4:
          break;
        }
    		document.getElementById("prompt").innerHTML = 'prompt';
        document.getElementById("Button1").innerHTML = 'bootan';
        document.getElementById("Button2").innerHTML = 'bootan2';
        document.getElementById("Button3").innerHTML = 'bootan3';
        document.getElementById("Button4").innerHTML = 'bootan4';
        previousAnswers = previousAnswers.push(questionid);
        questionid = getNextQuestion();
        console.log(questionid);
    	}
      