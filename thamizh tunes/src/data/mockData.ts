import { Song, Hero } from '../types';

export const heroes: Hero[] = [
  {
    id: '1',
    name: 'Thalapathy Vijay',
    image: 'https://images.pexels.com/photos/1670977/pexels-photo-1670977.jpeg?auto=compress&cs=tinysrgb&w=300',
    song_count: 25
  },
  {
    id: '2',
    name: 'Thala Ajith',
    image: 'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=300',
    song_count: 22
  },
  {
    id: '3',
    name: 'Suriya',
    image: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=300',
    song_count: 18
  },
  {
    id: '4',
    name: 'Vikram',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300',
    song_count: 15
  },
  {
    id: '5',
    name: 'Dhanush',
    image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=300',
    song_count: 20
  },
  {
    id: '6',
    name: 'Karthi',
    image: 'https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=300',
    song_count: 12
  }
];

export const songs: Song[] = [
  {
    id: '1',
    title: 'Vaathi Coming',
    artist: 'Anirudh Ravichander',
    hero: 'Thalapathy Vijay',
    album: 'Master',
    duration: 234,
    audio_url: '/audio/sample.mp3',
    cover_image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=300',
    genre: 'Mass',
    year: 2021
  },
  {
    id: '2',
    title: 'Kutti Story',
    artist: 'Anirudh Ravichander',
    hero: 'Thalapathy Vijay',
    album: 'Master',
    duration: 198,
    audio_url: '/audio/sample.mp3',
    cover_image: 'https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg?auto=compress&cs=tinysrgb&w=300',
    genre: 'Kuthu',
    year: 2021
  },
  {
    id: '3',
    title: 'Thala Deepavali',
    artist: 'Yuvan Shankar Raja',
    hero: 'Thala Ajith',
    album: 'Valimai',
    duration: 267,
    audio_url: '/audio/sample.mp3',
    cover_image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=300',
    genre: 'Celebration',
    year: 2022
  },
  {
    id: '4',
    title: 'Naanga Vera Maari',
    artist: 'Yuvan Shankar Raja',
    hero: 'Thala Ajith',
    album: 'Valimai',
    duration: 245,
    audio_url: '/audio/sample.mp3',
    cover_image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=300',
    genre: 'Mass',
    year: 2022
  },
  {
    id: '5',
    title: 'Kaadhal Anukkal',
    artist: 'Harris Jayaraj',
    hero: 'Suriya',
    album: 'Enthiran',
    duration: 289,
    audio_url: '/audio/sample.mp3',
    cover_image: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=300',
    genre: 'Romantic',
    year: 2020
  },
  {
    id: '6',
    title: 'Pathala Pathala',
    artist: 'Anirudh Ravichander',
    hero: 'Vikram',
    album: 'Vikram',
    duration: 211,
    audio_url: '/audio/sample.mp3',
    cover_image: 'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=300',
    genre: 'Action',
    year: 2022
  }
];