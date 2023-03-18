import express from "express";
import cors from "cors";
import open from "open";
import bodyParser from "body-parser";
import { existsSync } from "fs";
import path from 'path';
import db from "./database";
import wordController from "./controllers/wordController";
import gridController from "./controllers/gridController";
import optionsController from "./controllers/optionsController";
import searchController from "./controllers/search-controller";

import dico from "./search/dico";

export function createApp() {
  const app = express();
  app.use(cors());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  if (existsSync(path.resolve(__dirname, "public"))) {
    console.log('public folder', path.resolve(__dirname, "public"));
    app.use(express.static(path.resolve(__dirname, "public")));
  }
  db.getWords().then((words) => {
    dico.addWordsToDictionnary(words);
  });
  wordController({ app, db });
  gridController({ app, db });
  searchController({ app, db });
  optionsController({ app, db });
  // if (require.main === module) {
  const server = app.listen(+APP_CROSSWORDS_PORT || 3011, () => {
    const url = `http://localhost:${server.address().port}`;
    console.log(`server running at port ${url}`);
    if (+APP_OPEN_BROWSER) {
      open(url);
    }
  });
  return { app, server };
}
