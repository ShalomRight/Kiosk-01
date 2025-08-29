export enum SlideType {
  Image = 'image',
  Video = 'video',
  Poll = 'poll',
  PhotoContest = 'photo_contest',
  Trivia = 'trivia',
  Map = 'map',
  Mapbox = 'mapbox',
  EventHighlight = 'event_highlight',
  VendorSpotlight = 'vendor_spotlight',
  Leaderboard = 'leaderboard',
  SocialFeed = 'social_feed',
}

export enum LayoutMode {
    Fullscreen = 'fullscreen',
    MidScreen = 'midscreen',
}

export interface BaseSlide {
  id: string;
  type: SlideType;
  duration: number; // in milliseconds
  qrCodeUrl: string;
  qrCodeText: string;
}

export interface ImageSlideData extends BaseSlide {
  type: SlideType.Image;
  imageUrl: string;
  caption?: string;
  title: string;
}

export interface VideoSlideData extends BaseSlide {
  type: SlideType.Video;
  videoUrl: string;
  title: string;
}

export interface PollOption {
  id: string;
  text: string;
  votes: number;
}

export interface PollSlideData extends BaseSlide {
  type: SlideType.Poll;
  question: string;
  subtitle?: string;
  imageUrl: string;
  options: PollOption[];
}

export interface PhotoContestSlideData extends BaseSlide {
  type: SlideType.PhotoContest;
  title: string;
  submissions: { imageUrl: string; author: string }[];
}

export interface TriviaSlideData extends BaseSlide {
  type: SlideType.Trivia;
  question: string;
  options: string[];
  correctAnswerIndex: number;
  funFact: string;
}

export interface MapSlideData extends BaseSlide {
  type: SlideType.Map;
  mapUrl: string;
  title: string;
  highlightArea: string;
}

export interface MapboxSlideData extends BaseSlide {
  type: SlideType.Mapbox;
  title: string;
  description: string;
  buttonText?: string;
  longitude: number;
  latitude: number;
  zoom: number;
}

export interface EventHighlightSlideData extends BaseSlide {
  type: SlideType.EventHighlight;
  title: string;
  date: string;
  imageUrl: string;
  status: 'Now Live' | 'Upcoming';
}

export interface VendorSpotlightSlideData extends BaseSlide {
  type: SlideType.VendorSpotlight;
  vendorName: string;
  logoUrl: string;
  bannerUrl: string;
  tagline: string;
}

export interface LeaderboardEntry {
  rank: number;
  name: string;
  score: number;
  avatarUrl: string;
}

export interface LeaderboardSlideData extends BaseSlide {
  type: SlideType.Leaderboard;
  title: string;
  entries: LeaderboardEntry[];
}

export interface SocialPost {
    id: string;
    author: string;
    avatarUrl: string;
    text: string;
    imageUrl?: string;
    likes: number;
}

export interface SocialFeedSlideData extends BaseSlide {
  type: SlideType.SocialFeed;
  title: string;
  posts: SocialPost[];
}

export type SlideData =
  | ImageSlideData
  | VideoSlideData
  | PollSlideData
  | PhotoContestSlideData
  | TriviaSlideData
  | MapSlideData
  | MapboxSlideData
  | EventHighlightSlideData
  | VendorSpotlightSlideData
  | LeaderboardSlideData
  | SocialFeedSlideData;