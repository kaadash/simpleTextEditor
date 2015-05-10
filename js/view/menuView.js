var StyleInputView = Backbone.View.extend({
	tagName: 'li',
	className: 'list',
	template: _.template($('#menu-template').html()),
	events: {
		'click': 'changeStyle',

	},
	initialize: function() {

		this.render();
	},
	render: function(){
		this.$el.html(this.template(this.model.toJSON()));
		return this;
	},
	changeStyle: function(){	
		var styledText = this.model.get('typeStart') + window.globalText + this.model.get('typeEnd');	
		var fullText = $('#text-input').val().toString();
		var changedText = fullText.replace(window.globalText, styledText);
		window.changedText = changedText;	
		console.log(window.changedText);		
	}
});

var ListStyleView = Backbone.View.extend({
	tagName: 'ul',
	className: 'menu',
	template: _.template($('#input-template').html()),
	initialize: function(){
		this.render();
	},
	render: function(){
		this.collection.each(function(styleInput){
			//console.log(styleInput);
			var styleInputView = new StyleInputView({model: styleInput});
			this.$el.append(styleInputView.render().el);
		},this);
		return this; 
	}
});

var FontsView = Backbone.View.extend({
	el: '#search-font',
	tagName: 'ul',
	className: 'menu-font',
	events: {
		'keyup .font-input': 'showOptions',
		'click .font-input': 'showAllOptions'

	},
	initialize: function(){
		this.input = this.$('.font-input');
		this.render();
		window.textLength = 0;

	},
	render: function(){
		this.collection.each(function(font){
			var fontView = new ChooseFontView({model: font});
			this.$el.append(fontView.render().el);
		}, this);
		return this;
	},
	settingModelBool: function(bool){
		for (var i = this.collection.length - 1; i >= 0; i--) {
				this.collection.at(i).set('selected', bool);
			};
	},
	showAllOptions: function(){
		this.settingModelBool(true);
	},
	showOptions: function(e){
		var indexOfModels = [];
		var text = $('.font-input').val();
		this.settingModelBool(true);			
		if(text.length === 0) {
			window.textLength = 0;
		}
		if(e.keyCode!==16 && e.keyCode!==8) {
			window.textLength++;			
		}
		else if(e.keyCode===8 && window.textLength !== 0){
			window.textLength--;
		}
		var l = window.textLength;
		var matchingModels = this.collection.pluck('fontName');
		for (var i = matchingModels.length - 1; i >= 0; i--) {
			if(matchingModels[i].substr(0,l) !== text) {
				matchingModels.splice(i, 1);
			}
		};
		for (var i = 0; i < matchingModels.length; i++) {	
			for (var j = 0; j < this.collection.length; j++) {
				if(this.collection.at(j).get('fontName') !== matchingModels[i]){
					this.collection.at(j).set('selected', false);
					console.log(this.collection.at(j).get('fontName')+ ' '+j);		
				}
				else {
					indexOfModels.push(j);
				}
			};
		}

		for (var i = indexOfModels.length - 1; i >= 0; i--) {
			this.collection.at(indexOfModels[i]).set('selected', true);
		};
		if(text.length !== 0 && indexOfModels.length === 0) {
			this.settingModelBool(false);
		}
		if(text.length === 0){
			this.settingModelBool(true);			
		}
	}
});
