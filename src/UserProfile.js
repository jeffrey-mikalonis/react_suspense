const UserProfile = ({ data }) => {
  return (
    <>
      <h1 style={{ color: "green" }}>{data.name}</h1>
      <h2 style={{ color: "blue" }}>{data.email}</h2>
    </>
  );
};

export default UserProfile;
