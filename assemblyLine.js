let a = [
			[
			7,
			9,
			3,
			4,
			8,
			4
			 ],

			[
			8,
			5,
			6,
			4,
			5,
			7
			 ]	
		];

let n = 6;

let e = [2,4];

let x = [3, 2];

let t = [
			[
			2,
			3,
			1,
			3,
			4
			 ],
			 
			[
			2,
			1,
			2,
			2,
			1
			 ] 
		];

function fatestWay(params) {
	let j = 0; 
	let f1 = [e[0]+a[0][0]];
	let f2 = [e[1]+a[1][0]];

	let l1 = [0];
	let l2 = [0];

	let valueFromTheSameF1Line = f1[j-1] + a[0][j];
	let valueOnTheF2Line = f2[j-1] + t[1][j-1] + a[0][j];
	
	let valueFromTheSameF2Line = f2[j-1] + a[1][j];
	let valueOnTheF1Line = f1[j-1] + t[0][j-1] + a[1][j];
	
	//Setting the conditionals to variables
	function setVariables(j) {
		valueFromTheSameF1Line = f1[j-1] + a[0][j];
		valueOnTheF2Line = f2[j-1] + t[1][j-1] + a[0][j];
		
		valueFromTheSameF2Line = f2[j-1] + a[1][j];
		valueOnTheF1Line = f1[j-1] + t[0][j-1] + a[1][j];
	}

	
	for (j = 1; j < n; j++){

		setVariables(j);

		if (valueFromTheSameF1Line <= valueOnTheF2Line) {
			
			f1.push(valueFromTheSameF1Line);
			l1[j] = 1;
		} else {
			f1.push(valueOnTheF2Line);
			l1[j] = 2;
		}
		
		if (valueFromTheSameF2Line <= valueOnTheF1Line) {
			f2.push(valueFromTheSameF2Line);
			l2[j] = 2;
		} else {
			f2.push(valueOnTheF1Line);
			l2[j] = 1;
		}

	}
	
	//Setting the conditionals to variables
	let theBestValuesFromLineOne = f1[n] + x[0];
	let theBestValuesFromLineTwo = f2[n] + x[1];
	let line = [];
	
	if (theBestValuesFromLineOne <= theBestValuesFromLineTwo) {
		f = theBestValuesFromLineOne;
		l = 0;
	} else {
		f = theBestValuesFromLineTwo;
		l = 1;
	}
	line.push(l1);
	line.push(l2);
	printStations(l, n, line);	
}

function printStations(l, n, line){
	let i = l;
	console.log("Line " , i , " Station " , n);
	for (j = n; j >= 2; j--) {
		i = line[i-1][j-1];
		console.log("Line " , i,  " Station " , j-1);
	}
}

fatestWay();