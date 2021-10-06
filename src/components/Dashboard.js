import { Redirect } from "react-router-dom";

const Dashboard = () => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Redirect to="/login" />;
  }

  return (
    <div className="container">
      <h1>Dashboard Page</h1>
    </div>
  );
};

export default Dashboard;
