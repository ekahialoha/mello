var $boardContainer = document.querySelector('.container');

var board = new Board();

function handleListCreate() {
  alert('Clicked!');
}

function renderBoard() {
  board.lists.forEach(function(list) {
    var $listContainer = document.createElement('div');
    $listContainer.className = 'list';

    var $header = document.createElement('header');

    var $headerButton = document.createElement('button');
    $headerButton.textContent = list.title;

    $header.appendChild($headerButton);
    $listContainer.appendChild($header);
    $boardContainer.appendChild($listContainer);
  });

  var $addListContainer = document.createElement('div');
  $addListContainer.className = 'list add';

  var $addListButton = document.createElement('button');
  $addListButton.textContent = '+ Add another list';
  $addListButton.addEventListener('click', handleListCreate);

  $addListContainer.appendChild($addListButton);
  $boardContainer.appendChild($addListContainer);
}

renderBoard();
