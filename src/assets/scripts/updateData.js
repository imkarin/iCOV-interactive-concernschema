import * as d3 from 'd3';

export function updateData(thisComponent) {
  const newFilters = thisComponent.props.filters

  d3.selectAll("circle").filter((d) => { return !newFilters.includes(d.icovNodeType) })
    .each(() => this.classList.add("filtered_out"))

  d3.selectAll("circle").filter((d) => { return newFilters.includes(d.icovNodeType) })
    .each(() => this.classList.remove("filtered_out"))

  d3.selectAll("line").each(() => {
    if (newFilters.length === 3) {
      this.classList.remove("filtered_out");
    } else {
      this.classList.add("filtered_out");
    }
  })
}