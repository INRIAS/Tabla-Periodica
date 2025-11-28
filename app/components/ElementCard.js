export function ElementCard() {
  const $section = document.createElement("section"),
    $div2 = document.createElement("div");

  $section.classList.add("element-card");
  $div2.classList.add("div2");
  $section.appendChild($div2);

  document.addEventListener("click", (e) => {
    const el = e.target.closest(".element");
    if (!el) return false;
    e.preventDefault();

    localStorage.setItem("elId", el.dataset.id || "");
    localStorage.setItem("elMass", el.dataset.mass || "");
    localStorage.setItem("elColor", el.dataset.style.trim() || "");

    const nameSpan = el.querySelector(".name");
    const nameText = nameSpan ? nameSpan.textContent.trim() : "";
    localStorage.setItem("elName", nameText);

    const simSpan = el.querySelector(".sim");
    const simText = simSpan ? simSpan.textContent.trim() : "";
    localStorage.setItem("elSim", simText);

    $div2.style.backgroundColor = localStorage.getItem("elColor");
    $div2.innerHTML = `
    <div class="number-mass">
        <p>${localStorage.getItem("elId")}</p>
        <p>${localStorage.getItem("elMass")}</p>
    </div>
    <h2>${localStorage.getItem("elSim")}</h2>
      <h3>${localStorage.getItem("elName")}</h3>
    `;
  });

  return $section;
}
