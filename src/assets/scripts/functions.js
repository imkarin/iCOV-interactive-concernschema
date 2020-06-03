import * as d3 from 'd3';

// Determine color of node by its group
export function nodeColor(d) {
    if (d.group === 1) {
        return "#365169"
    } else if (d.group === 2) {
        return "#4BA9A8"
    } else if (d.group === 3) {
        return "#D93E39"
    }
}

// Return icons to specific nodes
export function nodeIcons(d) {
    //ADDRESS
    if (d.subgroup === 1) {
        return "http://azamawan.nl/img/nodeIcons/Bedrijf.E.Actief.png"
    }
    //MANAGER
    else if (d.subgroup === 2) {
        return ""
    }
    //SEN_FEMALE_EMPLOYEE
    else if (d.subgroup === 3) {
        return "http://azamawan.nl/img/nodeIcons/Vrouw.Sr.png"
    }
    //DEPARTMENT
    else if (d.subgroup === 4) {
        return "http://azamawan.nl/img/nodeIcons/Bedrijf.E.Actief.png"
    }
    //FLAG
    else if (d.subgroup === 5) {
        return ""
    }
    //YOUNG_MALE_EMPLOYEE
    else if (d.subgroup === 6) {
        return "http://azamawan.nl/img/nodeIcons/Man.Jr.png"
    }
    //YOUNG_FEMALE_EMPLOYEE
    else if (d.subgroup === 7) {
        return "http://azamawan.nl/img/nodeIcons/Vrouw.Jr.png"
    }
    //SEN_MALE_EMPLOYEE
    else if (d.subgroup === 8) {
        return "http://azamawan.nl/img/nodeIcons/Man.Sr.png"
    }
}

// Make pop-up with details appear on node click
export function nodeClick(d) {
    const clickedNode = d3.event.target;

    if(clickedNode.getAttribute("clicked") === "false") {
        // add "bigger" & remove "faded_out" class from clicked node
        clickedNode.setAttribute("clicked", "true");
        clickedNode.classList.add("bigger");
        clickedNode.classList.remove("faded_out");

        // add "faded_out" class to not-clicked nodes
        document.querySelectorAll("[clicked=false]").forEach(element => {
            element.classList.add("faded_out");
        })

        // make popup appear
        d3.select(clickedNode).attr("clicked", "true");

        const nodeDetails = d3.select(".detailsection").append("div")
        .attr("class", "nodedetails")
        .attr("from_node", "id_" + d.entityId)

        nodeDetails.on("click", showMoreDetails)

        const previewDetails = nodeDetails.append("div");
        previewDetails.append("span").style("background", nodeColor(d));

        // fill popup with node details (titles, properties)
        if (d.icovNodeType === "PEOPLE") {
            previewDetails.append("h3").text(d.label)
            previewDetails.append("p").text(d.icovNodeSubtype.toLowerCase())

        } else if (d.icovNodeType === "ADDRESS") {
            previewDetails.append("h3").text(d.streetAddress)
            previewDetails.append("p").text(d.city)

        } else if (d.icovNodeType === "DEPARTMENT") {
            previewDetails.append("h3").text(d.departmentName)
            previewDetails.append("p").text(d.ciy)
        }

        nodeDetails.append("table")
        for(var key in d) {
            if (d[key] !== undefined && d[key] !== "" && key !== "x" && key !== "y" && key !== "vx" && key !== "vy" && key !== "fx" && key !== "fy" ) {
                let tr = d3.select(`[from_node=${"id_" + d.entityId}]`).select("table").append("tr");

                tr.append("td").text(key + ": ");
                tr.append("td").text(d[key]);
            }
        }

        return
    }

    // remove "bigger" class from clicked node
    clickedNode.setAttribute("clicked", "false");
    clickedNode.classList.remove("bigger");
    clickedNode.classList.add("faded_out");

    // remove "faded_out" class from all not-clicked nodes, if there are no clicked nodes anymore
    document.querySelectorAll("[clicked=false]").forEach(element => {
        if(document.querySelectorAll("[clicked=true]").length === 0) {
            element.classList.remove("faded_out");
        }
    })

    // make popup with details disappear
    d3.select(`[from_node=${"id_" + d.entityId}]`).remove();
}

// Show more details when you click on the detail popup
function showMoreDetails() {
    if (!this.getElementsByTagName("table")[0].classList.contains("open")) {
        d3.select(this).select("table")
        .attr("class", "open")
    } else {
      d3.select(this).select("table")
        .attr("class", null);
    }
}

// Functions for the D3 network tree simulation
export function ticked(link, node, nodeLabel) {
    link
        .attr("x1", (d) => { return d.source.x + 20 })
        .attr("y1", (d) => { return d.source.y + 20 })
        .attr("x2", (d) => { return d.target.x + 20 })
        .attr("y2", (d) => { return d.target.y + 20 });

    node
        .attr("transform", (d) => { return "translate(" + d.x + "," + d.y + ")" });

    nodeLabel
        .attr("transform", (d) => { return "translate(" + (d.x + 20)+ "," + (d.y + 25) + ")" });
}


// Functions that execute when you drag a node network tree
export function dragstarted(d, simulation) {
    if (!d3.event.active) simulation.alphaTarget(.2).restart();
    d.fx = d.x;
    d.fy = d.y;
}

export function dragged(d) {
    d.fx = d3.event.x;
    d.fy = d3.event.y;
}

export function dragended(d, simulation) {
    if (!d3.event.active) {
        simulation.alphaTarget(0);
        d.fx = null;
        d.fy = null;
    }
}