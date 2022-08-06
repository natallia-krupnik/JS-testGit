
const next = document.querySelector(".container__next")
const back = document.querySelector(".container__back")

const photos =["1.jpeg","2.jpeg", "3.jpeg","4.jpeg","5.jpeg" ] 

let i = 0

next.addEventListener("click", ()=>{
	i ++
	if(i > photos.length-1){
		i = 0
	} 
	document.querySelector(".container__img").src = photos[i]
	console.log(i)
})

back.addEventListener("click", ()=>{
	i--
	if(i<0){
		i= photos.length-1
	}
	document.querySelector(".container__img").src = photos[i]
})

// 	function findShort (str){
// 		let word = str.split(" ");
// 		console.log(word)

// 		let wordResult = word.sort(function (a, b){
// 			return a.length - b.length;
// 	})
// 	console.log(wordResult)
// 	return wordResult[0];
	
// }
// console.log(findShort("The smallest word in sentence"))

// const result = string =>
// 	string
// 		.split(" ")
// 		.sort((a, b) => a.length - b.length )[0];

// console.log(result ("The smallest word in sentence"))
	




// function toInitials(name){
// 	let nameStr = name.split(" ")
// 	let firstLetter = nameStr.map(function(item){
// 		return item.slice(0,1).toUpperCase()+ "."
// 	})
// 	let resultInitials = firstLetter.join(" ")
// 	return resultInitials
// }

// console.log(toInitials("Natallia Krupnik"))

// const toInitials = name =>
// 	name
// 		.split(" ")
// 		.map(item => item.slice(0,1).toUpperCase()+ ".")
// 		.join(" ")

// console.log(toInitials("natallia krupnik"))


// const tInitials = name =>
// 	name
// 		.split(" ")
// 		.map(item => `${item.slice(0,1).toUpperCase()}.`)
// 		.join(" ")

// console.log(tInitials("elon mask"))



// const toInitials = name =>
// 		name
// 			.split(" ")
// 			.map(item =>`${item.slice(0,1).toUpperCase()}.`)
// 			.join(" ")

// console.log(toInitials("elon mask"))




// const findInitials = name =>
// 		name
// 			.split(" ")
// 			.map(item =>`${item.slice(0, 1).toUpperCase()}.`)
// 			.join(" ")


// console.log(findInitials("andrei krupnik"))


// const initials = name=>
// 		name
// 			.split(" ")
// 			.map(item =>`${item.slice(0,1).toUpperCase()}.`)
// 			.join(" ")


// console.log(initials("natallia Krupnik"))




// const findName = name=>
// 		name
// 			.split(" ")
// 			.map(item => `${item.slice(0,1).toUpperCase()}.`)
// 			.join(" ")

// console.log(findName("jana krupnik"))


//если число положительное 
// function sumDigits(number){

// 	let str = number.toString()	//преобразовали в строку 99
// 	let strTwo = str.split("") 	//разбили строку в массив ["9", "9"]

// 	let result = strTwo.reduce(function(sum, cur){
// 		return +(sum) + +(cur) //"Number or +"это обертка для "sum" и "cur" из типа string вернули в число 
// 	}, 0)

// 	return result
// }
// console.log(sumDigits(99))


// //если число отрицательное 
// function sumDigit(number){

// 	let moduleNumber = Math.abs(number) // 32
// 	let str = moduleNumber.toString() 	//  преобразовали в строку 32
// 	let strTwo = str.split("") 			//разбили строку в массив ["3", "2"]

// 	let result = strTwo.reduce(function(sum, cur){
// 		return Number(sum) + Number(cur) //"Number"это обертка для "sum" и "cur" из типа string вернули в число 
// 	}, 0)

// 	return result
// }
// console.log(sumDigit(-32))

// //если число положительное 
// const summDigit = number =>
// 				number
// 					.toString()
// 					.split("")
					
// 					.reduce((sum, cur) =>Number(sum) + Number(cur))

// console.log(summDigit(323))

// //если число отрицательное 
// const sumTwo = number =>
// 				Math.abs(number)
// 				.toString()
// 				.split("")
// 				.reduce((sum, cur) =>Number(sum) + Number(cur))

// console.log(sumTwo(-323))



// const sumThree = number =>
// 		Math.abs(number)
// 			.toString()
// 			.split("")
// 			.reduce((one, two)=>Number(one)+Number(two), 0)
// console.log(sumThree(-1111))

// const sumFour = item =>
// 		item
// 			.toString()
// 			.split("")
// 			.reduce((one, two)=> Number(one)+ Number(two),2)
// console.log(sumFour(2222))


// let array = [[1,2,3],[4,5,6],[7,8]]

// let result = array.reduce((prev, item)=>
// 					prev.concat(item)
// )
// console.log(result)



// let a = [-1,-45,-100,-67]
// let result = a.reduce((prev, item)=>{
// 	if(prev < item){
// 		return item
// 	}
// 	else{
// 		return prev
// 	}
// })

// console.log(result)

// let num = [2,3,55]

// let resultTwo = num.reduce((accum, item)=>
// 				accum + " " +item
// )
// console.log(resultTwo)

// console.log("=========")



// let numTwo = [-55,2,3,55, -19, 999]

// let resultThree = numTwo.reduce((accum, item)=>{
// 	if(accum < item){
// 		return item
// 	}
// 	else{
// 		return accum
// 	}
// })
// console.log(resultThree)

// console.log("=========")

// let object = [
// 	{id:55, city:"Berlin"},
// 	{id:175, city: "London"},
// 	{id: 298, city: "Singapur"}
// ]

// let resultId = object.reduce((accum, item)=>{
// 	accum.push(item.id)
// 	return accum
// },[])
// console.log(resultId) //[55, 175, 298]

// console.log("=========")

// let objectTwo = [
// 	{id:55, city:"Berlin"},
// 	{id:175, city: "London"},
// 	{id: 298, city: "Singapur"}
// ]

// let resultIdTwo = object.reduce((accum, item)=>{
// 		accum.push(item.id)
// 		res = accum.map(item=>
// 			`ID:${item}`
// 		)
// 	return res
// },[])
// console.log(resultIdTwo) //['ID:ID:ID:55', 'ID:ID:175', 'ID:298']


// let list = document.querySelector(".list")

// let item = document.createElement("li")
// item.classList.add("item")
// item.innerText = "Mila"
// list.appendChild(item)

// console.log(item)

// let list = document.querySelector(".list")

// let item = document.createElement("ul")
// item.innerText= "Mila"
// list.appendChild(item)

// console.log(item)

			//Поиск min max в массиве, вернуть 2 числа 
// 1)
// 
// const next = document.querySelector(".container__next")
// const back = document.querySelector(".container__back")
// const photos = ["1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg","5.jpeg"]
// let index= 0

// next.addEventListener("click", ()=>{
// 	index++
// 	if(index > photos.length-1){
// 		index = 0
// 	}
// 	document.querySelector(".container__img").src = photos[index]
// })

// back.addEventListener("click", ()=>{
// 	index --
// 	if(index < 0){
// 		index = photos.length-1
// 	}
// 	document.querySelector(".container__img").src = photos[index]
// })

console.log("=============")

function urlGenerator(com){
	return function(url){
		return `https://${url}.${com}`
	}
}

let netflix = "netflix"
const getUrl = urlGenerator("eu")
getUrl("netflix")
console.log(getUrl("netflix"))

console.log("=============")

function sum (){
	let a = 2
	return a*2
}
console.log(sum())
console.log("=============")
// let b = 100

// function sumOne(){
// 	return b*2
// }
// console.log(sumOne())
// console.log("=============")

// function sum(){
// 	a = 100
// 	return function(){
// 		a = a*2
// 		return a
// 	}
// }
let a = 100
function sumOne(){
	return function(){
		a= 2*100
		return a
	}
}

const result = sumOne()
console.log(result())

// result = "i broke you"
// console.log(result)

// console.log(result())


// function closure(){
// 	let greeding = "Hello"
// 	let userName = "Natallia"
// 	return function(){
// 		let result = `${greeding} ${userName}`
// 		return result
// 	}
// }
// const resultClosure = closure()
// console.log(resultClosure())


// const sayHello =(greeding)=>{
// 	return (name)=> `${greeding} ${name}`
// }

// const resultSayHello = sayHello("Good Day")
// console.log(resultSayHello("Natallia"))

// console.log("=============")

// function greeding (){
// 	let hi = "Hi"
// 	let userName = "Natallia"
// 	return function(){
// 		let result = `${hi} ${userName}`
// 		return result
// 	}
// }

// const resultGreeding = greeding()
// console.log(resultGreeding())

// function greeding(){
// 	let userName = "Natallia"
// 	let sayHallo = "Good Morning"
// 	return function(){
// 		let result = `${sayHallo} ${userName}`
// 		return result
// 	}
// }

// let resultGreeding = greeding()
// console.log(resultGreeding())


// console.log("=============")
// const closure = (greeding)=>{
// 	return(userName)=>`${greeding} ${userName}`
// }

// const hiHi = closure("Hi")
// console.log(hiHi("Natallia"))


// console.log("=============")

// const movies =(tv)=>{
// 	return (url) =>`https://${tv}.${url}`
// }

// const resultTv = movies("netflix")
// console.log(resultTv("com"))

// console.log("=============")

// function nochEinMal (){
// 	let userName = "Alla"
// 	let greeding = "Good Morning"

// 	return function(){
// 		let result = `${greeding} ${userName}`
// 		return result
// 	}
// }

// const resultNochEinMal = nochEinMal()
// console.log(resultNochEinMal())

// console.log("=============")

// function oneOne (greeding){
// 	return function(userName){
// 		return `${greeding} ${userName}`
// 	}
// }
// const resultOneOne = oneOne("Good morning")
// console.log(resultOneOne("Natallia"))

console.log("=============")

function accum (string){
	let strSplit = string.toUpperCase().split("")
	let repString = strSplit.map(function(item, index){
		return item += item.repeat(index).toLowerCase()
	})
	
	let result = repString.join("-")
	return result
}
console.log(accum("cwAt"))

console.log("=============")
const repeat = (name)=>
		name
			.toUpperCase()
			.split("")
			.map((item, index)=>
					`${item}${item.repeat(index).toLowerCase()}`).join("-")			
console.log(repeat("vFvF"))


const repeatTwo =(string)=>
	string
		.toUpperCase()
		.split(" ")
		.map((item, index)=>
				`${item}${item.repeat(index).toLowerCase()}`).join("-")


console.log(repeatTwo("I am a Dev"))