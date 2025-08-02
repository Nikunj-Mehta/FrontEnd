 // A variable declares here is a Global variable
 let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
 };

 updateScoreElement();

function playGame(playerMove)
{
  const computerMove = pickComputerMove();

  result = '';

  if(playerMove === 'scissors')
  {
    if(computerMove === 'rock')
    {
      result = 'You loose.';
    }
    else if(computerMove === 'paper')
    {
      result = 'You win.';
    }
    else if(computerMove === 'scissors')
    {
      result = 'Tie.';
    }
  }

  else if(playerMove === 'paper')
  {
    if(computerMove === 'rock')
    {
      result = 'You win.';
    }
    else if(computerMove === 'paper')
    {
      result = 'Tie.';
    }
    else if(computerMove === 'scissors')
    {
      result = 'You loose.';
    }
  }

  else if(playerMove === 'rock')
  {
    if(computerMove === 'rock')
    {
      result = 'Tie.';
    }
    else if(computerMove === 'paper')
    {
      result = 'You loose.';
    }
    else if(computerMove === 'scissors')
    {
      result = 'You win.';
    }
  }

  if(result === 'You win.')
  {
    score.wins++;
  }
  else if(result == 'You loose.')
  {
    score.losses++;
  }
  else if(result == 'Tie.')
  {
    score.ties++;
  }

  localStorage.setItem('score', JSON.stringify(score));

  updateScoreElement();

  document.querySelector('.js-result')
    .innerHTML = result;

  document.querySelector('.js-moves')
    .innerHTML = 
    `You
    <img src="images/${playerMove}-emoji.png" class="move-icon">
    <img src="images/${computerMove}-emoji.png" class="move-icon">
    Computer`;
}

function updateScoreElement()
{
  document.querySelector('.js-score')
    .innerHTML = `wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

 function pickComputerMove()
{
  const randomNumber = Math.random();

  let computerMove = '';

  if(randomNumber >= 0 && randomNumber < 1 / 3)
  {
    computerMove = 'rock';
  }
  else if(randomNumber >= 1 / 3 && randomNumber < 2 / 3)
  {
    computerMove = 'paper';
  }
  else if(randomNumber >= 2 / 3 && randomNumber < 1)
  {
    computerMove = 'scissors';
  }

  return computerMove; // returning a variable is better than global variable.
}