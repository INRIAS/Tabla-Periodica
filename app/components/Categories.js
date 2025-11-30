export function Categories(props) {
  const { category, color } = props;

  return `
    <section class="category">
      <div class="color" style="background-color: ${color};"></div>
      <p class="category-name">${String(category)}</p>
    </section>
  `;
}
