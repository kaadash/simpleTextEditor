var ChooseFont = Backbone.Model.extend({
	defaults: {
		fontName: 'Arial',
		startTag: '<kbd>',
		endTag: '</kbd>',
		selected: false
	}
});