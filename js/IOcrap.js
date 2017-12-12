<<<<<<< HEAD
      var questionid = 0;
      var previousAnswers = [null];

    	function reloadInterface(buttonnum) { // refreshes the interface and logs past responces
        switch(buttonnum){
          case 1: //use the response id to get the goto of the question, add the responce and question to list of previous responces and questions, and reload the interface based on the new question
=======
let promptid = 0;
      let previousResponses = [null];

    	function reloadInterface(buttonnum) { // refreshes the interface and logs past responces
        switch(buttonnum){
          case 1: //use the responce id to get the goto of the prompt, add the responce and prompt to list of previous responces and prompts, and reload the interface based on the new prompt
>>>>>>> 9161f8ca3f8f27de5a7dbae2810d39c7497427f8
          break;
          case 2:
          break;
          case 3:
          break;
          case 4:
          break;
        }
    		document.getElementById("prompt").innerHTML = 'prompt';
<<<<<<< HEAD
        document.getElementById("Button1").innerHTML = 'bootan';
        document.getElementById("Button2").innerHTML = 'bootan2';
        document.getElementById("Button3").innerHTML = 'bootan3';
        document.getElementById("Button4").innerHTML = 'bootan4';
        previousAnswers = previousAnswers.push(questionid);
        questionid = getNextQuestion();
        console.log(questionid);
    	}
      const getQuestionByID = id =>{
        switch(id){
          
        }
      } 
      const getNextQuestion = rID =>{ // gets the question id based on the responce goto
        switch(rID){
          default: 
            return 0;
            break;
        }
      }
      const getResponses = id =>{ //gets array of responces based on question id
        
      }
      function createRow2() {
        var container = document.createElement("div");  //Add container div into body
        container.setAttribute('class', "container");
        container.setAttribute('id', "container2"); 
        document.body.appendChild(container);

        var row = document.createElement("div"); //Add a row into container
        row.setAttribute('class', "row");
        row.setAttribute('id', "row2")
        document.getElementById("container2").appendChild(row);

        var buttons = ["button1", "button2"];
        for(var i = 0; i < 2; i++) {
        buttons[i] = document.createElement("button");
        buttons[i].setAttribute('class', "btn");
        }

        var columns2 = ["col1", "col2", "col3", "col4", "col5", "col6"]; //Iterate to add six columns to row
        for (var i = 0; i < columns2.length; i++) {
          columns2[i] = document.createElement("div");
          columns2[i].setAttribute('class', "col-md-2");
          document.getElementById("row2").appendChild(columns2[i]);

        }
        columns2[2].setAttribute('id', "col2");
        document.getElementById("col2").appendChild(buttons[0]);
        buttons[0].innerHTML = "Button1";
        columns2[3].setAttribute('id', "col3");
        document.getElementById("col3").appendChild(buttons[1]);
        buttons[1].innerHTML = "Button2";
      }
      function createRow4() {
        var container = document.createElement("div");  //Add container div into body
        container.setAttribute('class', "container");
        container.setAttribute('id', "container2"); 
        document.body.appendChild(container);

        var row = document.createElement("div"); //Add a row into container
        row.setAttribute('class', "row");
        row.setAttribute('id', "row2")
        document.getElementById("container2").appendChild(row);

        var columns4 = ["col1", "col2", "col3", "col4"]; //Iterate to add four columns to row
        for (var i = 0; i < columns4.length; i++) {
          columns4[i] = document.createElement("div");
          columns4[i].setAttribute('class', "col-md-3");
          columns4[i].setAttribute('id', columns4[4]);
          document.getElementById("row2").appendChild(columns4[i]);
        }
        var buttons = ["button1", "button2", "button3", "button4"]; //Create buttons
        for(var i = 0; i < 4; i++) {
        buttons[i] = document.createElement("button");
        buttons[i].setAttribute('class', "btn");
        }
        columns4[0].setAttribute('id', "col2");
        document.getElementById("col1").appendChild(buttons[0]);
        buttons[0].innerHTML = "Button1";
        columns4[1].setAttribute('id', "col3");
        document.getElementById("col2").appendChild(buttons[1]);
        buttons[1].innerHTML = "Button2";
        columns4[2].setAttribute('id', "col2");
        document.getElementById("col3").appendChild(buttons[2]);
        buttons[2].innerHTML = "Button3";
        columns4[3].setAttribute('id', "col3");
        document.getElementById("col4").appendChild(buttons[3]);
        buttons[3].innerHTML = "Button4";
      }
=======
        document.getElementById("Button1").innerHTML = 'dog';
        document.getElementById("Button2").innerHTML = 'cat';
        document.getElementById("Button3").innerHTML = 'horse';
        document.getElementById("Button4").innerHTML = 'b';
        previousAnswers = previousResponses.push(promptid);
        promptid = getNextprompt();
        console.log(promptid);
    	}
      
>>>>>>> 9161f8ca3f8f27de5a7dbae2810d39c7497427f8
