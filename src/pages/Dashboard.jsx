import Sidebar from "../components/dashboardComponents/Sidebar";

const Dashboard = () => {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <div className="fixed overflow-y-scroll">
        <Sidebar></Sidebar>
      </div>

      {/* Main Content */}
      <main
        className="flex-1 min-h-screen overflow-y-auto bg-gray-100  p-6"
        style={{ marginLeft: "16rem" }} // Adjust for Sidebar width
      >
        {/* Replace with your dynamic content */}
        <h1 className="text-3xl font-bold text-gray-800  mb-6">
          Dashboard Content
        </h1>
        <p className="text-gray-700 ">
          This is the dashboard main content area. Add your sections, widgets,
          and other content here.
        </p>
      </main>
    </div>
  );
};

export default Dashboard;
