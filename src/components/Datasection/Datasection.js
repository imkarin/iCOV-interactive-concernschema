import React, { Component } from 'react';
import * as d3 from 'd3';
import './Datasection.css';
import data from '../data/flare.xml';

class Datasection extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  // Update data with applied filters
  componentDidUpdate() {
    const newFilters = this.props.filters

    d3.selectAll("circle").filter((d) => { return !newFilters.includes(d.icovNodeType) })
    .transition()
    .duration(300)
    .style("opacity", .3);

    d3.selectAll("circle").filter((d) => { return newFilters.includes(d.icovNodeType) })
    .transition()
    .duration(300)
    .style("opacity", 1);

    d3.selectAll("line")
      .transition()
      .duration(300)
      .style("opacity", lineOpacity);

    // Function declarations
    function lineOpacity() {
      if (newFilters.length === 3) {
        return 1;
      } else {
        return .1;
      }
    }
  }

// Load initial data (no filters applied)
  componentDidMount() {
    let dataSection = d3.select(this.myRef.current);
    const width = 1500,
    height = 1250;

    // Create networkchain container (svg) and give it a zoom functionality
    const svg = dataSection.append("svg")
      .attr("width", "100%")
      .attr("height", "100%")
      .call(d3.zoom().on("zoom", () => svg.attr("transform", d3.event.transform)))
      .append("g")

    let simulation = d3.forceSimulation()
      .force("link", d3.forceLink().id((d) => { return d.entityId }))
      .force("charge", d3.forceManyBody().strength(-1000))
      .force("center", d3.forceCenter(width / 2, height / 2))
      .on("tick", ticked)
      .stop();

    let link = svg.append("g")
      .attr("class", "link")
      .attr("stroke", "#999")
      .attr("stroke-width", 2)
      .attr("stroke-opacity", 1)
      .selectAll("line");

    let node = svg.append("g")
      .attr("class", "node")
      .selectAll("circle");

    let nodeLabel = svg.append("g")
      .attr("class", "nodeLabel")
      .selectAll("text");

    let detailsPopup = dataSection.append("div")
      .attr("class", "tooltip")
      .style("opacity", 0);

    let drag = d3.drag()
      .on("start", dragstarted)
      .on("drag", dragged)
      .on("end", dragended);

    d3.xml(data).then((document) => {
      let entities = [];
        class Entity {
          constructor(
            label,
            description,
            entityId,
            identity,
            labelIsIdentity,
            city,
            country,
            dateOfBirth,
            dateOfDeath,
            departmentId,
            departmentName,
            edgeLabel,
            edgeNotes1,
            edgeNotes2,
            firstName,
            fromDate,
            id,
            lastName,
            locationId,
            managerId,
            notes1,
            notes2,
            notities1,
            notities2,
            numberOfStaff,
            postalCode,
            sex,
            streetAddress,
            toDate,
            type,
            icovNodeId,
            icovNodeType,
            icovNodeSubtype,
            icovNodeOrFlag,
            icovNodeKey,
            icovAditumQuery,
            group
          ) {
            this.label = label;
            this.description = description;
            this.entityId = entityId;
            this.identity = identity;
            this.labelIsIdentity = labelIsIdentity;
            this.city = city;
            this.country = country;
            this.dateOfBirth = dateOfBirth;
            this.dateOfDeath = dateOfDeath;
            this.departmentId = departmentId;
            this.departmentName = departmentName;
            this.edgeLabel = edgeLabel;
            this.edgeNotes1 = edgeNotes1;
            this.edgeNotes2 = edgeNotes2;
            this.firstName = firstName;
            this.fromDate = fromDate;
            this.id = id;
            this.lastName = lastName;
            this.locationId = locationId;
            this.managerId = managerId;
            this.notes1 = notes1;
            this.notes2 = notes2;
            this.notities1 = notities1;
            this.notities2 = notities2;
            this.numberOfStaff = numberOfStaff;
            this.postalCode = postalCode;
            this.sex = sex;
            this.streetAddress = streetAddress;
            this.toDate = toDate;
            this.type = type;
            this.icovNodeId = icovNodeId;
            this.icovNodeType = icovNodeType;
            this.icovNodeSubtype = icovNodeSubtype;
            this.icovNodeOrFlag = icovNodeOrFlag;
            this.icovNodeKey = icovNodeKey;
            this.icovAditumQuery = icovAditumQuery;
            this.group = group;
          }
        }

        const groups = ["PEOPLE", "DEPARTMENT", "ADDRESS"];

        d3.select(document).selectAll("Entity").each(function() {
          const rawAttributes = this.closest("ChartItem").getElementsByTagName("Attribute")
          let attributes = {}

          Array.from(rawAttributes).forEach(attr => {
            const AttributeName = attr.getAttribute("AttributeClassReference")
            const AttributeValue = attr.getAttribute("Value")
            attributes[AttributeName] = AttributeValue
          })

          entities.push(new Entity(
            this.closest("ChartItem").getAttribute("Label"),
            this.closest("ChartItem").getAttribute("Description"),
            this.getAttribute("EntityId"),
            this.getAttribute("Identity"),
            this.getAttribute("LabelIsIdentity"),
            attributes._CITY,
            attributes._COUNTRY,
            attributes._DATE_OF_BIRTH,
            attributes._DATE_OF_DEATH,
            attributes._DEPARTMENT_ID,
            attributes._DEPARTMENT_NAME,
            attributes._EDGE_LABEL,
            attributes._EDGE_NOTES1,
            attributes._EDGE_NOTES2,
            attributes._FIRST_NAME,
            attributes._FROM_DATE,
            attributes._ID,
            attributes._LAST_NAME,
            attributes._LOCATION_ID,
            attributes._MANAGER_ID,
            attributes._NOTES1,
            attributes._NOTES2,
            attributes._NOTITIES1,
            attributes._NOTITIES2,
            attributes._NUMBER_OF_STAFF,
            attributes._POSTAL_CODE,
            attributes._SEX,
            attributes._STREET_ADDRESS,
            attributes._TO_DATE,
            attributes._TYPE,
            attributes.iCOV_node_id,
            attributes.iCOV_node_type,
            attributes.iCOV_node_subtype,
            attributes.iCOV_node_or_flag,
            attributes.iCOV_node_key,
            attributes.iCOV_Aditum_Query,
            groups.findIndex((group) => group === attributes.iCOV_node_type) + 1
          ));
        })

        let connections = []
        class Connection {
          constructor(source, target) {
            this.source = source;
            this.target = target;
          }
        }

        d3.select(document).selectAll("Link").each(function() {
          connections.push(new Connection(
            this.getAttribute("End1Id"),
            this.getAttribute("End2Id")
          ))
        })

        let nodes = entities,
            links = connections

        link = link.data(links).enter().append("line")
          .attr("clicked", "false");

        node = node.data(nodes).enter().append("circle")
          .attr("r", 20)
          .attr("fill", nodeColor)
          .on("mouseover", showNodeDetails)
          .on("mouseout", hideNodeDetails)
          .attr("clicked", "false")
          .on("click", click)
          .call(drag);

        nodeLabel = nodeLabel.data(nodes).enter().append("text")
          .attr("class", "text")
          .attr("clicked", "false")
          .attr("text-anchor", "middle")
          .attr("dx", 0)
          .attr("dy", "35px")
          .style("fill", "#000")
          .text((d) => { return d.label })
          .call(getBB)

        simulation.nodes(nodes);
        simulation.force("link").links(links);
        simulation.restart();
    })
    .catch((err) => {
      throw err
    })

     // Functions that handle events
     function nodeColor(d) {
      if (d.group === 1) {
        return "#365169"
      } else if (d.group === 2) {
        return "#4BA9A8"
      } else if (d.group === 3) {
        return "#D93E39"
      }
    }

    function click() {
      if (this.getAttribute("clicked") === "true") {
        d3.select(this)
        .transition()
          .duration(10)
          .attr("r", 20)
          .attr("clicked", "false")

          d3.selectAll("[clicked=false]").transition()
          .duration(10)
          .style("opacity", "1");
          return
      }

      d3.select(this)
      .attr("clicked", "true")
      .transition()
        .duration(30)
        .attr("r", 50)
        .style("opacity", "1");

      d3.selectAll("[clicked=false]").transition()
        .duration(30)
        .style("opacity", ".3");
    }

    function ticked() {
      link
        .attr("x1", function (d) {
          return d.source.x;
        })
        .attr("y1", function (d) {
          return d.source.y;
        })
        .attr("x2", function (d) {
          return d.target.x;
        })
        .attr("y2", function (d) {
          return d.target.y;
        });

      node
        .attr("transform", function (d) {
          return "translate(" + d.x + "," + d.y + ")";
        });

      nodeLabel
        .attr("transform", function (d) {
          return "translate(" + d.x + "," + d.y + ")";
        });
    }

    function dragstarted(d) {
      if (!d3.event.active) simulation.alphaTarget(.2).restart();
      d.fx = d.x;
      d.fy = d.y;
    }

    function dragged(d) {
      d.fx = d3.event.x;
      d.fy = d3.event.y;
    }

    function dragended(d) {
      if (!d3.event.active) {
        simulation.alphaTarget(0);
        d.fx = null;
        d.fy = null;
      }
    }

    function getBB(selection) {
      selection.each(function(d){d.bbox = this.getBBox();})
    }

    function showNodeDetails(d) {
      detailsPopup
        .style("left", (d3.event.pageX) + "px")
        .style("top", (d3.event.pageY - 20) + "px")
        .transition()
        .duration(100)
        .style("opacity", .9);

      // define details in popup
      if(d.icovNodeType === "PEOPLE") {
        detailsPopup
          .html("<h3>" + d.label + "</h3><h4>" + d.sex.toLowerCase() + "</h4><p>" + d.dateOfBirth + "</p>")
      } else if(d.icovNodeType === "ADDRESS") {
        detailsPopup
          .html("<h3>" + d.label + "</h3><h4>" + d.city + ", " + d.country + "</h4><p>" + d.streetAddress + ", " + d.postalCode + "</p>")
      } else if(d.icovNodeType === "DEPARTMENT") {
        detailsPopup
          .html("<h3>" + d.label + "</h3><h4> Department name: " + d.departmentName + "</h4>")
      } else {
        detailsPopup
          .html("")
      }
    }

    function hideNodeDetails(d) {
      detailsPopup.transition()
          .duration(100)
          .style("opacity", 0);
    }
  }

  render() {
    return (
      <div className="Datasection" ref={this.myRef}></div>
    );
  }
}

export default Datasection;
