import { useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();

  // Dynamic title map
  const titleMap = {
    "/dashboard": "Dashboard",
    "/consultancy": "Add Consultancy",
    "/consultancy/all": "All Consultancies",
    "/consultancy/payments": "All Payment Details",
    "/superadmin/add": "Add Super Admin",
    "/superadmin/all": "All Super Admin",
    "/masteradmin/add": "Add Master Admin",
    "/masteradmin/all": "All Master Admin",
    "/company/profile": "Company Profile",
    "/company/gst": "GST Collection",
    "/settings": "Settings",
    "/signout": "Sign Out",
  };

  const currentTitle = titleMap[location.pathname] || "SSMS Dashboard";

  return (
    <header className="bg-white shadow p-4 flex items-center">
      <h1 className="text-xl font-semibold text-gray-800">{currentTitle}</h1>
      {/* <div className="flex items-center gap-4">
        <button className="bg-[#2563EB] text-white px-3 py-1 rounded-md hover:bg-[#1D4ED8] transition">
          Share
        </button>
        <div className="bg-gray-400 text-white w-8 h-8 rounded-full flex items-center justify-center">
          U
        </div>
      </div> */}
    </header>
  );
}
