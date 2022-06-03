unction introduction(name) {
	return `Hi, my name is ${name}.`
}
console.log(introduction("Mike"))

function introductionWithLanguage(name, language) {
return `Hi, my name is ${name} and I am learning to program in ${language}.`	
}
console.log(introductionWithLanguage("Mike", "Ruby"))

function sayHelloTo(firstName = "User") {
	console.log(`Hello, ${firstName}!`);
}
sayHelloTo()


function introductionWithLanguageOptional(name, language="JavaScript") {
	return	`Hi, my name is ${name} and I am learning to program in ${language}.`

}
console.log(introductionWithLanguageOptional("Gracie","Python"))

function introductionWithLanguageOptional(name, language="JavaScript") {
	return	`Hi, my name is ${name} and I am learning to program in ${language}.`

}
console.log(introductionWithLanguageOptional("Gracie"))