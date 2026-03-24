export type ShortMeta = {
  id: string;
  creator: string;
  title: string;
  likes: string;
  comments: string;
  shares: string;
};

export interface FastPixPlayerElement extends HTMLElement {
  video?: HTMLVideoElement;
  play?: () => Promise<void> | void;
  pause?: () => void;
  mute?: () => void;
  unmute?: () => void;
  setSubtitleTrack?: (track: string | number | null) => void;
  disableAllSubtitles?: () => void;
  destroy?: () => void;
}

// Demo feed – replace with real API data in your app.
export const SHORTS_FEED: ShortMeta[] = [
  {
    id: "e089311f-e6a5-48fa-ac92-3bbe3fec31eb",
    creator: "telugubeats",
    title: "Ragili Chedipotnunna 🎵",
    likes: "12.4K",
    comments: "342",
    shares: "891",
  },
  {
    id: "2125094c-db43-4748-90e1-18539f2ccf98",
    creator: "tollywood_edits",
    title: "Mahaan Beats 🔥 | Best Telugu BGM",
    likes: "8.7K",
    comments: "201",
    shares: "543",
  },
  {
    id: "e1f32b9b-ac57-4582-a7c5-90aa6f96baac",
    creator: "prima_music",
    title: "Telugu Prima 🎶 | Feel the vibe",
    likes: "21K",
    comments: "987",
    shares: "2.1K",
  },
  {
    id: "c655164e-2f08-47d5-a3eb-4e3bf2d444df",
    creator: "helu_tunes",
    title: "Helu Vibes 💫 | Trending Now",
    likes: "5.3K",
    comments: "118",
    shares: "310",
  },
 
];

