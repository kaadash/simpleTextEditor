var InputView=Backbone.View.extend({template:_.template($("#input-template").html()),events:{"keyup #text-input":"countLetters"},initialize:function(){this.listenTo(this.model,"change",this.countLetters),this.render()},render:function(){return this.$el.html(this.template(this.model.toJSON())),this},countLetters:function(){var t=$("#text-input").val().length;this.model.set("length",t),$("#text-length").html("Characters: "+this.model.get("length"))}});