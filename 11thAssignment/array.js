

function printarr(arr)
{
	var string = '';
	for( i = 0 ; i < arr.length ; i++ )
		string = string + "  " + arr[i];
	return string;
}
var arr=[55 , 34 , 7867 ,78 , 575 , 32 , 90 ];
console.log(printarr(arr));


function summ(arr)
{
	var sum = 0;
	for( i = 0 ; i < arr.length ; i++ )
		sum = sum + arr[i];
	return sum;
}
var arr=[55 , 34 , 7867 ,78 , 575 , 32 , 90 ];
console.log(summ(arr));



function maximum(arr)
{
	var max = arr[0];
	for( i = 1 ; i < arr.length ; i++ )
		if(arr[i] > max)
			max = arr[i];
	return max;
}var arr=[55 , 34 , 7867 ,78 , 575 , 32 , 90 ];
console.log(maximum(arr));


function minimum(arr)
{
	var min = arr[0];
	for( i = 1 ; i < arr.length ; i++ )
		if(arr[i] < min)
			min = arr[i];
	return min;
}
var arr=[55 , 34 , 7867 ,78 , 575 , 32 , 90 ];
console.log(minimum(arr));
		
		
