var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var objects;
(function (objects) {
    var Ocean = /** @class */ (function (_super) {
        __extends(Ocean, _super);
        // public properties
        // Constructor
        function Ocean() {
            var _this = _super.call(this, managers.Game.assetManager.getResult("ocean")) || this;
            _this.Start();
            return _this;
        }
        // private methods
        // reset the objects location to some value
        Ocean.prototype._reset = function () {
            if (managers.Game.currentScene == config.Scene.START) {
                this.y = -960;
            }
            else if (managers.Game.currentScene == config.Scene.PLAY) {
                this.y = -960;
            }
            else if (managers.Game.currentScene == config.Scene.PLAY2) {
                this.x = 1440;
            }
            else if (managers.Game.currentScene == config.Scene.PLAY3) {
                this.x = 640;
                // this.x = -320;
            }
            else if (managers.Game.currentScene == config.Scene.OVER) {
                this.y = -960;
                // this.x = -320;
            }
        };
        // move the object to some new location
        Ocean.prototype._move = function () {
            if (managers.Game.currentScene == config.Scene.START) {
                this.y += this._dy;
            }
            else if (managers.Game.currentScene == config.Scene.PLAY) {
                this.y += this._dy;
            }
            else if (managers.Game.currentScene == config.Scene.PLAY2) {
                this.rotation = 90;
                this.x -= this._dx;
            }
            else if (managers.Game.currentScene == config.Scene.PLAY3) {
                // this.y += this._dy;
                this.rotation = 90;
                this.x += this._dx;
            }
            else if (managers.Game.currentScene == config.Scene.OVER) {
                this.y += this._dy;
            }
            // if (managers.Game.currentScene = config.Scene.PLAY) {
            //   this.x -= this._dx;
            // }
            // this.y += this._dy;
        };
        // check to see if some boundary has been passed
        Ocean.prototype._checkBounds = function () {
            if (managers.Game.currentScene == config.Scene.START) {
                if (this.y >= 0) {
                    this._reset();
                }
            }
            else if (managers.Game.currentScene == config.Scene.PLAY) {
                if (this.y >= 0) {
                    this._reset();
                }
            }
            else if (managers.Game.currentScene == config.Scene.PLAY2) {
                if (this.x <= 640) {
                    this._reset();
                }
            }
            else if (managers.Game.currentScene == config.Scene.PLAY3) {
                if (this.x >= 1440) {
                    this._reset();
                }
            }
            else if (managers.Game.currentScene == config.Scene.OVER) {
                if (this.y >= 0) {
                    this._reset();
                }
            }
        };
        // public methods
        // Initializes variables and creates new objects
        Ocean.prototype.Start = function () {
            this._dy = 5;
            this._dx = 5;
            this._reset();
        };
        // updates the game object every frame
        Ocean.prototype.Update = function () {
            this._move();
            this._checkBounds();
        };
        return Ocean;
    }(createjs.Bitmap));
    objects.Ocean = Ocean;
})(objects || (objects = {}));
//# sourceMappingURL=ocean.js.map