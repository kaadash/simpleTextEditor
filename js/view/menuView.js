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
	tagName: 'ul',
	className: 'menu-font',
	events: {
		'keypress .font-input': 'showOptions'
	},
	initialize: function(){
		this.input = this.$('.font-input');
		this.render();
	},
	render: function(){
		this.collection.each(function(font){
			var fontView = new ChooseFontView({model: font});
			this.$el.append(fontView.render().el);
		}, this);
		return this;
	},
	showOptions: function(){
		this.$el.find('.filling').css('display','block');
		this.$el.children().css('display', 'block');
		// var searchText = this.$el.html();
		// var textToFind = $('.font-input').val();
		
	}
});
