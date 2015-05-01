var InputView = Backbone.View.extend({
	template: _.template($('#input-template').html()),
	initialize: function(){
		this.render();

	},
	render: function(){
		this.$el.html(this.template(this.model.toJSON()));
		
		return this;
	}
});