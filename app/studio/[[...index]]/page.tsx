// This is where the studio component is mounted.
"use client";
// import styled
import styled from "styled-components";

import { NextStudio } from "next-sanity/studio";
import config from "@/sanity.config";

export default function Studio() {
  return <NextStudio config={config} />;
}
