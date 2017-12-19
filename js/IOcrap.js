
      var questionid = 0;
      var previousAnswers = [null];
      var twoCounter = 0;
      var twoRCounter = 0;
      var threeCounter = 0;
      var threeRCounter = 0;
      var fourCounter = 0;
      var fourRCounter = 0;

      var button1ID; //String current rID of button 1
      var button2ID; //String current rID of button 2
      var button3ID; //String current rID of button 3
      var button4ID; //String current rID of button 4
      var rowCount = 0 //Current Ammount of rows
      var promptID = 0; // Current prompt ID
      function tempFctn(rowCount){
      	createContainer(arguments[0]);
        createRow(arguments[0]);
        createButtons(arguments[0],promptID);
      }
      function displayComment() {
        var com = document.getElementById("comment").innerHTML;

        alert(com);
      }
      function displayPrompt(){
        var thisContainer = "containerB2".concat(twoCounter);
        var thisRow = "rowB2".concat(twoRCounter);
        var container = document.createElement("div");  //Add container div into body
        container.setAttribute('class', "container");
        container.setAttribute('id', thisContainer); 
        document.body.appendChild(container);
        var row = document.createElement("div"); //Add a row into container
        row.setAttribute('class', "row");
        row.setAttribute('id', thisRow);
        document.getElementById(thisContainer).appendChild(row);
      }
      function newPrompt() {
        document.getElementById("prompt").innerHTML = arguments[0];
      }
     function reloadInterface(rowCount, promptID) { // refreshes the interface and logs past responces
        
        /*
        switch(arguments[0]){
          case 1:
          newPrompt(getPromptByID(0));
          createRow4(getResponses(getGoTo("r1"))); //use the response id to get the goto of the prompt, add the responce and prompt to list of previous responces and prompts, and reload the interface based on the new prompt
          break;
          case 2:
          newPrompt(getPromptByID(1));
          createRow4(getResponses(getGoTo("r2")));
          break;
          case 3:
          newPrompt(getPromptByID(2));
          createRow4(getResponses(getGoTo("r3")));
          break;
          case 4:
          newPrompt(getPromptByID(3));
          createRow4(getResponses(getGoTo("r4")));
          break; 
        }*/
          createContainer(arguments[0]);
          createRow(arguments[0]);
          createButtons(arguments[0], arguments[1]);
          
      }
    
    function createContainer(rowCount){
       var container = document.createElement("div");  //Add container div into body
        container.setAttribute('class', "container");
        container.setAttribute('id', "container" + arguments[0]); 
        document.body.appendChild(container);
        console.log(rowCount);
    }

    function createRow(rowID){
        var row = document.createElement("div"); //Add a row into container
        row.setAttribute('class', "row");
        row.setAttribute('id', "row" + arguments[0])
        document.getElementById("container" + arguments[0]).appendChild(row);
        rowCount ++;
    	console.log(rowCount);
    }
    function createButtons(rowID, promptID){
      addSpacerColumn(arguments[0]);
      
      var buttonArray = getResponses(arguments[1]);
      var tempArray = getResponses(arguments[1]);          
      for (var i = 0; i  < buttonArray.length; i++) {

      	tempArray[i] = document.createElement("div");
      	tempArray[i].setAttribute('class', "col buttonCol");
      	tempArray[i].setAttribute('id', "col" + i + "row" + arguments[0]);
      	document.getElementById("row" + arguments[0]).appendChild(tempArray[i]);
      	
        tempArray[i] = document.createElement("button");
        tempArray[i].setAttribute('class', "btn");
        tempArray[i].setAttribute('id', "row" + arguments[0] + "button" + i);       
        document.getElementById("col" + i + "row" + arguments[0]).appendChild(tempArray[i]);
        document.getElementById("row" + arguments[0] + "button" + i).innerHTML = getResponseByID(buttonArray[i]);
        
        } 
      addSpacerColumn(arguments[0]); 
    }
    
    function addSpacerColumn(rowID){
      var tempColumn = document.createElement("div");
      tempColumn.setAttribute('class', "col-md-2");
      document.getElementById("row" + arguments[0]).appendChild(tempColumn);
    }
      function createRow2() {
        
        var thisContainer = "containerB2".concat(twoCounter);
        var thisRow = "rowB2".concat(twoCounter);
        
        createContainer(thisContainer);

        createRow(thisContainer, thisRow);

        twoRCounter++;
        var buttons = ["button1", "button2"];
        for(var i = 0; i < 2; i++) {
        buttons[i] = document.createElement("button");
        buttons[i].setAttribute('class', "btn");
        }

        var columns2 = ["col1", "col2", "col3", "col4", "col5", "col6"]; //Iterate to add six columns to row
        for (var i = 0; i < columns2.length; i++) {
          columns2[i] = document.createElement("div");
          columns2[i].setAttribute('class', "col-md-2");
          document.getElementById(thisRow).appendChild(columns2[i]);

        }
        columns2[2].setAttribute('id', thisRow.concat("col2"));
        document.getElementById(thisRow.concat("col2")).appendChild(buttons[0]);
        buttons[0].innerHTML = arguments[0];
        columns2[3].setAttribute('id', thisRow.concat("col3"));
        document.getElementById(thisRow.concat("col3")).appendChild(buttons[1]);
        buttons[1].innerHTML = arguments[1];

        twoCounter++;
      }
      function createRow3() {

        var thisContainer = "containerB3".concat(threeCounter);
        var thisRow = "rowB3".concat(threeRCounter);
        var container = document.createElement("div");  //Add container div into body
        container.setAttribute('class', "container");
        container.setAttribute('id', thisContainer); 
        document.body.appendChild(container);

        threeCounter++;

        var row = document.createElement("div"); //Add a row into container
        row.setAttribute('class', "row");
        row.setAttribute('id', thisRow);
        document.getElementById(thisContainer).appendChild(row);

        var columns3 = ["col1", "col2", "col3"]; //Iterate to add four columns to row
        for (var i = 0; i < columns3.length; i++) {
          var thisCol = thisRow.concat(columns3[i]);
          columns3[i] = document.createElement("div");
          columns3[i].setAttribute('class', "col-md-4");
          columns3[i].setAttribute('id', thisCol);
          document.getElementById(thisRow).appendChild(columns3[i]);
        }
        var buttons = ["button1", "button2", "button3"]; //Create buttons
        for(var i = 0; i < 4; i++) {
        buttons[i] = document.createElement("button");
        buttons[i].setAttribute('class', "btn");
        }
        columns3[0].setAttribute('id', thisRow.concat("col1"));
        document.getElementById(thisRow.concat("col1")).appendChild(buttons[0]);
        buttons[0].innerHTML = arguments[0];

        columns3[1].setAttribute('id', thisRow.concat("col2"));
        document.getElementById(thisRow.concat("col2")).appendChild(buttons[1]);
        buttons[1].innerHTML = arguments[1];

        columns3[2].setAttribute('id', thisRow.concat("col3"));
        document.getElementById(thisRow.concat("col3")).appendChild(buttons[2]);
        buttons[2].innerHTML = arguments[2];
        threeRCounter++;
      }
      function createRow4() {
        var thisContainer = "containerB4".concat(fourCounter);
        var thisRow = "rowB4".concat(fourRCounter);
        var container = document.createElement("div");  //Add container div into body
        container.setAttribute('class', "container");
        container.setAttribute('id', thisContainer); 
        document.body.appendChild(container);

        fourCounter++;

        var row = document.createElement("div"); //Add a row into container
        row.setAttribute('class', "row");
        row.setAttribute('id', thisRow);
        document.getElementById(thisContainer).appendChild(row);

        var columns4 = ["col1", "col2", "col3", "col4"]; //Iterate to add four columns to row
        for (var i = 0; i < columns4.length; i++) {
          var thisCol = thisRow.concat(columns4[i]);
          columns4[i] = document.createElement("div");
          columns4[i].setAttribute('class', "col-md-3");
          columns4[i].setAttribute('id', thisCol);
          document.getElementById(thisRow).appendChild(columns4[i]);
        }
        var buttons = ["button1", "button2", "button3", "button4"]; //Create buttons
        for(var i = 0; i < 4; i++) {
        buttons[i] = document.createElement("button");
        buttons[i].setAttribute('class', "btn");
        }
        columns4[0].setAttribute('id', thisRow.concat("col1"));
        document.getElementById(thisRow.concat("col1")).appendChild(buttons[0]);
        buttons[0].setAttribute("onclick", "alert(getGoTo('r1')), this.style.fontWeight = 'bold', this.className += ' active', newPrompt(getPromptByID(1)), createRow4(getResponseByID(getResponses(1)[0]), getResponseByID(getResponses(1)[1]), getResponseByID(getResponses(1)[2]), getResponseByID(getResponses(1)[3]))");
        buttons[0].innerHTML = getResponseByID(arguments[0][0]);

        columns4[1].setAttribute('id', thisRow.concat("col2"));
        document.getElementById(thisRow.concat("col2")).appendChild(buttons[1]);
        buttons[1].setAttribute("onclick", "alert(getGoTo('r2')), this.style.fontWeight = 'bold', this.className += ' active', newPrompt(getPromptByID(1)), createRow4(getResponseByID(getResponses(1)[0]), getResponseByID(getResponses(1)[1]), getResponseByID(getResponses(1)[2]), getResponseByID(getResponses(1)[3]))");
        buttons[1].innerHTML = getResponseByID(arguments[0][1]);

        columns4[2].setAttribute('id', thisRow.concat("col3"));
        document.getElementById(thisRow.concat("col3")).appendChild(buttons[2]);
        buttons[2].setAttribute("onclick", "alert(getGoTo('r3')), this.style.fontWeight = 'bold', this.className += ' active', newPrompt(getPromptByID(1)), createRow4(getResponseByID(getResponses(1)[0]), getResponseByID(getResponses(1)[1]), getResponseByID(getResponses(1)[2]), getResponseByID(getResponses(1)[3]))");
        buttons[2].innerHTML = getResponseByID(arguments[0][2]);

        columns4[3].setAttribute('id', thisRow.concat("col4"));
        document.getElementById(thisRow.concat("col4")).appendChild(buttons[3]);
        buttons[3].setAttribute("onclick", "alert(getGoTo('r4')), this.style.fontWeight = 'bold', this.className += ' active', newPrompt(getPromptByID(1)), createRow4(getResponseByID(getResponses(1)[0]), getResponseByID(getResponses(1)[1]), getResponseByID(getResponses(1)[2]), getResponseByID(getResponses(1)[3]))");
        buttons[3].innerHTML = getResponseByID(arguments[0][3]);
        fourRCounter++;
      }