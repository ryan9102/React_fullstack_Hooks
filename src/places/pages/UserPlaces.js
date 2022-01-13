import React from "react";
import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire State Building",
    description: "One of the most famous sky scraper in the world!",
    imageUrl:
      "https://a.cdn-hotels.com/gdcs/production176/d304/45e7e95a-6f5d-4f19-9479-1d3ddfee7e99.jpg?impolicy=fcrop&w=1600&h=1066&q=medium",
    address: "20 W 34th St, New York, NY 10001",
    location: {
      lat: 40.7484445,
      lng: -73.9878531,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Belconnen Skate Park",
    description: "Fantastic skatepark, good for beginners and skilled.",
    imageUrl: "https://convic.com/wp-content/uploads/2016/05/1-6-842x545.jpg",
    address: "Altitude, 77 Emu Bank, Belconnen ACT 2617",
    location: {
      lat: -35.239235,
      lng: 149.0723921,
    },
    creator: "u2",
  },
];

export default function UserPlaces() {
  return <PlaceList items={DUMMY_PLACES} />;
}
