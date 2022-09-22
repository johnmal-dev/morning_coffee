const wallpapersRouter = require('express').Router();
const { createApi } = require('unsplash-js');
const fetch = require('node-fetch');
const config = require('../utils/config');

const unsplash = createApi({
  accessKey: config.UNSPLASH_ACCESS_KEY,
  fetch: fetch,
});

const collections = ['-fFWu0hoyCw'];

const capitalizeWords = (str) => {
  return str.replace(/(?:^|\s)\S/g, function (a) {
    return a.toUpperCase();
  });
};

wallpapersRouter.get('/', async (req, res) => {
  const data = await unsplash.photos.getRandom({
    collectionIds: collections,
  });
  const photo = data.response;
  console.log('photo', photo);
  const returnObj = {
    artist: capitalizeWords(photo.user.name),
    location: photo.location.title || photo.location.name,
    imgUrl: photo.urls.full,
    sourceUrl: photo.links.html,
  };
  res.status(201).json(returnObj);
});

module.exports = wallpapersRouter;
