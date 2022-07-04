const search1 = "https://api.mangadex.org/manga?";
const search2 =
  "&includedTagsMode=AND&excludedTagsMode=OR&contentRating%5B%5D=safe&excludedOriginalLanguage%5B%5D=ko&excludedOriginalLanguage%5B%5D=zh&contentRating%5B%5D=suggestive&includes%5B%5D=manga&includes%5B%5D=chapter&includes%5B%5D=cover_art&includes%5B%5D=tag&includes%5B%5D=user&excludedTags%5B%5D=5920b825-4181-4a17-beeb-9918b0ff7a30&excludedTags%5B%5D=b13b2a48-c720-44a9-9c77-39c9979373fb&order%5Brating%5D=desc&limit=12";

//manga  to get the info to display on site
const getId = "https://api.mangadex.org/manga/";
const getId2 =
  "?includes%5B%5D=author&includes%5B%5D=artist&includes%5B%5D=cover_art";

//fetching chapters with the  below
const ch = "https://api.mangadex.org/manga/";

//fetching chapter images
const img = "https://api.mangadex.org/at-home/server/";

const topRated =
  "https://api.mangadex.org/manga?includedTagsMode=AND&excludedTagsMode=OR&contentRating%5B%5D=safe&limit=12&contentRating%5B%5D=suggestive&order%5Brating%5D=desc&includes%5B%5D=manga&includes%5B%5D=cover_art&excludedOriginalLanguage%5B%5D=ko&excludedTags%5B%5D=5920b825-4181-4a17-beeb-9918b0ff7a30&excludedTags%5B%5D=b13b2a48-c720-44a9-9c77-39c9979373fb";

const showMoreTopRated = "order%5Brating%5D=desc";

const recentUpdates =
  "https://api.mangadex.org/manga?includedTagsMode=AND&excludedTagsMode=OR&contentRating%5B%5D=safe&contentRating%5B%5D=suggestive&limit=12&order%5BlatestUploadedChapter%5D=desc&includes%5B%5D=manga&includes%5B%5D=cover_art&excludedOriginalLanguage%5B%5D=ko&excludedOriginalLanguage%5B%5D=zh&excludedTags%5B%5D=5920b825-4181-4a17-beeb-9918b0ff7a30&excludedTags%5B%5D=b13b2a48-c720-44a9-9c77-39c9979373fb";

const showMoreRecentUpdates = "order%5BlatestUploadedChapter%5D=desc";

export {
  search1,
  search2,
  getId,
  ch,
  img,
  topRated,
  recentUpdates,
  showMoreTopRated,
  showMoreRecentUpdates,
  getId2,
};
