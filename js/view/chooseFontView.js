var ChooseFontView = Backbone.View.extend({	
	template: _.template($('#menu-font').html()),

	initialize: function() {
		this.render();
	},
	render: function(){
		this.$el.html(this.template(this.model.toJSON()));
		return this;
	}
});