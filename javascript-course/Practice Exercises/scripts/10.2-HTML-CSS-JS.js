function toggleButton(selector)
{
  const button = document.querySelector(selector);

  if(!button.classList.contains('on'))
  {
    //Before turning this button ON, check if there's already a buton that's turned ON and turn it OFF
    turnOffPreviousButton();

    button.classList.add('on');
  }
  else
  {
    button.classList.remove('on');
  }
}

function turnOffPreviousButton()
{
  const previousButton = document.querySelector('.on');
  if(previousButton)
  {
    previousButton.classList.remove('on');
  }
}