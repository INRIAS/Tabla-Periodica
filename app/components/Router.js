import { ajax } from "../helpers/ajax.js";
import { Categories } from "./Categories.js";
import { Elements } from "./Elements.js";

export async function Router() {
  const d = document,
    w = window;
  let $table = d.getElementById("tabla-periodica"),
    $main = d.querySelector("main"),
    $fullCategory = d.createElement("div");
  $fullCategory.id = "full-category";

  let { hash } = location;

  if (hash === "") {
    await ajax({
      url: `./app/assets/db.json`,
      cbSuccess: (main) => {
        // console.log(main);
        let html = "";
        main.forEach((el) => {
          html += Elements(el);
        });
        $table.innerHTML = html;
      },
      cbError: (err) => {
        // console.log(err);
        $main.innerHTML = `<p class="error">
        No existen resultados de busqueda para el termino <mark>${query}</mark>
        </p>`;
      },
    });
  }

  if (hash === "") {
    await ajax({
      url: `./app/assets/categories.json`,
      cbSuccess: (categories) => {
        // console.log(categories);
        let html = "";
        categories.forEach((el) => {
          html += Categories(el);
        });
        // console.log(html);

        $fullCategory.innerHTML = html;
        $main.insertAdjacentElement("beforeend", $fullCategory);
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
