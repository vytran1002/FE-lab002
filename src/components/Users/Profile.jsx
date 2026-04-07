import { useState } from "react";
import reactLogo from "../../assets/react.svg";

function Profile() {
  const [profile, setProfile] = useState({ ten: "", tuoi: "" });
  const handleClick = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  return (
    <div>
      <h1 className="name">Profile</h1>
      <img src={reactLogo} alt="React Logo" />
      <h1>Nhập Profile:</h1>
      <input
        onChange={handleClick}
        name="ten"
        value={profile.ten}
        type="text"
        placeholder="Tên bạn là:"
      />
      <input
        onChange={handleClick}
        name="tuoi"
        value={profile.tuoi}
        type="text"
        placeholder="Tuổi bạn là:"
      />
      <p>
        Tên: {profile.ten} <br />
        Tuổi: {profile.tuoi}
      </p>
    </div>
  );
}

export default Profile;
