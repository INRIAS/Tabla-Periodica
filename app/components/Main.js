import { Table } from "./Table.js";

export function Main() {
  const $main = document.createElement("main");
 $main.appendChild(Table());

  return $main;
}
