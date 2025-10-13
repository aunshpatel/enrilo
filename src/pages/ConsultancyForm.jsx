// src/pages/ConsultancyForm.jsx
export default function ConsultancyForm() {
  return (
    <div className="p-4">
      <div className="bg-white rounded-2xl shadow p-6 max-w-5xl mx-auto">
        <button className="bg-[#FACC15] text-gray-900 font-semibold px-5 py-2 rounded-md mb-6 hover:bg-[#EAB308] transition">
          Add New Consultancy
        </button>

        {/* Logo Upload Area */}
        <div className="flex flex-col items-center border-dashed border-2 border-gray-300 rounded-lg p-8 mb-8">
          <div className="text-gray-400 text-3xl mb-2">🖼️</div>
          <p className="text-sm text-gray-600">Click Here To Add Logo</p>
        </div>

        {/* Form Inputs */}
        <form className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input type="text" placeholder="Consultancy Name" className="input" />
          <input type="text" placeholder="GST Number" className="input" />
          <input type="text" placeholder="Website" className="input" />

          <input type="text" placeholder="LinkedIn" className="input" />
          <input type="text" placeholder="Facebook" className="input" />
          <input type="text" placeholder="Instagram" className="input" />

          <input type="text" placeholder="Office City" className="input" />
          <input type="text" placeholder="Office Address" className="input" />
          <select className="input">
            <option>Head Office</option>
            <option>Branch</option>
            <option>Franchise</option>
          </select>
        </form>

        <div className="mt-8 flex justify-center">
          <button className="bg-[#1E293B] text-white px-8 py-2 rounded-md hover:bg-[#334155] transition">
            Save Details
          </button>
        </div>
      </div>
    </div>
  );
}