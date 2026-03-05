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
  destroy?: () => void;
}

// Demo feed – replace with real API data in your app.
export const SHORTS_FEED: ShortMeta[] = [
  {
    id: "YOUR_PLAYBACK_ID_VERTICAL_VIDEO_1",
    creator: "CREATOR_NAME_1",
    title: "TITLE_OF_VERTICAL_VIDEO_1",
    likes: "12.4K",
    comments: "342",
    shares: "891",
  },
  {
    id: "YOUR_PLAYBACK_ID_VERTICAL_VIDEO_2",
    creator: "CREATOR_NAME_2",
    title: "TITLE_OF_VERTICAL_VIDEO_2",
    likes: "8.7K",
    comments: "201",
    shares: "543",
  },
  {
    id: "YOUR_PLAYBACK_ID_VERTICAL_VIDEO_3",
    creator: "CREATOR_NAME_3",
    title: "TITLE_OF_VERTICAL_VIDEO_3",
    likes: "21K",
    comments: "987",
    shares: "2.1K",
  },
  {
    id: "YOUR_PLAYBACK_ID_VERTICAL_VIDEO_4",
    creator: "CREATOR_NAME_4",
    title: "TITLE_OF_VERTICAL_VIDEO_4",
    likes: "5.3K",
    comments: "118",
    shares: "310",
  },
];

