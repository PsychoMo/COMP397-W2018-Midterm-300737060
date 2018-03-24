module objects {
  export class Coin extends objects.GameObject {
    // private instance variables

    // public properties

    // constructors
    constructor() {
      super("coin");
      this.Start();
    }

    // private methods

    // public methods
    public Start(): void {

    }

    public Update(): void {
      this.CheckBounds();
    }

    public CheckBounds(): void {

      if (managers.Game.currentScene == config.Scene.PLAY) {
        if (this.y > (480 + this.height)) {
          this.alpha = 1;
        }
      }
      else if (managers.Game.currentScene == config.Scene.PLAY2) {
        if (this.x < - this.width) {
          this.alpha = 1;
        }
      }
      else if (managers.Game.currentScene == config.Scene.PLAY3) {
        if (this.x > 640 + this.width) {
          this.alpha = 1;
        }
      }
      // if(this.y > (480 + this.height)) {
      //   this.alpha = 1;
      // }
    }
  }
}
