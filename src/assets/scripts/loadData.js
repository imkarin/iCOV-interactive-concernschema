import * as d3 from 'd3';
import data from '../data/flare.xml';
import { Entity } from '../../assets/scripts/Entity';
import { Connection } from '../../assets/scripts/Connection';
import { nodeColor, nodeClick, ticked, dragstarted, dragged, dragended } from '../../assets/scripts/functions';

export function loadData(thisComponent) {
  const dataSection = d3.select(thisComponent.myRef.current);
  const width = 1500,
  height = 1250;
  
  /* Create networkchain container (svg) and give it a zoom functionality */
  const svg = dataSection.append("svg")
  .attr("width", "100%")
  .attr("height", "100%")
  .call(d3.zoom().on("zoom", () => svg.attr("transform", d3.event.transform)))
  .append("g");

  let simulation = d3.forceSimulation()
    .force("link", d3.forceLink().id((d) => { return d.entityId }))
    .force("charge", d3.forceManyBody().strength(-1000))
    .force("center", d3.forceCenter(width / 2, height / 2))
    .on("tick", () => ticked(link, node, nodeLabel))
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
  .on("start", () => dragstarted)
  .on("drag", () => dragged)
  .on("end", () => dragended);
    

  d3.xml(data).then((document) => {
    // make JS "Entity" object, to which all XML entities will be converted
    let entities = [];
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

}