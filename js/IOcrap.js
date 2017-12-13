
      var questionid = 0;
      var previousAnswers = [null];
      var twoCounter = 0;
      var twoRCounter = 0;
      var threeCounter = 0;
      var threeRCounter = 0;
      var fourCounter = 0;
      var fourRCounter = 0;

      var button1ID;
      var button2ID;
      var button3ID;
      var button4ID;
      var rowCount;

      function displayPrompt(id){
        var thisContainer = "containerB2".concat(twoCounter);
        var thisRow = "rowB2".concat(twoRCounter);
        var container = document.createElement("div");  //Add container div into body
        container.setAttribute('class', "container");
        container.setAttribute('id', thisContainer); 
        document.body.appendChild(container);
        var row = document.createElement("div"); //Add a row into container
        row.setAttribute('class', "row");
        row.setAttribute('id', thisRow)
        document.getElementById(thisContainer).appendChild(row);

      }
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
        rowCount ++;
    }
    
    function createContainer(containerID){
       var container = document.createElement("div");  //Add container div into body
        container.setAttribute('class', "container");
        container.setAttribute('id', containerID); 
        document.body.appendChild(container);
    }
    function createRow(containerID, rowID){
        var row = document.createElement("div"); //Add a row into container
        row.setAttribute('class', "row");
        row.setAttribute('id', rowID)
        document.getElementById(containerID).appendChild(row);
    }
    function createButtons(rowID, buttonArray){
      addSpacerColumn(rowID);
      var tempArray = buttonArray;
      for (var i = 0; i  < buttonArray.length; i++) {
        tempArray[i] = document.createElement("button");
        tempArray[i].setAttribute('class', "btn");
        tempArray[i].interHTML = getResponseByID(buttonArray[i]);
        
        } 
      addSpacerColumn(rowID); 
    }
    
    function addSpacerColumn(rowID){
      var tempColumn = document.createElement("div");
      tempColumn.setAttribute('class', "col-md-2");
      document.getElementById(rowID).appendChild(tempColumn);
    }
      function createRow2(inpu1, input2) {
        
        var thisContainer = "containerB2".concat(rowCount);
        var thisRow = "rowB2".concat(rowCount);
        
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
        buttons[0].innerHTML = "Button1";
        columns2[3].setAttribute('id', thisRow.concat("col3"));
        document.getElementById(thisRow.concat("col3")).appendChild(buttons[1]);
        buttons[1].innerHTML = "Button2";

        twoCounter++;
      }
      function createRow3(input1, input2, input3) {

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
        buttons[0].innerHTML = "Button1";

        columns3[1].setAttribute('id', thisRow.concat("col2"));
        document.getElementById(thisRow.concat("col2")).appendChild(buttons[1]);
        buttons[1].innerHTML = "Button2";

        columns3[2].setAttribute('id', thisRow.concat("col3"));
        document.getElementById(thisRow.concat("col3")).appendChild(buttons[2]);
        buttons[2].innerHTML = "Button3";
        fourRCounter++;
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
        buttons[0].innerHTML = "Button1";

        columns4[1].setAttribute('id', thisRow.concat("col2"));
        document.getElementById(thisRow.concat("col2")).appendChild(buttons[1]);
        buttons[1].innerHTML = "Button2";

        columns4[2].setAttribute('id', thisRow.concat("col3"));
        document.getElementById(thisRow.concat("col3")).appendChild(buttons[2]);
        buttons[2].innerHTML = "Button3";

        columns4[3].setAttribute('id', thisRow.concat("col4"));
        document.getElementById(thisRow.concat("col4")).appendChild(buttons[3]);
        buttons[3].innerHTML = "Button4";
        fourRCounter++;
      }