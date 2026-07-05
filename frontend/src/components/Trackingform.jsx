import { Search } from "lucide-react";

const TrackingForm = () => {
  return (
    <div className="max-w-xl mx-auto -mt-6 px-6">

      <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-8">

        <label className="block text-sm font-semibold text-slate-700 mb-3">
          Enter your 10-digit PNR
        </label>

        <input
          type="text"
          maxLength={10}
          placeholder="e.g. 1234567890"
          className="w-full rounded-xl border border-slate-300 px-4 py-4 outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <button
          className="mt-6 w-full bg-indigo-600 hover:bg-indigo-700 transition text-white font-semibold py-4 rounded-xl flex justify-center items-center gap-2"
        >
          <Search size={20} />
          Check Status
        </button>

      </div>

    </div>
  );
};

export default TrackingForm;