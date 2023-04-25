import merge from 'merge';
export type Vec = { x: number, y: number };
export type Lookup<T> = { [key: number | string]: T };
export type DefGrid = boolean[][];
export type DeepPartial<T> = T extends object ? {
  [P in keyof T]?: DeepPartial<T[P]>;
} : T;
/**
* Arrow directions 
*/
export type ArrowDir = 'right' | 'down' | 'rightdown' | 'downright' | 'none';

/**
* Arrow 
*/
export type Arrow = {
  /**
   * Position of the arrow relative to the cell
   */
  position: Vec;
  /**
   * Direction of the arrow
   */
  direction: ArrowDir;
}
/**
* TextStyle 
*/
export interface TextSyle<T = string> {
  /**
   * Font family
   */
  font: string;
  /**
   * Font size: number if no unit (for SVG)
   */
  size: T;
  /**
   * Text color
   */
  color: string;
}
export type Cell = {
  /**
   * X position of the cell
   */
  x: number;
  /**
   * Y position of the cell
   */
  y: number;
  /**
  * wether the cell is a definition cell
  */
  definition: boolean;
  /**
   * wether the cell is highlighted or not (editor)
   */
  highlighted: boolean;
  /**
   * Suggestion for the cell (editor) 
   */
  suggestion: string;
  /**
   * Arrows of the cell
   */
  arrows: ArrowDir[];
  /**
   * Text of the cell (definition and not definition)
   * */
  text: string;
  /**
   * Wether there is a space on Vertical direction
   */
  spaceV: boolean;
  /**
   * Wether there is a space on Horizontal direction
   */
  spaceH: boolean;
}
/**
 * Format for printing
 */
export type Format = {
  /**
   * Width of the paper(cm)
   */
  width: number;
  /**
   * Height of the paper(cm)
   */
  height: number;
  /**
   * Orientation of the paper (portrait or landscape)
   */
  orientation: string;
  /**
   * dots per pixels (unused)
   **/
  dpi: number;
  /**
   * Margin of the paper (cm)
   */
  margin: {
    top: number;
    bottom: number;
    left: number;
    right: number;
  }
}

/**
 * Grid options
 * defines the style of the grid
 */
export type GridOptions = {
  /**
   * Id of the Options(db)
   */
  id: string;
  /**
   * Name of the Options
   */
  name: string;
  /**
   * Grid style
   */
  grid: {
    /**
     * Size of the cell
     */
    cellSize: number;
    /**
     * Size of the lines 
     */
    borderSize: number;
    /** 
    * Color of the lines
    */
    borderColor: string;
    /**
     * Size of the outer border
     */
    outerBorderSize: number;
    /**
     * Color of the outer border
     */
    outerBorderColor: string;
    /**
     * width of the line showind spaceV and spaceH
     */
    spaceSize: number;
  };
  /**
   * Definition style
   */
  definition: TextSyle<number> & {
    backgroundColor: string;
  };
  /**
   * Arrow style
   */
  arrow: {
    size: number;
    color: string;
  };
  /**
   * Format for printing
   */
  paper: Format;
};
/**
 * Bounds of a word within a cell
 */
export type Bounds = {
  /**
   * Start position of the word
   */
  start: Vec;
  /**
   * End position of the word
   */
  end: Vec;
  /**
   * All the cells of the word
   */
  cells: Cell[];
  /**
   * Length of the word
   */
  length: number;
}
export type Direction = 'horizontal' | 'vertical';


export const defaultOptions: GridOptions = {
  id: 'default',
  name: 'Default',
  grid: {
    cellSize: 54,
    borderSize: 1,
    borderColor: '#000000',
    outerBorderSize: 2,
    outerBorderColor: '#000000',
    spaceSize: 4,
  },
  definition: {
    font: "sans-serif",
    size: 12,
    color: "black",
    backgroundColor: "#ccc",
  },
  arrow: {
    size: 10,
    color: '#000000',
  },
  paper: {
    width: 21,
    height: 29.7,
    orientation: 'portrait',
    dpi: 300,
    margin: {
      top: 1,
      bottom: 1,
      left: 1,
      right: 1,
    }
  }
};

/**
 * Options for the solution
 */
export type SolutionOptions = GridOptions & {
  /**
   * Wether the options are for the solution or not
   */
  isSolution: true;
  grids: {
    /**
     * Rows per page
     */
    rows: number;
    /**
     * Columns per page
     */
    cols: number;
    /**
     * Style of the grid number
     */
    gridN: TextSyle;
  };
  /**
   * Style of the words index
   */
  words: TextSyle & {
    tolerance: number;
  };
  size: TextSyle;
};

const expOptions: DeepPartial<SolutionOptions> = {
  id: 'solution',
  name: 'solution',
  grid: {
    cellSize: 20
  },
  grids: {
    rows: 2,
    cols: 2,
    gridN: {
      font: "sans-serif",
      size: "1em",
      color: "black",
    },
  },
  words: {
    font: "sans-serif",
    size: "1em",
    color: "black",
    tolerance: 2
  },
  size: {
    font: "sans-serif",
    size: "1.5em",
    color: "black",
  },
  isSolution: true
}
export const defaultSolutionOptions: SolutionOptions = merge.recursive(
  JSON.parse(JSON.stringify(defaultOptions)),
  expOptions,
);
/**
 * JSON format of the grid
 * Used to serialize and deserialize the grid
 */
export type GridState = {
  rows: number;
  cols: number;
  id: string;
  created: number;
  comment: string;
  optionsId: string;
  title: string;
  cells: Cell[][];
};

export type WordAndPosition = {
  word: string;
  start: Vec;
  direction: Direction;
}

export type ProblemBound = Bounds & { problem: string };
export type GridValidity = {
  horizontal: Record<string, ProblemBound>;
  vertical: Record<string, ProblemBound>;
}

export const DPI_TO_PIXEL = 25.4;
