export interface Item {
  id: number;
  expression: string;
  result: number;
}

export interface CalculateAppState {
  items: Item[];
  lastResult: number;
  lastExpression: string;
}
