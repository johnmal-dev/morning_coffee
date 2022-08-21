const wallpapersRouter = require("express").Router();
const { createApi } = require("unsplash-js");
const fetch = require("node-fetch");
const config = require("../utils/config");

const unsplash = createApi({
  accessKey: config.UNSPLASH_ACCESS_KEY,
  fetch: fetch,
});

wallpapersRouter.get("/", async (req, res) => {
  const photo = await unsplash.photos.getRandom({
    orientation: "landscape",
    query: "nature background",
  });
  console.log(photo);
  res.status(201).json(photo);
});

module.exports = wallpapersRouter;
