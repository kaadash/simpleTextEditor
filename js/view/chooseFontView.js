var ChooseFontView = Backbone.View.extend({
	tagName: 'li',
	className: 'font-class',	
	template: _.template($('#menu-font').html()),
	
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
	}
});