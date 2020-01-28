//To find if given number is even or odd
function findEvenOdd(num)
{
	if(num%2==0)
    {	
    	console.log("Even Number");
	}
    else 
    	console.log("Odd Even");
}
findEvenOdd(4);
//To find if given number is prime or not
function checkPrime(n) 
{ 
              
            var flag = true; 
              
            // Getting the value form the 
            // text field using DOM 
            
        
            for (i = 2; i <= n - 1; i++) 
                if (n % i == 0) 
				{ 
                    flag = false; 
                    break; 
                }
			if (flag == true) 
                console.log(n + " is prime"); 
            else
                console.log(n + " is not prime"); 
}
checkPrime(4);
//function to reverse number
function reversenumber(n)
{
	n = n + "";
	return n.split("").reverse().join("");
	
}
console.log(reversenumber(15433));

//function to create fibonacci series 
function fibonacci_series(n)
{
	var f1=0,f2=1,f3;
	console.log(f1 + " ");
	console.log(f2 + " ");
	for(var i=3;i<=n;i++)
	{
		f3=f1+f2;
		console.log(f3 + " ");
		f1=f2;
		f2=f3;
		
	}
}
fibonacci_series(8);

//function to find factorial of number
function factorial(n)
{
	if (n === 0)
	 {
		return 1;
	 }
	return n * factorial(n-1);
}
console.log(factorial(5));

//Function to see if armstrong or not
function isArmstrong(num)
{
	n = parseInt(num);
	sum = 0;
	while(n > 0)
	{
		mod = n % 10;
		sum = sum+mod*mod*mod;
		n = parseInt(n/10);
	}
	if(sum==num)
		return("Armstrong");
	else
		return("Not Armstrong");
	
}
console.log(isArmstrong(139));
console.log(isArmstrong(370));