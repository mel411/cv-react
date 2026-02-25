import { useContext } from "react";
import { ProfileContext } from "../context/ProfileContext";

export default function ProfileInfo({ showEmail = true }) {
  const profile = useContext(ProfileContext);

  return (
    <div>
      <h5 className="mb-3">{profile.name}</h5>

      <p className="mb-1">{profile.addressLine}</p>
      <p className="mb-1">{profile.postalCity}</p>

      <p className="mb-1">Téléphone : {profile.phone}</p>

      {showEmail && <p className="mb-0">{profile.email}</p>}
    </div>
  );
}