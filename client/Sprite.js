// vim: ts=4 sw=4 sts=4 et:
/*jslint white: true, devel: false, onevar: true, browser: true, undef: false,
  nomen: false, regexp: true, plusplus: true, continue: true, bitwise: true,
  unparam: true, newcap: true, maxerr: 50, indent: 4 */
define(['./Map', 'events', 'geometry'], function (Map, events, geometry) {
    function Sprite(params) {
        this.params = params;
        
        if (typeof this.params.width === 'undefined') {
            this.params.width = Map.TILE_WIDTH;
        }
        if (typeof this.params.height === 'undefined') {
            this.params.height = Map.TILE_HEIGHT;
        }

        this.rect = new geometry.Rect([this.params.x, this.params.y], [
                this.params.width, this.params.height]);
    }
    
    Sprite.prototype = Object.create(events.EventEmitter.prototype);
    
    Sprite.prototype.intersects = function (shape) {
        return this.rect.intersects(shape);
    };
    
    Sprite.prototype.move = function (direction, distance) {
        this.world.moveSprite(this, direction, distance);
    };
    
    Sprite.prototype.createHTML = function () {
        return '<div style="width:' + this.params.width + 'px;' +
            'height:' + this.params.height + 'px;' +
            'left:' + this.params.x + 'px;top:' + this.params.y + 'px;' +
            'background-image:url(\'media/sprites/' + this.params.image + '\')"></div>';
    };
    
    return Sprite;
});

