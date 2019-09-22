var $boardContainer = document.querySelector('.container');

var board = new Board();

board.addList('To Do');
board.addList('In Progress');
board.addList('Done');

board.lists.forEach(function(list, index) {
  list.addCard('Card #' + (index + 1));
});

$boardContainer.textContent = JSON.stringify(board);
