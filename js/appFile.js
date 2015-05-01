var inputText = new InputText();
inputText.set('content', 'siema');

var inputView = new InputView({model: inputText});
$('.text-area').html(inputView.el);
