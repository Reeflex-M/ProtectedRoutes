import { useState } from "react";
type UserData = {
  email: string;
  password: string;
}

export const Home = () => {
  const [userData, setUserData] = useState<UserData>({
    email: "",
    password: "",
  });
  return (
    <div className="">

      <label htmlFor="text">
        Email:
        <input type="text" id="text" placeholder="email"
          value={userData.email}
          onChange={(e) => setUserData({
            email: e.target.value,
            password: userData.password
          })} />
      </label>

      <label htmlFor="password">
        Mot de passe:
        <input type="password" id="password" placeholder="mot de passe"
          value={userData.password}
          onChange={(e) => setUserData({
            email: userData.email,
            password: e.target.value
          })} />
      </label>

      <button type="submit">Se connecter</button>
    </div>
  )
};