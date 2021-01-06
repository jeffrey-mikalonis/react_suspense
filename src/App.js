/*
 * There are 3 key problems with the React code below. Can you find them?
 * Assume fetchUserProfile exists elsewhere.
 */
import { Suspense, useState, useEffect } from "react";
import React from "react";
const UserProfile = React.lazy(() => import("./UserProfile.js"));
const fetchUserProfile = (userId) => {
  return fetch("https://jsonplaceholder.typicode.com/todos");
};

const SuspensefulUserProfile = ({ userId }) => {
  const [data, setData] = useState({});
  useEffect(() => {
    fetchUserProfile(userId).then((profile) =>
      setData({ name: "sdfsdfsdf", email: "sdfsdf@wer.com" })
    );
  }, [userId]);
  return (
    <Suspense fallback={<p style={{ color: "red" }}>Loadking</p>}>
      <UserProfile data={data} />
    </Suspense>
  );
};

const UserProfileList = () => (
  <>
    <SuspensefulUserProfile userId={1} />
    <SuspensefulUserProfile userId={2} />
    <SuspensefulUserProfile userId={3} />
  </>
);

export default UserProfileList;
