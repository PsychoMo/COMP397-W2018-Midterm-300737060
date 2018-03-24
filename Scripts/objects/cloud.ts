module objects {
  export class Cloud extends objects.GameObject {
    // private instance variables

    // public properties

    // Constructor
    constructor() {
      super("cloud");
      this.Start();
    }

    // private methods

    // public methods

    // Initializes variables and creates new objects
    public Start(): void {
      this.Reset();
    }

    // updates the game object every frame
    public Update(): void {
      this.Move();
      this.CheckBounds();
    }

    // reset the objects location to some value
    public Reset(): void {

      if (managers.Game.currentScene == config.Scene.PLAY) {
        this.x = Math.floor((Math.random() * (640 - this.width)) + this.halfWidth);
        this.y = -this.height;
        this._dx = Math.floor((Math.random() * 4) - 2);
        this._dy = Math.floor((Math.random() * 5) + 5);
      }

      else if (managers.Game.currentScene == config.Scene.PLAY2) {
        this.rotation = 90;
        this.y = Math.floor((Math.random() * (480 - this.width)) + this.halfWidth);
        this.x = 640 + this.height;
        this._dx = Math.floor((Math.random() * 5) - 10);
        this._dy = Math.floor((Math.random() * 4 - 2));
      }

      else if (managers.Game.currentScene == config.Scene.PLAY3) {
        this.rotation = -90;
        // this.x = 0;
        // this.y = 240;
        // this._dx = 5;
        // this._dy = 5;
        this.y = Math.floor((Math.random() * (480 - this.width)) + this.halfWidth);
        this.x = -this.height;
        this._dx = Math.floor((Math.random() * 5) + 5);
        this._dy = Math.floor((Math.random() * 4 - 2));
      }

      // 
    }

    // move the object to some new location
    public Move(): void {
      this.y += this._dy;
      this.x += this._dx;
    }

    // check to see if some boundary has been passed
    public CheckBounds(): void {
      // check lower bounds

      if (managers.Game.currentScene == config.Scene.PLAY) {
        if (this.y >= 480 + this.height) {
          this.Reset();
        }
      }
      else if (managers.Game.currentScene == config.Scene.PLAY2) {
        if (this.x <= -this.height) {
          this.Reset();
        }
      }
      else if (managers.Game.currentScene == config.Scene.PLAY3) {
        if (this.x >= 640 + this.height) {
          this.Reset();
        }
      }
    }
  }
}
