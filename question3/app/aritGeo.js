'use strict';
module.exports = {
	aritGeo : function (numList){
			if (!(numList instanceof Array)){
				return "Input must be an array";
			}

			else{
				for(var counter = 0;counter< numList.length-1; counter++){
					if (numList.length > 0){
						if ((numList[counter+1]-numList[counter]) === (numList[numList.length-1]-numList[numList.length-2])){
							return "Arithmetic";
						}
						else if ((numList[counter+1]/numList[counter]) === (numList[counter+2]/numList[counter+1])){
							return "Geometric";
						}
						else {
							return -1;
						}	
					}
					
					else if (numList == []) {
						return 0;
					}
					
				}
			}
	}

};