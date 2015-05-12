var InputView=Backbone.View.extend({template:_.template($("#input-template").html()),events:{"keyup #text-input":"countLetters","mouseup #text-input":"selectText"},initialize:function(){this.listenTo(this.model,"change",this.countLetters),this.render()},render:function(){return this.$el.html(this.template(this.model.toJSON())),this},countLetters:function(){var t=$("#text-input").text().length;this.model.set("tempContent",$("#text-input").text()),this.model.set("length",t),$("#text-length").html("Characters: "+this.model.get("length"))},selectText:function(){var t="";window.getSelection&&(t=window.getSelection().toString()),window.globalText=t,"undefined"!=typeof window.changedText&&(this.model.set("content",window.changedText),this.model.set("tempContent",window.changedText),this.render(),delete window.changedText)}});