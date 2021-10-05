import React from "react";
import Chart from "react-google-charts";

function App() {
  return (
    <div className="App">
      <Chart
        width={"100%"}
        height={"400px"}
        chartType="Gantt"
        loader={<div>Loading Chart</div>}
        data={[
          [
            { type: "string", label: "Task ID" },
            { type: "string", label: "Task Name" },
            { type: "string", label: "Resource" },
            { type: "date", label: "Start Date" },
            { type: "date", label: "End Date" },
            { type: "number", label: "Duration" },
            { type: "number", label: "Percent Complete" },
            { type: "string", label: "Dependencies" },
          ],
          [
            "bts",
            "BTS",
            "members: 5",
            new Date(2013, 5, 13),
            new Date(),
            null,
            null,
            null,
          ],
          [
            "txt",
            "TOMORROW X TOGETHER",
            "members: 4",
            new Date(2019, 2, 4),
            new Date(),
            null,
            null,
            null,
          ],
          [
            "2am",
            "2AM",
            "members: 4",
            new Date(2008, 6, 11),
            new Date(2014, 11, 31),
            null,
            null,
            null,
          ],
        ]}
        options={{
          gantt: {
            criticalPathEnabled: false, // Critical path arrows will be the same as other arrows.
            arrow: {
              angle: 100,
              width: 5,
              color: "green",
              radius: 0,
            },
          },
        }}
      />
    </div>
  );
}

export default App;
