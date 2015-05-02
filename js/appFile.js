var inputText = new InputText();
var inputView = new InputView({model: inputText});

var styleNormal = new StyleInput({name: 'normal'});
var styleBold = new StyleInput({name: 'bold', type: 'bold'});
var styleCursive = new StyleInput({name: 'lighter', type: '<i>'})
var listStyle = new ListStyle([styleNormal, styleBold, styleCursive]);

var listStyleView = new ListStyleView({collection: listStyle});
$('.text-area').html(listStyleView.el);
$('.text-area').append(inputView.el);
