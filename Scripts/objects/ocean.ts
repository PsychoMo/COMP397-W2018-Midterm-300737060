module objects {
  export class Ocean extends createjs.Bitmap {
    // private instance variables
    private _dy: number;
    private _dx: number;

    // public properties

    // Constructor
    constructor() {
      super(managers.Game.assetManager.getResult("ocean"));
      this.Start();
    }

    // private methods

    // reset the objects location to some value
    private _reset(): void {
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
    }

    // move the object to some new location
    private _move(): void {
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
    }

    // check to see if some boundary has been passed
    private _checkBounds(): void {

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

    }

    // public methods

    // Initializes variables and creates new objects
    public Start(): void {
      this._dy = 5;
      this._dx = 5;
      this._reset();
    }

    // updates the game object every frame
    public Update(): void {
      this._move();
      this._checkBounds();
    }
  }
}
