import * as React from "react";
import { render } from "react-dom";

// import { WorkflowChartContainer } from "./workflow-chart-container";
import { WorkflowSimpleChartContainer } from "./workflow-simple-chart-container";

const rootElement = document.getElementById("root");
render(<WorkflowSimpleChartContainer />, rootElement);
