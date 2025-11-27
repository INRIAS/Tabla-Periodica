import { Main } from "./components/Main.js";
import { Router } from "./components/Router.js";

export default function App() {
    const $root = document.getElementById("root");

    $root.appendChild(Main());
    Router();

}