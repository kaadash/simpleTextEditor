var InputView = Backbone.View.extend({
	template: _.template($('#input-template').html()),
	events: {
		'keyup #text-input': 'countLetters',
		'mouseup #text-input': 'selectText'
	},
	initialize: function(){
		this.listenTo(this.model, 'change', this.countLetters);
		//this.listenTo(this.model, 'change: content', this.render);
		this.render();

	},
	render: function(){
		this.$el.html(this.template(this.model.toJSON()));
		return this;
	},
	countLetters: function(){
		var textLength = $('#text-input').text().length;
		// console.log(textLength.length);
		this.model.set('tempContent', $('#text-input').text());
		this.model.set('length', textLength);
		// $('#text-output').html(this.model.get('tempContent'));
		$('#text-length').html('Characters: ' + this.model.get('length'));
	},
	selectText: function(){
		var text ='';
		if (window.getSelection) {
			text = window.getSelection().toString();
		};
		
		window.globalText = text;
		if(typeof window.changedText !== 'undefined' ){
			this.model.set('content', window.changedText);
			// console.log(this.model.get('content'));
			this.model.set('tempContent', window.changedText);
			this.render();
			delete window.changedText;
		}
	}
});