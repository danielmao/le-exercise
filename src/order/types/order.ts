import { Food } from "./food";

export type Order = {
  tip: number,
  list: Food[],
}