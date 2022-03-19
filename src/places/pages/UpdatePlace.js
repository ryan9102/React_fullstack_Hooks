import React from "react";
import { useParams } from "react-router-dom";
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/util/validators";
import "./PlaceForm.css";

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

export default function UpdatePlace() {
  
  const placeId = useParams().placeId;
  const identifiedPlace = DUMMY_PLACES.find((p) => p.id === placeId);
  if (!identifiedPlace) {
    return (
      <div className="center">
        <h2>Could not find place!</h2>
      </div>
    );
  }

  return (
    <form className="place-form">
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title."
        onInput={() => {}}
        value={identifiedPlace.title}
        valid={true}
      />
       <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid description(min. 5 characters)."
        onInput={() => {}}
        value={identifiedPlace.description}
        valid={true}
      />
         <Button type="submit" disabled={true}>
        UPDATE PLACE
      </Button>
    </form>
  );
}
