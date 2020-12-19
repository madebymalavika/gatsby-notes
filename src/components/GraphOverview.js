import React from "react";
import CytoscapeComponent from "react-cytoscapejs";
import { navigate } from "gatsby";

// let options = {
//   name: 'circle',
//   fit: true, // whether to fit the viewport to the graph
//   padding: 24, // the padding on fit
//   boundingBox: undefined, // constrain layout bounds; { x1, y1, x2, y2 } or { x1, y1, w, h }
//   avoidOverlap: true, // prevents node overlap, may overflow boundingBox and radius if not enough space
//   nodeDimensionsIncludeLabels: false, // Excludes the label when calculating node bounding boxes for the layout algorithm
//   spacingFactor: undefined, // Applies a multiplicative factor (>0) to expand or compress the overall area that the nodes take up
//   radius: undefined, // the radius of the circle
//   startAngle: 3 / 2 * Math.PI, // where nodes start in radians
//   sweep: undefined, // how many radians should be between the first and last node (defaults to full circle)
//   clockwise: true, // whether the layout should go clockwise (true) or counterclockwise/anticlockwise (false)
//   sort: undefined, // a sorting function to order the nodes; e.g. function(a, b){ return a.data('weight') - b.data('weight') }
//   animate: true, // whether to transition the node positions
//   animationDuration: 500, // duration of animation in ms if enabled
//   animationEasing: undefined, // easing of animation if enabled
//   animateFilter: function ( node, i ){ return true; }, // a function that determines whether the node should be animated.  All nodes animated by default on animate enabled.  Non-animated nodes are positioned immediately when the layout starts
//   ready: undefined, // callback on layoutready
//   stop: undefined, // callback on layoutstop
//   transform: function (node, position ){ return position; } // transform a given node position. Useful for changing flow direction in discrete layouts
// };

const GraphOverview = ({ elements, layout, style, stylesheet, ...props }) => {
  //console.log(props);
  return (
    <CytoscapeComponent
      elements={elements}
      layout={{ name: "breadthfirst", padding: "24px", ...layout }}
      style={{ width: "100vw", height: "100vh", ...style }}
      stylesheet={[
        {
          selector: "node",
          style: {
            label: "data(label)",
            color: "#707070",
            backgroundColor: "#aaa",
            "text-wrap": "wrap",
            "text-max-width": 150,
            "font-size": 16,
          },
        },
        {
          selector: "node.selected",
          style: {
            backgroundColor: "#000",
            color: "#000",
            "font-size": 20,
            "font-weight": 600,
          },
        },
        {
          selector: "edge",
          style: {
            "line-color": "#aaa",
            width: 1,
          },
        },
        {
          selector: "edge.selected",
          style: {
            "line-color": "#707070",
            width: 2.5,
          },
        },
        {
          selector: "node.mouseover",
          style: {
            "cursor": "pointer",
          },
        }
      ]}

      cy={(cy) => {
        cy.nodes().on("click", function (e) {
          const node = e.target;
          const selectedClass = "selected";

          if (node.hasClass(selectedClass)) {
            navigate("../"+node.id());
            return;
          }

          cy.elements().removeClass(selectedClass);

          node.addClass(selectedClass);
          node.connectedEdges().addClass(selectedClass);
        });

        cy.on('mouseover', 'node', function(e) {
          node.addClass("mouseover");
        });

        cy.on('mouseout', 'node', function(e) {
          node.removeClass("mouseover");
        });

        // cy.nodes().on("mouseover", function (e) {
        //   node.addClass("mouseover");
        // });
        //
        // cy.nodes().on("mouseout", function (e) {
        //   node.removeClass("mouseover");
        // });

      }}
      {...props}
    />
  );
};

export default GraphOverview;
