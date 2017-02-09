function findMinMax(numList){
	if (!(numList instanceof Array)){
		return "Input must be an array";
	}
	else{
		var smallestVal = numList[0];
		var largestVal = numList[0];
		for (var count = 1; count < numList.length; count++) {
			if (numList[count] > largestVal){
				largestVal = numList[count];
			}
			else if(numList[count] < smallestVal){
				smallestVal = numList[count];
			}
			
		}
	}
	return [smallestVal, largestVal];
}

