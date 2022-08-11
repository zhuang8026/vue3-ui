import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import ATDUEUI from "../packages/index";
import hljs from "highlight.js";
import "highlight.js/styles/github.css";

import router from "@/router";

// import mzlUI from '../dist/mzl-ui.es'
// import '../dist/style.css'

const app = createApp(App);
app.use(ATDUEUI);
app.use(router);
app.use(createPinia());

hljs.configure({
  ignoreUnescapedHTML: true,
  languages: [
    "javascript",
    "css",
    "python",
    "html",
    "bash",
    "java",
    "sql",
    "json",
    "http",
    "go",
    "c++",
    "c#",
    "",
  ],
});
app.directive("highlight", function (el) {
  const blocks = el.querySelectorAll("pre code");
  blocks.forEach((block) => {
    hljs.highlightBlock(block);
  });
});
app.mount("#app");
