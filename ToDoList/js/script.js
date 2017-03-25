$(function() {
  var firstToDoList = ['learn javascript', 'learn html', 'lalalala'];
  var model = new Model(firstToDoList);
  var view = new View(model);
  var controller = new Controller(model, view);
});
