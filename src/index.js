import "core-js/features/map";
import "core-js/features/set";
import React from "react";
import ReactDOM from "react-dom";
import bridge from "@vkontakte/vk-bridge";
import App from "./App";

// Init VK  Mini App
bridge.send("VKWebAppInit");

bridge.sendPromise('VKWebAppGetCommunityAuthToken', {
    "app_id": 7427444, // id вашего свежесозданного mini App
    "group_id": 163689249,  // id группы, где вы админ, куда виджет
    "scope": "app_widget"
  })
  .then(data => {
    // Обработка события в случае успеха
    console.log(data);
  })
  .catch(error => {
    //Обработка событияв случае ошибки
  });

ReactDOM.render(<App />, document.getElementById("root"));
if (process.env.NODE_ENV === "development") {
  import("./eruda").then(({ default: eruda }) => {}); //runtime download
}
