/**
 * Created by Marlon on 16/10/2016.
 */
/* jshint browser:true */
// create BasicGame Class

// create scripts function in BasicGame
BasicGame.Menu = function (game) {

};


// set scripts function prototype
BasicGame.Menu.prototype = {

    init: function () {

    },

    preload: function () {

    },

    create: function () {
        //  This will run in Canvas mode, so let's gain a little speed and display
        this.game.renderer.clearBeforeRender = false;
        this.game.renderer.roundPixels = true;

        this.createButton(this.game, "Modo Campanha", this.game.world.centerX, this.game.world.centerY + 32, 300, 50, function () {

            this.state.start('Prologue');
            /*var request = $.ajax({
                url: "/api/iniciar_nova_campanha/",
                type: "post",
                data: {},
                dataType: 'json'
            });

            request.done(function (response, textStatus, jqXHR) {
                console.log("Request funcionou!");
            });

            request.fail(function (jqXHR, textStatus, errorThrown) {
                console.error("The following error occurred: " + textStatus, errorThrown);
            });

            request.always(function () {
                $inputs.prop("disabled", false);
            });*/
        });
        this.createButton(this.game, "Multiplayer", this.game.world.centerX, this.game.world.centerY + 100, 300, 50, function () {
            // this.state.start('Multiplayer');
            console.log('Multiplayer');
        });

        // var titlescreen = this.add.sprite(this.game.world.centerX, this.game.world.centerY - 192, 'titulo');
        // titlescreen.anchor.setTo(0.5, 0.5);

    },

    update: function(){

    },

    createButton: function (game, string, x, y, w, h, callback) {
        var button1 = game.add.button(x, y, 'button', callback, this, 2, 1, 0);
        button1.anchor.setTo(0.5, 0.5);
        button1.width = w;
        button1.height = h;

        var txt = game.add.text(button1.x, button1.y, string, {
            font: '14px Arial',
            fill: '#000',
            align: 'center'
        });
        txt.anchor.setTo(0.5, 0.5);
    }

};