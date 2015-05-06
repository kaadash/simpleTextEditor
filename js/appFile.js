var inputText = new InputText();
var inputView = new InputView({model: inputText});

var styleNormal = new StyleInput({name: 'normal'});
var styleBold = new StyleInput({name: 'bold', typeStart: '<b>', typeEnd: '</b>'});
var styleCursive = new StyleInput({name: 'lighter', typeStart: '<i>', typeEnd: '</i>'});
var listStyle = new ListStyle([styleNormal, styleBold, styleCursive]);

var chooseArial = new ChooseFont();
var chooseTahoma = new ChooseFont({fontName: 'Tahoma'});
var chooseTimes = new ChooseFont({fontName: 'Times New Roman'});
var fontsCollection = new Fonts([chooseArial, chooseTahoma, chooseTimes]);
//var choseArialView = new ChooseFontView({model: choseArial});

var listStyleView = new ListStyleView({collection: listStyle});
var fontsView = new FontsView({collection: fontsCollection});
$('.text-area').html(listStyleView.el);
$('.text-area').append(inputView.el);
$('.text-area').append(fontsView.el);
