import { FaGlasses } from "react-icons/fa";
import { defineType, defineField } from "sanity";

export default {
  name: "heroe",
  title: "Heroes",
  type: "document",
  Icon: FaGlasses,
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
    defineField({
      name: "url",
      title: "Social URL",
      type: "url",
    }),
    defineField({
      name: "met",
      title: "Have you met this hero?",
      type: "boolean",
    }),
  ],
};
