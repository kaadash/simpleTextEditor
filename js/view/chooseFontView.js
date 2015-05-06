var ChooseFontView = Backbone.View.extend({
	tagName: 'li',
	className: 'font-class',	
	template: _.template($('#menu-font').html()),
	
	initialize: function() {
		this.render();
	},
	render: function(){
		this.$el.html(this.template(this.model.toJSON()));
		return this;
	}
});