import { Categories } from "./Categories.js";
import { ElementCard } from "./ElementCard.js";
import { Table } from "./Table.js";

export function Main() {
  const $main = document.createElement("main");
  $main.appendChild(ElementCard());
  $main.appendChild(Table());
  // $main.innerHTML=Categories();

  return $main;
}
