function stringArr()
{
	var cars = ["BMW", "Mercedes", "Toyota", "Ferrari", "Ford"];

	console.log("Array length is: " + cars.length);
}

function stringArr2()
{
	var cars = ["BMW", "Mercedes", "Toyota", "Ferrari", "Ford"];

	cars.sort();

	console.log(cars);
}

function stringArr3()
{
	var cars = ["BMW", "Mercedes", "Toyota", "Ferrari", "Ford"];

	cars.reverse();

	console.log(cars);
}

function stringArr4()
{
	var cars = ["BMW", "Mercedes", "Toyota", "Ferrari", "Ford"];

	cars.pop();

	console.log(cars);
}

function stringArr5()
{
	var cars = ["BMW", "Mercedes", "Toyota", "Ferrari", "Ford"];

	cars.push("DONG");

	console.log(cars);
}

function stringArr6()
{
	var cars = ["BMW", "Mercedes", "Toyota", "Ferrari", "Ford"];

	cars.shift();

	console.log(cars);
}

function stringArr7()
{
	var cars = ["BMW", "Mercedes", "Toyota", "Ferrari", "Ford"];

	cars.unshift("DONG");

	console.log(cars);
}

function stringArr8()
{
	var cars = ["BMW", "Mercedes", "Toyota", "Ferrari", "Ford"];

	var stringCar = cars.join();

	console.log(stringCar);
}

function stringArr9()
{
	var cars = ["BMW", "Mercedes", "Toyota", "Ferrari", "Ford"];

	cars.splice(1,1,"Mazda");

	console.log(cars);
}

function stringArr10()
{
	var cars = ["BMW", "Mercedes", "Toyota", "Ferrari", "Ford"];

	cars.splice(2, 0, "GTR", "Mazda");

	console.log(cars);
}

stringArr();
stringArr2();
stringArr3();
stringArr4();
stringArr5();
stringArr6();
stringArr7();
stringArr8();
stringArr9();
stringArr10();
