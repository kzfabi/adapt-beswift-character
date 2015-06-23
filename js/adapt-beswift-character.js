define(function (require) {
    var ComponentView = require('coreViews/componentView');
    var Adapt = require('coreJS/adapt');

    var BeswiftCharacter = ComponentView.extend({

        preRender: function () {
            //this.listenTo(Adapt, 'device:changed', this.printChart);
        },

        postRender: function () {
            this.setReadyStatus();
            //this.setCompletionStatus();
            //this.setCharacter();
        }

        //setCharacter: function () {
        //    var characterId = this.model.get('characterId');
        //    alert(characterId);
        //}
    });

    Adapt.register('beswiftcharacter', BeswiftCharacter);
    return BeswiftCharacter;
});