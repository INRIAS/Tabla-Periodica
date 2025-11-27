export function Element(props) {
    let {symbol, col, row, color} = props;

    return `
    <div class="element" style="grid-column:${col}; grid-row:${row}; background-color: ${color}">
    <span class="sim">${symbol}</span>
    </div>
    `;
}