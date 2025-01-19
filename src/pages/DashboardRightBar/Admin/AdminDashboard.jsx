import { FaDatabase, FaDollarSign, FaFemale, FaMale } from "react-icons/fa";
import { MdWorkspacePremium } from "react-icons/md";
import LoadingSpinner from "../../../shared/LoadingSpinner";
import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../../hooks/UseAxiosSecure";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const AdminDashboard = () => {
  const axiosSecure = UseAxiosSecure();
  // fetch stat data from server.
  const { data: statData, isLoading } = useQuery({
    queryKey: ["admin-stat"],
    queryFn: async () => {
      const { data } = await axiosSecure("/admin-stat");
      return data;
    },
  });
  if (isLoading) return <LoadingSpinner></LoadingSpinner>;
  const {
    totalBioData,
    totalPremium,
    totalMaleBio,
    totalFemaleBio,
    totalRevenue,
  } = statData || {};

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  const pieChartData = [
    { name: "Total Biodata", value: totalBioData },
    { name: "Premium Biodata", value: totalPremium },
    { name: "Male Biodata", value: totalMaleBio },
    { name: "Female Biodata", value: totalFemaleBio },
    { name: "Total Revenue", value: totalRevenue },
  ];

  return (
    <div>
      <div className="mt-12">
        <div className="mb-12 flex flex-col-reverse justify-center items-center md:flex-row">
          <div className="w-full md:w-1/2 flex flex-col gap-10">
            <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
              <div className="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center from-orange-600 to-orange-400 text-white shadow-orange-500/40">
                <FaDatabase className="w-6 h-6 text-white" />
              </div>
              <div className="p-4 text-right">
                <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">
                  Total Biodata Count
                </p>
                <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
                  {totalBioData}
                </h4>
              </div>
            </div>

            <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
              <div
                className={`bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center from-red-600 to-green-400 text-white shadow-green-500/40`}
              >
                <MdWorkspacePremium className="w-6 h-6 text-white" />
              </div>
              <div className="p-4 text-right">
                <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">
                  Premium Biodata Count
                </p>
                <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
                  {totalPremium}
                </h4>
              </div>
            </div>

            <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
              <div
                className={`bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center from-blue-600 to-blue-400 text-white shadow-blue-500/40`}
              >
                <FaMale className="w-6 h-6 text-white" />
              </div>
              <div className="p-4 text-right">
                <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">
                  Male Biodata Count
                </p>
                <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
                  {totalMaleBio}
                </h4>
              </div>
            </div>

            <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
              <div
                className={`bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center from-red-600 to-gray-700 text-white shadow-pink-500/40`}
              >
                <FaFemale className="w-6 h-6 text-white" />
              </div>
              <div className="p-4 text-right">
                <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">
                  Female Biodata Count
                </p>
                <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
                  {totalFemaleBio}
                </h4>
              </div>
            </div>

            <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
              <div
                className={`bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center from-gray-600 to-blue-400 text-white shadow-green-500/40`}
              >
                <FaDollarSign className="w-6 h-6 text-white" />
              </div>
              <div className="p-4 text-right">
                <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">
                  Total Revenue
                </p>
                <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
                  $ {totalRevenue}
                </h4>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <PieChart
              width={300}
              height={300}
              className="md:w-[400px] md:h-[400px]"
            >
              <Pie
                data={pieChartData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={120} // Adjust based on screen size
                fill="#8884d8"
                dataKey="value"
              >
                {pieChartData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
