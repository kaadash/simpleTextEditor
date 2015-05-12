var ChooseFontView = Backbone.View.extend({
	tagName: 'li',
	className: 'font-class',	
	template: _.template($('#menu-font').html()),
	events:{
		'click': 'fillFont'
	},	
	initialize: function() {
		this.listenTo(this.model, 'change', this.render);
		this.render();
	},
	render: function(){
		// console.log(this.model.get('selected'));
		this.$el.html(this.template(this.model.toJSON()));
		if(this.model.get('selected')===true){
			this.$el.css('display','block');
			// console.log(this.model.get('fontName'));
		}
		else if(this.model.get('selected')===false){
			// console.log('why?');
			this.$el.css('display','none');
		}
		return this;
	},
	fillFont: function(){
		$('.font-input').val(this.model.get('fontName'));
		var fullText = $('#text-input').html();
		var textToChange = this.model.get('startTag') + window.globalText + this.model.get('endTag');
		var changedText = fullText.replace(window.globalText, textToChange);
		window.changedText = changedText;	
		
	}
});