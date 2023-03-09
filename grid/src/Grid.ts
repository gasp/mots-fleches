import { ArrowDir, Bounds, Cell, Direction, Vec } from "./types";
import Vector from "vector2js";
import {v4 as uuid} from "uuid";

export const nullCell:Cell = {
  x: -1,
  y: -1,
  definition: false,
  highlighted: false,
  splited: 0,
  suggestion: '',
  arrows: [],
  text: ''
};

export class Grid {
  public rows: number;
  public cols: number;
  public comment: string;
  public title: string;
  public cells: Cell[][];
  public id: string;
  public created: number;
  public thumbnail: string;

  constructor(rows: number, cols: number, id?: string) {
    this.cols = cols;
    this.rows = rows;
    this.comment = '';
    this.title = '';
    this.thumbnail = '';
    this.id = id || uuid();
    this.created = Date.now();
    this.cells =  new Array(rows)
      .fill(0)
      .map((_, y) => new Array(cols)
        .fill(0)
        .map((_, x) => Grid.newCell(x,y))
      );
  }

  isValid({x, y}: Vec): boolean {
    return x >= 0 && x < this.cols && y >= 0 && y < this.rows;
  }

  isDefinition({x, y}: Vec): boolean {
    return this.isValid({x, y}) && this.cells[y][x].definition;
  }

  resize(rows: number, cols: number){
    const newCells = new Array(rows)
    .fill(0)
    .map((_, i) => new Array(cols).fill(0)
    .map((_ ,j) => {
      if (this.cells[i] && this.cells[i][j]){
        return this.cells[i][j];
      }
      return Grid.newCell(j,i);
    }));
    this.rows = rows;
    this.cols = cols;
    this.cells = newCells;
  }

  setDefinition({x, y}: Vec, value: boolean): void {
    this.cells[y][x].definition = value;
    this.cells[y][x].text = '';
    if (value){
      this.cells[y][x].arrows = ['none', 'none', 'none'];
    } else {
      this.cells[y][x].arrows = [];

    }
  }

  setText({x, y}: Vec, value:string){
    const cell = this.cells[y][x];
    if (cell.definition){
      cell.text = value;
    } else {
      cell.text = value.slice(-1);
    }
  }

  setWord(word: string, point : Vec, direction: Direction){
    const v = Grid.getDirVec(direction);
    const s = new Vector(point.x, point.y);
    word.split('')
    .forEach((letter, i) => {
      const {x, y} = s.add(v.mulScalar(i));
      this.cells[y][x].text = letter; 
      this.cells[y][x].suggestion = ''; 
    });
  } 

  static setArrow(cell: Cell, index: number, direction: ArrowDir): void {
    if (!cell.arrows){
      cell.arrows = ['none', 'none', 'none'];
    }
    cell.arrows[index] = direction;
  }

  setArrow(v: Vec, index: number, direction: ArrowDir): void {
    if (!this.isValid(v)) return;
    Grid.setArrow(this.cells[v.y][v.x], index, direction);
  }

  setThumbnail(t :string){
    this.thumbnail = t;
  }

  increment(v: Vec, direction: Direction): Cell {
    const {x,y} = new Vector(v.x,v.y).add(Grid.getDirVec(direction));
    if (this.isValid({x,y})) return this.cells[y][x];
    return nullCell;
  }

  decrement(v: Vec, direction: Direction): Cell {
    const {x,y} = new Vector(v.x,v.y).sub(Grid.getDirVec(direction));
    if (this.isValid({x,y})) return this.cells[y][x];
    return nullCell;
  }

  getCell({x, y}: Vec): Cell{
    return this.cells[y][x];
  }

  highlight(cells: Cell[]) {
    this.cells.forEach((row) => {
      row.forEach((cell) => {
        cell.highlighted = false;
      });
    });
    cells.forEach((c) => {
      c.highlighted = true;
    });
  }
  
  suggest(words: string[], start: Vec[], directions: Direction[]) {
    this.cells.forEach((row) => {
      row.forEach((cell) => {
        cell.suggestion = '';
      });
    });
    words.forEach((word, i) => {
      const s = new Vector(start[i].x, start[i].y);
      const v = Grid.getDirVec(directions[i]);
      word.split('').forEach((letter, j) => {
        const {x,y} = s.add(v.mulScalar(j));
        this.cells[y][x].suggestion = letter;
      });
    });
  }

  static equal(a: Vec, b: Vec): boolean {
    return a.x === b.x && a.y === b.y;
  }

  static getDirVec(direction: Direction): Vector {
    return direction === 'horizontal' 
      ? new Vector(1, 0)
      : new Vector(0, 1);
  }

  static perpendicular(direction: Direction): Direction {
    return direction === 'vertical' ? 'horizontal' : 'vertical';
  }

  getBounds({x, y}: Vec, direction: Direction): Bounds {
    if (!this.isValid({x,y}) || this.isDefinition({x,y})) return {
      start: {x, y},
      end: {x, y},
      cells: [],
      length: 0
    };
    const v = Grid.getDirVec(direction);
    const vm = v.mulScalar(-1);
    const start = new Vector(x, y);
    const end = new Vector(x, y);
    let length = 0;
    while (this.isValid(start) && !this.isDefinition(start)){
      length++;
      start.addSelf(vm);
    }
    start.addSelf( v);

    length--;
    while (this.isValid(end) && !this.isDefinition(end)){
      end.addSelf(v);
      length++;
    }
    end.addSelf(vm);
    const cells = new Array(length)
      .fill(0)
      .map((_, i) => this.cells[start.y + v.y * i][start.x + v.x * i]);
    
    return {
      start,end, length,
      cells
    };
  }
  
  serialize(){
    return JSON.stringify({
      id: this.id,
      rows: this.rows,
      cols: this.cols,
      cells: this.cells,
      thumbnail: this.thumbnail,
      comment: this.comment,
      created: this.created,
      title: this.title
    });
  }

  isSplited(v: Vec){
    if (!this.isValid(v)) return false;
    return this.cells[v.y][v.x].splited;
  }

  static unserialize(s: string){
    const {rows, cols,comment, title, id, cells, thumbnail, created} = JSON.parse(s) as {
      rows: number,
      cols: number,
      id: string,
      created: number,
      comment: string,
      thumbnail: string,
      title: string
      cells: Cell[][]
    };
    const res = new Grid(rows, cols, id);
    cells.forEach((row,i ) =>{
      row.forEach((cell, j) => {
        cell.highlighted = false;
        cell.suggestion = '';
        res.cells[i][j] = cell;
        if (cell.arrows){
          cell.arrows = cell.arrows.map(a => {
            if (typeof a === 'string') a;
            //@ts-ignore
            return a.direction;
          });
          if (cell.arrows.length !== 0 && cell.arrows.length !== 3 ){
            cell.arrows.push(...new Array(3 - cell.arrows.length).fill('none'));
          }
        }
      });
    });
    res.title = title;
    res.comment = comment;
    res.thumbnail = thumbnail;
    res.created = created;
    return res;
  }

  static newCell(x: number, y: number){
    return {
      x,
      y,
      definition: false,
      highlighted: false,
      splited: 0,
      arrows: [],
      suggestion: '',
      text: "",
    };
  }
}