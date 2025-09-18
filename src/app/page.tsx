"use client";
import { useState } from "react";
import { districtss, regions } from "./Store/location-data";
import { User, MapPin, FileSignature } from "lucide-react";

export default function Home() {
  const [value, setValue] = useState("");

  const result = Object.entries(districtss).map(([region, arr]) => ({
    region,
    districts: arr,
  }));
  const data = result.filter((el) => el.region == value);
  const districk = data.find((el) => el.districts.find((el) => el));
  const viloyatlar = districk?.districts;

  return (
    <div className="relative h-screen flex items-center justify-center bg-gradient-to-br from-blue-400 via-blue-300 to-blue-100">
      <div className="absolute inset-0 backdrop-blur-md bg-white/30"></div>

      <div className="relative w-full max-w-md bg-white/60 rounded-3xl shadow-2xl p-8 space-y-6 border border-white/40 backdrop-blur-xl">
        <h1 className="text-3xl font-extrabold text-blue-700 text-center drop-shadow">
          Ro‘yxatdan o‘tish
        </h1>

        <div className="flex flex-col space-y-4">
          <div className="flex items-center border border-gray-200 rounded-xl px-3 py-2 bg-white/70 focus-within:ring-2 focus-within:ring-blue-400 transition">
            <User className="w-5 h-5 text-blue-500 mr-2" />
            <input
              type="text"
              placeholder="Ism"
              className="w-full bg-transparent outline-none placeholder-gray-500"
            />
          </div>

          <div className="flex items-center border border-gray-200 rounded-xl px-3 py-2 bg-white/70 focus-within:ring-2 focus-within:ring-blue-400 transition">
            <FileSignature className="w-5 h-5 text-blue-500 mr-2" />
            <input
              type="text"
              placeholder="Familiya"
              className="w-full bg-transparent outline-none placeholder-gray-500"
            />
          </div>

          <div className="flex items-center border border-gray-200 rounded-xl px-3 py-2 bg-white/70 focus-within:ring-2 focus-within:ring-blue-400 transition">
            <MapPin className="w-5 h-5 text-blue-500 mr-2" />
            <select
              onChange={(e) => setValue(e.target.value)}
              className="w-full bg-transparent outline-none"
            >
              <option value="">Viloyat tanlang</option>
              {regions.map((el, i) => (
                <option key={i} value={el.value}>
                  {el.label}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center border border-gray-200 rounded-xl px-3 py-2 bg-white/70 focus-within:ring-2 focus-within:ring-blue-400 transition">
            <MapPin className="w-5 h-5 text-blue-500 mr-2" />
            <select className="w-full bg-transparent outline-none">
              <option value="">Tuman tanlang</option>
              {viloyatlar?.map((el, i) => (
                <option key={i} value={el.value}>
                  {el.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-3 rounded-xl shadow-lg transition transform hover:scale-[1.02] active:scale-[0.98]">
          Ro‘yxatdan o‘tish
        </button>
      </div>
    </div>
  );
}
