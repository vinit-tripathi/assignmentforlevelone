  var readlineSync = require("readline-sync");
  const chalk = require('chalk');
  const log = console.log;
  log(chalk.blue.bold('                  WELCOME TO THE QUIZ'));
  var userName = readlineSync.question("May i have your name please? ");
  log(chalk.yellow.bold('HEY ')+userName.toUpperCase()+ chalk.yellow(' Please play the fun quiz.This is level 0. If you score 4 out of 5 or more than that in level 0 then you will qualify for level 1 else you will disqualify. If you score 9 out of 10 in level 1 or more than that you will be winner. Thanks' ));
  var score=0;
  function play(question, answer){
    var userAnswer = readlineSync.question(question);
    if(userAnswer.toUpperCase()==answer){
      log(chalk.bold.green("you answered right"));
      score++;
    }
    else{
      log(chalk.red.bold("you answered wrong"));
    }
    log(chalk.italic.green("score:" +score+ " out of 5"));
  }
  
  var questions =[
    {
    question: `
    Q1) What is the capital of India? 
    a: ANDHRA PRADESH
    b: NEW DELHI
    c: UTTARPRADESH\n`,
    answer:"B"
  },
  {
    question: `
    Q2) What is the national bird of India? 
    a: PEACOCK
    b: CROW
    c: SPARROW\n`,
    answer: "A" 
  },
  {
    question:`
    Q3) What is the national animal of India?  
    a: LION
    b: COW
    c: TIGER\n`,
    answer:"C"
  },{
    question:`
    Q4) How may states are there in India?  
    a: 26
    b: 27
    c: 28\n`,
    answer:"C"
  },{
    question:`
    Q5) Which is the most populated state of India?
    a: KERELA
    b: UTTAR PRADESH
    c: UTTRAKHAND\n`, 
    answer:"B"
  }];
  for(i=0;i<questions.length;i++)
  {
    var currentQuestion = questions[i];
    play(currentQuestion.question,currentQuestion.answer);
  }
  log(chalk.bold.blue("Hey! Thanks for playing. You scored:"+score+ " out of 5"));

  if(score>=4){
  log(chalk.bgYellow("Congratulations! You made it. You qualified for level 1"));
  log(chalk.bold.blue("WELCOME TO LEVEL 1"));
  
  function play(question, answer){
    var userAnswer = readlineSync.question(question);
    if(userAnswer.toUpperCase()==answer){
      log(chalk.bold.green("you answered right"));
      score++;
    }
    else{
      log(chalk.bold.red("you answered wrong"));
    }
    log(chalk.italic.green("score:"+score+ " out of 10"));
  }
  
  var questions =[{
    question:`
    Q6) Who is the Prime Minister of India?
    a: AMIT SHAH
    b: PIYUSH GOEL
    c: NARENDRA MODI\n`, 
    answer:"C"
  },{
    question: `
    Q7) Who is the Minister of Home affairs? 
    a: AMIT SHAH
    b: NITIN GADKARI
    c: RAMESH POKHRIYAL\n`,
    answer: "A" 
  }, {
    question:`
    Q8) Who is the Chief Minister of UP?
    a: NITISH KUMAR
    b: YOGI ADITYA NATH
    c: ARVIND KEJRIWAL\n`,
    answer:"B"
  },{
    question:`
    Q9) Who is the Chief Minister of Delhi?
    a: PRAMOD SAWANT
    b: ARVIND KEJRIWAL
    c: MANOHAR LAL\n`,
    answer:"B"
  },{
    question:`
    Q10) Who is the Minister of Defence? 
    a: RAVI SHANKAR PRASAD
    b: DHARMENDRA PRADHAN
    c: RAJNATH SINGH\n`,
    answer:"C"
  }];
  for(i=0;i<questions.length;i++)
  {
    var currentQuestion = questions[i];
    play(currentQuestion.question,currentQuestion.answer);
  }
  log(chalk.bold.blue("Hey! Thanks for playing. You scored:"+score+ " out of 10"));
  if(score>=9){
    log(chalk.bgYellow("Congratulations! Once again you made it. You are winner! Hurray"));
  }
  else{
    log(chalk.bold.red("Sorry! Please try again for level one"));
  }
  }
  else{
    log(chalk.bold.red("Sorry! Please try again for level zero"));
  }