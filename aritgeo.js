



function aritGeo(inputArr) { 

let diff = inputArr[1] - inputArr[0];
let ratio =  inputArr[1] /  inputArr[0];

let arithmetic = true;
let geometric = true;

for(var i = 0; i <  inputArr.length - 1; i++)
{
    if(  inputArr[i + 1] -  inputArr[i] !== diff )
      arithmetic = false;
    if( inputArr[i + 1] / ratio !==  inputArr[i])
      geometric = false;
}

if(arithmetic === true)
    return "arithmetic";
else if(geometric === true)
    return" geometric";
else if(arithmetic !== true || geometric !== true) 
    return -1;

else
	return 0;

}