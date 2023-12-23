export default [
  // nodes
  { data: { id: "created", label: "Created" } },
  { data: { id: "started", label: "Started" } },
  { data: { id: "onhold", label: "On Hold" } },
  { data: { id: "completed", label: "Completed" } },
  // edges
  { data: { source: "created", target: "started", label: "start" } },
  { data: { source: "onhold", target: "started", label: "start" } },
  { data: { source: "started", target: "onhold", label: "pause" } },
  { data: { source: "started", target: "started", label: "increment" } },
  { data: { source: "started", target: "completed", label: "complete" } }
];
