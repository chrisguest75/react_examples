import { Board, Counters } from "./Board";

class Player {
    protected _colour: number = Counters.None;
    protected _name: string = "";
  
    public get name(): string {
      return this._name;
    }
  
    public get colour(): number {
      return this._colour;
    }
  
    public takeTurn(board: Board, column: number = -1): [number, number] {
      let taken: boolean = false;
      if (column === -1) {
        column = Math.floor(Math.random() * board.columns);
      }
      let count = 0;
      let coords: [number, number] = [0, 0];
      while (!taken) {
        coords = board.drop(this._colour, column);
        if (coords[1] !== -1) {
          taken = true;
        } else {
          // turn not taken as column is full
          column = (column + 1) % board.columns;
          count++;
          if (count >= board.columns) {
            throw new Error("No where to play");
          }  
        }
      }
  
      return coords;
    }
  }
  
  class RedPlayer extends Player {
    constructor() {
      super();
      this._colour = Counters.Red;
      this._name = "Red";
    }
  }
  
  class YellowPlayer extends Player {
    constructor() {
      super();
      this._colour = Counters.Yellow;
      this._name = "Yellow";
    }
  }
  
  export { Player, RedPlayer, YellowPlayer };