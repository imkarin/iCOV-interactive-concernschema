import React, { Component } from 'react';
import * as d3 from 'd3';
import './Datasection.css';
import data from '../data/flare.xml';

class Datasection extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  /* Update data with applied filters */
  componentDidUpdate() {
    const newFilters = this.props.filters

    d3.selectAll("circle").filter((d) => { return !newFilters.includes(d.icovNodeType) })
      .each(function(){
        this.classList.add("filtered_out");
      })

      d3.selectAll("circle").filter((d) => { return newFilters.includes(d.icovNodeType) })
        .each(function(){
          this.classList.remove("filtered_out");
        })

    d3.selectAll("line").each(function(){
      if (newFilters.length === 3) {
        this.classList.remove("filtered_out");
      } else {
        this.classList.add("filtered_out");
      }
    })
  }

  /* Load initial data (no filters applied) */
  componentDidMount() {
    let dataSection = d3.select(this.myRef.current);
    const width = 1500,
    height = 1250;

    /* Create networkchain container (svg) and give it a zoom functionality */
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

    let detailSection = dataSection.append("section")
      .attr("class", "detailsection");

    let drag = d3.drag()
      .on("start", dragstarted)
      .on("drag", dragged)
      .on("end", dragended);

    d3.xml(data).then((document) => {
      // make JS "Entity" object, to which all XML entities will be converted
      let entities = [];
        class Entity {
          constructor(
            label,
            description,
            entityId,
            identity,
            labelIsIdentity,
            cards,
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
            this.cards = cards;
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

        // get XML data and convert it to "Entity" objects
        d3.select(document).selectAll("Entity").each(function() {
          // get the attributes
          const rawAttributes = this.closest("ChartItem").getElementsByTagName("Attribute")
          let attributes = {}

          Array.from(rawAttributes).forEach(attr => {
            const attributeName = attr.getAttribute("AttributeClassReference")
            const attributeValue = attr.getAttribute("Value")
            attributes[attributeName] = attributeValue
          })

          // get the cards (notes)
          const rawCards = this.getElementsByTagName("Card")
          let cards = []

          Array.from(rawCards).forEach(card => {
            const cardSummary = card.getAttribute("Summary");
            const cardText = card.getAttribute("Text");
            cards.push({
              "summary": cardSummary,
              "text": cardText
            })
          })

          // push this new entity into the "entities" array
          entities.push(new Entity(
            this.closest("ChartItem").getAttribute("Label"),
            this.closest("ChartItem").getAttribute("Description"),
            this.getAttribute("EntityId"),
            this.getAttribute("Identity"),
            this.getAttribute("LabelIsIdentity"),
            cards,
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

        // make JS "Connection" object, to which all XML links will be converted
        let connections = []
        class Connection {
          constructor(source, target, label, description, cards) {
            this.source = source;
            this.target = target;
            this.label = label;
            this.description = description;
            this.cards = cards;
          }
        }

        // get XML link-data and convert it to "Connection" objects
        d3.select(document).selectAll("Link").each(function() {
          // get the cards (notes)
          const rawCards = this.getElementsByTagName("Card")
          let cards = []

          Array.from(rawCards).forEach(card => {
            const cardSummary = card.getAttribute("Summary");
            const cardText = card.getAttribute("Text");
            cards.push({
              "summary": cardSummary,
              "text": cardText
            })
          })

          connections.push(new Connection(
            this.getAttribute("End1Id"),
            this.getAttribute("End2Id"),
            this.closest("ChartItem").getAttribute("Label"),
            this.closest("ChartItem").getAttribute("Description"),
            cards
          ))
        })

        let nodes = entities,
            links = connections

        link = link.data(links).enter().append("line")
          .attr("clicked", "false");

        node = node.data(nodes).enter().append("circle")
          .attr("r", 20)
          .attr("fill", nodeColor)
          .attr("clicked", "false")
          .on("click", nodeClick)
          .call(drag);

        nodeLabel = nodeLabel.data(nodes).enter().append("text")
          .attr("class", "text")
          .attr("clicked", "false")
          .attr("text-anchor", "middle")
          .attr("dx", 0)
          .attr("dy", "35px")
          .style("fill", "#000")
          .text((d) => { return d.label })

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

    function nodeClick(d) {
      if(this.getAttribute("clicked") === "false") {
        // add "bigger" & remove "faded_out" class from clicked node
        this.setAttribute("clicked", "true");
        this.classList.add("bigger");
        this.classList.remove("faded_out");

        // add "faded_out" class to not-clicked nodes
        document.querySelectorAll("[clicked=false]").forEach(element => {
          element.classList.add("faded_out");
        })

        // make popup appear
        d3.select(this).attr("clicked", "true");

        const nodeDetails = detailSection.append("div")
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
      this.setAttribute("clicked", "false");
      this.classList.remove("bigger");
      this.classList.add("faded_out");

      // remove "faded_out" class from all not-clicked nodes, if there are no clicked nodes anymore
      document.querySelectorAll("[clicked=false]").forEach(element => {
        if(document.querySelectorAll("[clicked=true]").length === 0) {
          element.classList.remove("faded_out");
        }
      })

      // make popup with details disappear
      d3.select(`[from_node=${"id_" + d.entityId}]`).remove();
    }

    function showMoreDetails() {
      if (!this.getElementsByTagName("table")[0].classList.contains("open")) {
        d3.select(this).select("table")
          .attr("class", "open")
      } else {
        d3.select(this).select("table")
          .attr("class", null);
      }
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
  }

  render() {
    return (
      <div className="Datasection" ref={this.myRef}></div>
    );
  }
}

export default Datasection;
