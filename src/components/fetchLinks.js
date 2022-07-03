const searchLink1 = "https://api.mangadex.org/manga?";
const searchLink2 =
  "&includedTagsMode=AND&excludedTagsMode=OR&contentRating%5B%5D=safe&excludedOriginalLanguage%5B%5D=ko&excludedOriginalLanguage%5B%5D=zh&contentRating%5B%5D=suggestive&includes%5B%5D=manga&includes%5B%5D=chapter&includes%5B%5D=cover_art&includes%5B%5D=tag&includes%5B%5D=user&excludedTags%5B%5D=5920b825-4181-4a17-beeb-9918b0ff7a30&excludedTags%5B%5D=b13b2a48-c720-44a9-9c77-39c9979373fb";

//fetching the cover on manga page
const coverLink1 = "https://api.mangadex.org/cover?limit=1&manga%5B%5D=";
const coverLink2 =
  "&order%5BcreatedAt%5D=asc&order%5BupdatedAt%5D=asc&order%5Bvolume%5D=asc";

//manga link to get the info to display on site
const idLink = "https://api.mangadex.org/manga/";

//fetching chapters with the link below
const chLink = "https://api.mangadex.org/manga/";

//fetching chapter images
const imgLink = "https://api.mangadex.org/at-home/server/";

const top50 =
  "https://api.mangadex.org/manga?includedTagsMode=AND&excludedTagsMode=OR&contentRating%5B%5D=safe&limit=24&contentRating%5B%5D=suggestive&order%5Brating%5D=desc&includes%5B%5D=manga&includes%5B%5D=cover_art&excludedOriginalLanguage%5B%5D=ko&excludedTags%5B%5D=5920b825-4181-4a17-beeb-9918b0ff7a30&excludedTags%5B%5D=b13b2a48-c720-44a9-9c77-39c9979373fb";

const showMoreTop50 = "limit=100&order%5Brating%5D=desc";

const latestUpdates =
  "https://api.mangadex.org/manga?includedTagsMode=AND&excludedTagsMode=OR&contentRating%5B%5D=safe&contentRating%5B%5D=suggestive&limit=24&order%5BlatestUploadedChapter%5D=desc&includes%5B%5D=manga&includes%5B%5D=cover_art&excludedOriginalLanguage%5B%5D=ko&excludedOriginalLanguage%5B%5D=zh&excludedTags%5B%5D=5920b825-4181-4a17-beeb-9918b0ff7a30&excludedTags%5B%5D=b13b2a48-c720-44a9-9c77-39c9979373fb";

//b13b2a48-c720-44a9-9c77-39c9979373fb

const showMoreLatest = "limit=100&order%5BlatestUploadedChapter%5D=desc";

export {
  searchLink1,
  searchLink2,
  coverLink1,
  coverLink2,
  idLink,
  chLink,
  imgLink,
  top50,
  latestUpdates,
  showMoreTop50,
  showMoreLatest,
};

//

//&excludedTags%5B%5D=5920b825-4181-4a17-beeb-9918b0ff7a30&excludedTags%5B%5D=3fa85f64-5717-4562-b3fc-2c963f66afa6
