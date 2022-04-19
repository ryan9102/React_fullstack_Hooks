import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useHttpClient } from "../../shared/hooks/http-hook";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import PlaceList from "../components/PlaceList";

export default function UserPlaces() {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [loadedUserPlaces, setLoadedUserPlaces] = useState();
  const userId = useParams().userId;

  useEffect(() => {
    const fetchUserPlaces = async () => {
      try {
        const responseData = await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}/places/user/${userId}`
        );
        setLoadedUserPlaces(responseData.places);
      } catch (err) {}
    };
    fetchUserPlaces();
  }, [sendRequest, userId]);

  const placeDeletedHandler = (deletedPlaceId) => {
    setLoadedUserPlaces((prev) =>
      prev.filter((place) => place.id !== deletedPlaceId)
    );
  };

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && loadedUserPlaces && (
        <PlaceList
          items={loadedUserPlaces}
          onDeletePlace={placeDeletedHandler}
        />
      )}
    </React.Fragment>
  );
}
