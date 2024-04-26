import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import Router from "./router";
import "./index.css";

import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import "@mantine/carousel/styles.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <MantineProvider>
    <Notifications />
    <RouterProvider router={Router} />
  </MantineProvider>
);
