import React, { ReactElement, useState } from "react";
import { WorkflowCytoscapeChart } from "./workflow-cytoscape-chart";

// import cytoscapeElements from "./tests/andy-elements";
import basicElements from "./tests/basic-workflow-elements";
import waterLeakElements from "./tests/const-water-leak-elements";
import valveReadingElements from "./tests/valve-reading-elements";

export const WorkflowChartContainer = (): ReactElement => {
  const [chart, setChart] = useState(2);

  return (
    <div>
      <div style={{ margin: "50px" }}>
        {chart === 0 && (
          <WorkflowCytoscapeChart key={chart} elements={basicElements} />
        )}
        {chart === 1 && (
          <WorkflowCytoscapeChart key={chart} elements={waterLeakElements} />
        )}
        {chart === 2 && (
          <WorkflowCytoscapeChart key={chart} elements={valveReadingElements} />
        )}
      </div>
      <div>
        <input
          type="button"
          value="Basic"
          onClick={() => {
            setChart(0);
          }}
        />
        <br />
        <input
          type="button"
          value="Water Leak"
          onClick={() => {
            setChart(1);
          }}
        />
        <br />
        <input
          type="button"
          value="Valve Reading"
          onClick={() => {
            setChart(2);
          }}
        />
      </div>
    </div>
  );
};
