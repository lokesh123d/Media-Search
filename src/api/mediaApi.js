import axios from "axios";
const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY;
const PEXELS_KEY = import.meta.env.VITE_PEXELS_KEY;
const TENOR_KEY = import.meta.env.VITE_TENOR_KEY;

export async function fetchPhotos(query, page = 1, per_page = 20) {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    params: { query, page, per_page },
    headers: { Authorization: `Client-ID ${UNSPLASH_KEY}` },
  });

  let data = response.data.results.map((val) => ({
    id: val.id,
    title: val.alt_description,
    thumbnil: val.urls.thumb,
    src: val.urls.full,
    type:'photo'
  }));
  return data;
}
export async function fetchVideos(query, per_page = 15) {
  const response = await axios.get("https://api.pexels.com/videos/search", {
    params: { query, per_page },
    headers: { Authorization: PEXELS_KEY },
  });

  let data = response.data.videos.map((val) => ({
    id: val.id,
    title: val.user.name,
    thumbnil: val.image,
    src: val.video_files[0].link,
    type:'video'
  }));
  return data;
}

export async function fetchGIF(query, limit = 20) {
  const response = await axios.get("https://tenor.googleapis.com/v2/search", {
    params: { q: query, key: TENOR_KEY, limit },
  });
  let data = response.data.results.map((val) => ({
    id: val.id,
    title: val.content_description,
    thumbnil: val.media_formats.gifpreview.url,
    src: val.media_formats.gif.url,
    type:'gif'
  }));
  return data;
}
