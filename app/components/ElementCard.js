export function ElementCard() {
  const $section = document.createElement("section"),
    $div2 = document.createElement("div");
  $section.classList.add("element-card");
  $div2.classList.add("div2");
  $section.appendChild($div2);

  function parseElement(el) {
    return {
      id: el.dataset.id || "",
      mass: el.dataset.mass || "",
      color: el.dataset.style.trim() || "",
      name: el.querySelector(".name")?.textContent.trim() || "",
      sim: el.querySelector(".sim")?.textContent.trim() || "",
    };
  }

  function renderCard(data) {
    localStorage.setItem("elId", data.id);
    localStorage.setItem("elMass", data.mass);
    localStorage.setItem("elColor", data.color);
    localStorage.setItem("elName", data.name);
    localStorage.setItem("elSim", data.sim);
    
    $section.classList.add("show");
    $section.classList.remove("hidden");
    $section.style.backgroundColor = data.color;
    $div2.innerHTML = `
    <div class="number-mass">
    <p title="Número Atómico">${data.id}</p>
    <p title="Masa Atómica">${data.mass}</p>
    </div>
    <h2 title="Símbolo">${data.sim}</h2>
    <h3 title="Elemento">${data.name}</h3>
    `;
  }

  function startListener() {
    const $table = document.getElementById("tabla-periodica");
    const $switch = $table || document;
    $switch.addEventListener("click", (e) => {
      const el = e.target.closest(".element");
      if (!el) return false;
      e.preventDefault();
      renderCard(parseElement(el));
    });
  }

  if (localStorage.getItem("elId")) {
    renderCard({
      id: localStorage.getItem("elId"),
      mass: localStorage.getItem("elMass"),
      color: localStorage.getItem("elColor"),
      name: localStorage.getItem("elName"),
      sim: localStorage.getItem("elSim"),
    });
  } else {
    $section.classList.add("hidden")
  }

  startListener();

  return $section;
}
