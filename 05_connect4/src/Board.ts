/**
 * Represents the Board state and game operations
 */

enum Counters {
  None = 0,
  Red,
  Yellow,
}

class Board {
  private _columns: number;
  private _rows: number;
  private _board: Array<Array<number>> = new Array();

  /**
   * Create an empty board size
   * @param columns Width of board
   * @param rows Height of board
   */
  constructor(columns: number, rows: number) {
    if (columns < 1) {
      throw new Error("Number of columns has to be greater than 0");
    }
    if (rows < 1) {
      throw new Error("Number of rows has to be greater than 0");
    }

    this._columns = columns;
    this._rows = rows;

    for (let y = 0; y < rows; y++) {
      let row = new Array();
      for (let x = 0; x < columns; x++) {
        row.push(Counters.None);
      }
      this._board.push(row);
    }
  }

  public get columns() {
    return this._columns;
  }

  public get rows() {
    return this._rows;
  }

  public reset(state: Array<Array<number>>) {
    this._board = state;
  }

  public state(): Array<Array<number>> {
    return this._board;
  }

  /**
   * Drops a counter into board
   * @param counter Counter type to drop Red or Yellow
   * @param column Column to drop counter into
   * @returns A tuple of coordinates for where counter was placed. -1 in y coord means could not be placed.
   */
  public drop(counter: Counters, column: number): [number, number] {
    // row is full
    if (this._board[0][column] != Counters.None) {
      return [column, -1]
    } else {
      // find first counter in column
      for (let y = 0; y < this._rows - 1; y++) {
        if (
          this._board[y][column] === Counters.None &&
          this._board[y + 1][column] !== Counters.None
        ) {
          this._board[y][column] = counter;
          return [column, y]
        }
      }

      // column was empty
      this._board[this._rows - 1][column] = counter;
      return [column, this._rows - 1]
    }

  }

  /*
  * Uses coordinate of dropped counter to determine if it created a line 
  */
  public winner(counter: Counters, coords: [number, number]): boolean {
    let in_a_row = 4;

    // check vertical (down)
    let count = 0;
    let y = coords[1];
    let x = coords[0];
    while (y < this.rows) {
      if (this._board[y][x] != counter) {
        break;
      }

      count++;
      y++;
      if (count == in_a_row) {
        return true;
      }
    }

    // check horizontal (checks whole row)
    count = 0;
    y = coords[1];
    x = 0;
    while (x < this.columns) {
      if (this._board[y][x] == counter) {
        count++;
      } else {
        count = 0;
      }
      x++;
      if (count == in_a_row) {
        return true;
      }
    }

    // check diagonal down
    count = 0;
    y = coords[1];
    x = coords[0];
    y += x * -1
    x = 0 
    while (x < this.columns && y < this.rows) {
      if (y < 0) {
        x++;
        y++;  
        continue
      }
      if (this._board[y][x] == counter) {
        count++;
      } else {
        count = 0;
      }
      x++;
      y++;
      if (count == in_a_row) {
        return true;
      }
    }

    // check diagonal up
    count = 0;
    y = coords[1];
    x = coords[0];
    y += ((this.columns - 1) - x) * -1
    x = this.columns - 1 
    while (x >= 0 && y < this.rows) {
      if (y < 0) {
        x--;
        y++;  
        continue
      }
      if (this._board[y][x] == counter) {
        count++;
      } else {
        count = 0;
      }
      x--;
      y++;
      if (count == in_a_row) {
        return true;
      }
    }

    return false;
  }
}

export { Board, Counters };
