var readlineSync = require('readline-sync');
const chalk = require('chalk');


	var highScores = [{
			name: "Kachra Seth",
			score: 10
		},
    {
			name: "Raju",
			score: 10
		},
		{
			name: "Sham",
			score: 10
		},
		{
			name: "Baburao Ganpatrao Apte",
			score: 10
		},
		{
			name: "Anuradha",
			score: 9
		},
		{
			name: "Munnabhai",
			score: 8
		},
		]

console.log(chalk.blueBright.bgBlack.bold.underline("Welcome Take This 'Phir Hera Pheri' Quiz Aur 21 Din Me Paisa Double\n"));
var score = 0;

var userName = readlineSync.question("Please Enter your name ? ");



console.log(chalk.red.bold("\nRules"+"\n1)There are 10 question in all ,one point per question \n2]Negative for each wrong answer\n3]Choose answer from a,b,c,d\n"));

console.log(chalk.cyanBright.underline('Welcome ' + userName + ' Best of Luck '))


 function play(question,answer) {
  var userAnswer=readlineSync.question("\n"+question+"\n");


 if (userAnswer === answer) {
    console.log(chalk.green.bold("Right Answer"));
    score = score + 1;
    
  } else {
    console.log(chalk.red.bold("Wrong Answer"));
    score = score -1;
   
  }
  
  console.log("----------------------------------------------")
  console.log(chalk.red.bold(userName + " Your Current Score is : ", score));
}


var questions = [{
question: chalk.yellow.bold("1] What’s the full form of ‘I.T.U.S.’? ")+chalk.green("\na. Iski Topi Uske Sar\nb. Intelligent and Talent of Ultimate School\nc. Interntional Talent of Ultimate Student\nd. Indian Technical University for Smarts"),
answer: "c"
},{
  question:chalk.yellow.bold("2]who is the director of phir hera pheri ?")+chalk.green("\na. Neeraj Vora  \nb. Anurag Kashyap  \nc. S.Shankar  \nd. Yash Chopra  "),
  answer:"a"
},
{
  question:chalk.yellow.bold("3] How much did Raju tip the Chaiwala?")+chalk.green(" \na. 1000  \nb. 500  \nc. 2000  \nd. 100"),
  answer:"a"
},
{
  question:chalk.yellow.bold("4] What song Babu Rao’s Dadaji used to sing? ")+chalk.green("\na. Gaata rahe mera dil  \nb. Yeh shaam mastani  \nc. Pal pal dil ke paas  \nd. Mere saamne wali khidki me "),
  answer:"a"
},
{
  question:chalk.yellow.bold("5] What was the name of the circus? ")+chalk.green ("\na. The Great Golden Circus  \nb. The Great Royal Circus  \nc. The Great Rayman Circus  \nd. The Great Carnival Circus "),
  answer:"b"
},
{
  question:chalk.yellow.bold("6]  What was the name of Paresh Rawal's character? ")+chalk.green("\na. Baburao Ganpatrao Apte  \nb. Baburao Ganpat Ramji Apte  "),
  answer:"a"
},
{
  question:chalk.yellow.bold("7] How much money did Kabira demand initially? ")+chalk.green(" \na. 10 Lack  \nb. 15 Lack  \nc. 1 Crore  \nd. 2 c]Crore "),
  answer:"a"
},
{
  question:chalk.yellow.bold("8] Suniel Shetty was the second choice, who was the first choice for the role of Shyam? ")+chalk.green(" \na. Ajay Devgan  \nb. Sanjay Dutt "),
  answer:"b"
},
{
  question:chalk.yellow.bold("9] The film was a remake of a Malayalam film titled? ")+chalk.green("\na. Ramji Rao Speaking  \nb. Manichitrathazhu "),
  answer:"a"
},
{
  
  question:chalk.yellow.bold("10] Pick the right definition of an ‘Ameer Aadmi’ by Raju? ")+chalk.green(" \na. Ameer aadmi 15 minute me apne kapde badalta hai, aadhe ghante me apna dhandha badalta hai, ek ghante me apni biwi badalta hai aur do ghante me apna ghar badalta hai  \nb. Ameer aadmi 15 minute me apne kapde badalta hai, aadhe ghante me apna ghar badalta hai, ek ghante me apna dhandha badalta hai aur do ghante me apni biwi badalta hai"),
  answer:"b"
}];

for (var i=0; i<questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question,currentQuestion.answer)
}


console.log(chalk.blueBright.bgBlack.bold.underline("\n" +userName+"  Your Final Score is " + score))


console.log(chalk.blue.bold("\nCurrent Highscores Are"))
		for (i = 0; i <highScores.length; i++) {
			console.log(chalk.red.bold((i + 1) + " " + highScores[i].name + ": " + highScores[i].score))
		}


console.log(chalk.blue.bold.underline("\nIf you beat the highScores take a screenshot and message me "))
console.log(chalk.blue.bold.underline("\n------  Thanks For Playing  ------"))

	
		







