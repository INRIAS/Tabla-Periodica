export function Elements(props) {
  let { symbol, col, row, color, mass, name, number } = props;

  return `
    <div class="element" style="grid-column:${col}; grid-row:${row}; background-color: ${color}" data-id="${number}" data-mass="${mass}" data-style="${color}">
    <span class="sim">${symbol}</span>
    <span class="name">${name}</span>
    </div>
    `;
}
