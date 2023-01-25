
$(function() {

  const todoList = $('.todo__list');
  const todoAdd = $('.todo__add');
  const todoText = $('.todo__text');



  todoText.on('input', function () {
    todoAdd.prop('disabled', !this.value);
  });




  todoAdd.on('click', function () {
    var val = todoText.val();
    if (val) {
      addItem(val);
      todoText.val('');
      todoAdd.prop('disabled', true);
    }
  });

  function addItem(text) {
    let newItem = $(
      '<li class="todo__list-item">'+ 
        '<span class="todo__list-item-text"></span>' +
        '<span class="todo__list-item-remove">&#10060;</span>' +
      '</li>'
    ); 
    newItem.find('.todo__list-item-text').text(text);
    todoList.append(newItem);
  };



  todoList.on('click', '.todo__list-item', function () {
    $(this).hasClass('todo__list-item_completed') ?
      $(this).removeClass('todo__list-item_completed') :
      $(this).addClass('todo__list-item_completed');
  });



  todoList.on('click', '.todo__list-item-remove', function () {
    $(this).closest('.todo__list-item').remove();
  });


});
