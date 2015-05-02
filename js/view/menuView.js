var StyleInputView = Backbone.View.extend({
	tagName: 'li',
	template: _.template($('#menu-template').html()),
	events: {
		'click': 'changeStyle'
	},
	initialize: function() {
		this.render();
	},
	render: function(){
		this.$el.html(this.template(this.model.toJSON()));
		return this;
	},
	changeStyle: function(){
		$('#text-input').css('font-weight',this.model.get('name'));
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
