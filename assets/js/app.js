var $boardContainer = document.querySelector('.container');

var board = new Board();

board.addList('To Do');
board.addList('In Progress');
board.addList('Done');

board.lists.forEach(function(list, index) {
  var $listContainer = document.createElement('div');
  $listContainer.className = 'list';

  var $header = document.createElement('header');
  var $headerButton = document.createElement('button');
  $headerButton.textContent = list.title;

  $header.appendChild($headerButton);
  $listContainer.appendChild($header);
  $boardContainer.appendChild($listContainer);
});
