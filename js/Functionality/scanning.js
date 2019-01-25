var timer;

function startScanning(){
    console.log("STARTED SCAN");
    // switchIsOn = sessionStorage.getItem("switchIsOn");
    // twoSwtiches = sessionStorage.getItem("twoSwitches");
    // timeSwitch = sessionStorage.getItem("timeSwitch");
    console.log(switchIsOn);
    console.log(twoSwitches);
    console.log(timeSwitch);


	if (switchIsOn){ //scanning is turned on
		//check for which switch model it is
		//call appropraite model
		//all the rows
		
		if(keyboard_select == 'restricted'){
			var rows = [document.getElementsByClassName('zeroRow'),
					   document.getElementsByClassName('twelve columns')[0].children,
					   document.getElementsByClassName('twelve columns')[1].children];
			
		}else{
			var rows = [document.getElementsByClassName('zeroRow'),
					   document.getElementsByClassName('twelve columns')[0].children,
					   document.getElementsByClassName('twelve columns')[1].children,
					   document.getElementsByClassName('twelve columns')[2].children];
		}
		
		if(twoSwitches){
            console.log("Two Switches");
			twoSwtich(rows);
		}else{
			document.body.onkeyup = function(e){
				if(e.keyCode == 32){
					oneSwitch(timeSwitch, rows);

                }
                console.log("Two Switches");
			}
	
			
		}
		
		
		
		
	}
}

function stopScanning(){
	if(switchIsOn){
		if( timer != undefined){
			clearTimeout(timer);
		}
    }
    console.log("STOPPED SCAN");
}

function removeSelected(where){
	for (var i=0;i<where.length;i++){ //go through each old row

					where[i].classList.remove("selected"); //remove the selected class
	}
			
}
function addSelected(where){
	for (var i=0;i<where.length;i++){ //go through each old row

					where[i].classList.add("selected"); //add the selected class
	}
	
}


function oneSwitch(timeInterval, rows){
	var rowSelected = false;
	var incrementer = 0;
	var position = [-1,0];	

		function refreshData(){ //every time interval select and react

			document.body.onkeyup = function(e){ 
				if(e.keyCode == 32){  // if space pressed
					if(!rowSelected){  // and row has not been selected
						rowSelected = true; 
						incrementer = 1; //change the traversing position to cells not rows
						removeSelected(rows[position[0]]) //and remove all the selected
						position[1] = -1;
					}else{ //else the row has been selected meaning that user has selected the given input/letter
							
						rows[position[0]][position[1]].click();
						removeSelected(rows[position[0]]);
						incrementer = 0;
						position = [0,0];
						rowSelected = false;
						
					}
				}
			}
			
			if(position[0] != -1){
				removeSelected(rows[position[0]]);
			}
			//on every clock tick do this:
			
			
			if(position[0] == -1){
				position[0]++;
			}else if(position[0] == (rows.length-1) && !rowSelected){ //if we are at the last row
				position[0] = 0; //turn back to the first one
			}else if(position[1] == (rows[position[0]].length -1)){ //else if we are at the last cell
				if(position[0]== rows[position[0]].length){
					position[0] = 0;
					position
				}else{
					position[1] = 0; //go back to cell 0 
					rowSelected = false; // and start looking at the rows
					incrementer = 0;
					position[0]++;
				}
			}else{						  
				position[incrementer]++;	//otherwise just increase the row/cell
			}		
			
			//if the row is selected
			if (rowSelected){ 
				rows[position[0]][position[1]].classList.add('selected'); //color in just the next cell
			}else{
				addSelected(rows[position[0]]) //else, color the whole row				
			}
										  
			timer = setTimeout(refreshData, timeInterval*1000);	
		}	
	refreshData();
	
	
}
function twoSwtich(rows){
	var selectingRows = true;
	var currentRow = -1;
	var currentCell = 0;
	document.body.onkeyup = function(e){
		
		
		if((e.keyCode == 32) && selectingRows){ //if the spacebar was pressed and row not selected yet
			if(currentRow != -1){
				removeSelected(rows[currentRow]);
			}
			if(currentRow == (rows.length-1)){ //if row is at the last one
				currentRow = 0; //reset back to row 0
			}else{
				currentRow++; //otherwise just increment the row
			}
			addSelected(rows[currentRow]); 
			
		}
			
		else if((e.keyCode == 13 ) && selectingRows){ //select THIS row
			selectingRows = false;
			removeSelected(rows[currentRow]);
			
			rows[currentRow][0].classList.add("selected");
		}
		
		else if((e.keyCode == 32) && (!selectingRows)){ //if row is selected and spacebar is pressed
			
			rows[currentRow][currentCell].classList.remove('selected'); //remove the selected class from all unnecessary elements
			if (currentCell == (rows[currentRow].length -1)){ // if the user is at the last element of the row
				currentCell = 0; //change the current cell back to 0
				selectingRows = true; //and turn on the row selection again
				addSelected(rows[currentRow]);
			}else{ //otherwise just increment the cell counter and add the necessary class
				currentCell++;
				rows[currentRow][currentCell].classList.add('selected');
			}
			
			
			
		}
		
		else if((e.keyCode == 13) && (!selectingRows)){ //once found the chosen letter
			//CHOSEN ONE!
			rows[currentRow][currentCell].click();
			
		}	

		
	}
	
}
