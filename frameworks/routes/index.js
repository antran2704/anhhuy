//import controller
import homeController from "./home.js";

import adviseRouter from "./advise.js"
//import api
import userApiRouter from "./userApi.js";

export default function routes(app, express) {
  //controller
  app.use("/tu-van-maketing", adviseRouter(express));

  //home page
  app.use("/", homeController(express));

  //api
  app.use("/api/user", userApiRouter(express));
}
