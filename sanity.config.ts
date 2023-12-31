import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";
import { codeInput } from "@sanity/code-input";
import { projectId, dataset } from "./lib/sanity.api";

export default defineConfig({
  name: "jrosser",
  title: "jrosser.co.uk",
  basePath: "/studio",
  projectId,
  dataset,
  plugins: [deskTool(), visionTool(), codeInput()],
  schema: { types: schemaTypes },
});