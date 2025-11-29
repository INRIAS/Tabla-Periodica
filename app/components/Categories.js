export function Categories(props) {
  const { category, color } = props;

  const $section = document.createElement("section"),
    $color = document.createElement("div"),
    $pCategory = document.createElement("p");

  $section.classList.add("category");
  $color.classList.add("color");
  $color.style.backgroundColor = `${color}`;
  $pCategory.value = `${category}`;

  $section.appendChild($color);
  $section.appendChild($pCategory);

  return $section;
}
