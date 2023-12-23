import React, { ReactElement } from "react";
import { WorkflowCytoscapeChart } from "./workflow-cytoscape-chart";

import elements from "./tests/basic-workflow-elements";
// import elements from "./tests/const-water-leak-elements";
// import elements from "./tests/valve-reading-elements";

export const WorkflowSimpleChartContainer = (): ReactElement => {
  return <WorkflowCytoscapeChart elements={elements} />;
};
