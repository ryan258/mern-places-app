// This file will be wired up when we have a backend
import React from 'react'
import { useParams } from 'react-router-dom'

import PlaceList from '../components/PlaceList'

const DUMMY_PLACES = [
  {
    id: 'p1',
    title: 'Empire State Building #1',
    description: 'A really, really tall building.',
    imageUrl: 'https://cdn.cnn.com/cnnnext/dam/assets/130802164459-skyscrapers-gallery---empire-state-building-live-video.jpg',
    address: '20 W 34th St, New York, NY 10001',
    location: {
      lat: 40.7484405,
      lng: -73.9856644
    },
    creator: 'u1'
  },
  {
    id: 'p2',
    title: 'Empire State Building #2',
    description: 'A really, really tall building.',
    imageUrl: 'https://cdn.cnn.com/cnnnext/dam/assets/130802164459-skyscrapers-gallery---empire-state-building-live-video.jpg',
    address: '20 W 34th St, New York, NY 10001',
    location: {
      lat: 40.7484405,
      lng: -73.9856644
    },
    creator: 'u2'
  }
]

const UserPlaces = () => {
  // useParams gives us access to the dynamic segments in a route url in an object
  const userId = useParams().userId
  const loadedPlaces = DUMMY_PLACES.filter((place) => place.creator === userId)

  return (
    <div>
      <h1>pages/UserPlaces</h1>
      <PlaceList items={loadedPlaces} />
    </div>
  )
}

export default UserPlaces
