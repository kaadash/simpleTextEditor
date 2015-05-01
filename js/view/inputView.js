var InputView = Backbone.View.extend({
	template: _.template($('#input-template').html()),
	events: {
		'keyup #text-input': 'countLetters'
	},
	initialize: function(){
		this.listenTo(this.model, 'change', this.countLetters);
		this.render();

	},
	render: function(){
		this.$el.html(this.template(this.model.toJSON()));		
		return this;
	},
	countLetters: function(){
		var textLength = $('#text-input').val().length;
		this.model.set('length', textLength);
		$('#text-length').html(textLength);
	}
});