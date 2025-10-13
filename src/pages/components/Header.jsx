export default function Header() {
  return (
    <header className="bg-white shadow p-4 flex items-center justify-between">
      <h1 className="text-xl font-semibold text-gray-800">SSMS Dashboard</h1>
      <div className="flex items-center gap-4">
        <button className="bg-[#2563EB] text-white px-3 py-1 rounded-md hover:bg-[#1D4ED8] transition">
          Share
        </button>
        <div className="bg-gray-400 text-white w-8 h-8 rounded-full flex items-center justify-center">
          U
        </div>
      </div>
    </header>
  );
}
