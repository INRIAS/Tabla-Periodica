import { ajax } from "../helpers/ajax.js";
import { Element } from "./Element.js";

export async function Router() {
  const d = document,
    w = window;
  let $table = d.getElementById("tabla-periodica");

  let { hash } = location;

  if (hash === "") {
    await ajax({
      url: `./app/assets/db.json`,
      cbSuccess: (main) => {
        console.log(main);
        let html = "";
        main.forEach((el) => {
          html += Element(el);
        });
        $table.innerHTML = html;
      },
      cbError: (err) => {
        console.log(err);
        $main.innerHTML = `<p class="error">
        No existen resultados de busqueda para el termino <mark>${query}</mark>
        </p>`;
      },
    });
  }
}
