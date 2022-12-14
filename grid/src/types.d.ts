export type Vec = {x: number, y: number};
export type Lookup<T> = { [key: number | string]: T };
export type DefGrid = boolean[][];
// export type LetterGrid = Letter[][];

export type ArrowDir = 'right' | 'down' | 'rightdown' | 'downright' | 'none';
export type Arrow = {
  position: Vec;
  direction: ArrowDir;
}

export type Cell = {
  x: number;
  y: number;
  definition: boolean;
  highlighted: boolean;
  suggestion: string;
  arrows: Arrow[];
  splited: boolean;
  text: string;
}


// export type Grid = {
//   rows: number;
//   cols: number;
//   cells: Cell[][];
// }
export type Bounds = {
  start: Vec;
  end: Vec;
  cells: Cell[];
  length: number;
}
export type Direction = 'horizontal' | 'vertical';