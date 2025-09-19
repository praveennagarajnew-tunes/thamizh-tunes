export interface User {
  id: string;
  email: string;
  name: string;
  subscription_type: 'free' | 'premium';
  created_at: string;
}

export interface Song {
  id: string;
  title: string;
  artist: string;
  hero: string;
  album?: string;
  duration: number;
  audio_url: string;
  cover_image: string;
  genre: string;
  year?: number;
  lyrics?: string;
}

export interface Playlist {
  id: string;
  name: string;
  user_id: string;
  songs: Song[];
  cover_image?: string;
  created_at: string;
}

export interface Hero {
  id: string;
  name: string;
  image: string;
  song_count: number;
}