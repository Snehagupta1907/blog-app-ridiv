import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { SidebarProvider } from "./context/sidebarContext";
import { BlogsProvider } from "./context/blogsContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <SidebarProvider>
    <BlogsProvider>
      <App />
    </BlogsProvider>
  </SidebarProvider>
);
