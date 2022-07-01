const searchLink1 = "https://api.mangadex.org/manga?title=";
const searchLink2 =
  "&includedTagsMode=AND&excludedTagsMode=OR&contentRating%5B%5D=safe&contentRating%5B%5D=suggestive&order%5BlatestUploadedChapter%5D=desc&includes%5B%5D=manga&includes%5B%5D=chapter&includes%5B%5D=cover_art&includes%5B%5D=tag&includes%5B%5D=user`";

//fetching the cover on manga page
const coverLink1 = "https://api.mangadex.org/cover?limit=10&manga%5B%5D=";
const coverLink2 =
  "&order%5BcreatedAt%5D=asc&order%5BupdatedAt%5D=asc&order%5Bvolume%5D=asc";

//manga link to get the info to display on site
const idLink = "https://api.mangadex.org/manga/";

//fetching chapters with the link below
const chLink = "https://api.mangadex.org/manga/";

//fetching chapter images
const imgLink = "https://api.mangadex.org/at-home/server/";

export {
  searchLink1,
  searchLink2,
  coverLink1,
  coverLink2,
  idLink,
  chLink,
  imgLink,
};
