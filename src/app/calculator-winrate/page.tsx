"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";

const WinRateCalculator = () => {
  const [totalMatches, setTotalMatches] = useState<string>("");
  const [currentWR, setCurrentWR] = useState<string>("");
  const [targetWR, setTargetWR] = useState<string>("");
  const [result, setResult] = useState<number | null>(null);

  const calculateWinRate = (targetWR: number, currentWR: number, totalMatches: number) => {
    const currentWins = (currentWR / 100) * totalMatches;
    const requiredMatches = (targetWR * totalMatches - 100 * currentWins) / (100 - targetWR);
    return requiredMatches > 0 ? Math.ceil(requiredMatches) : 0;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const requiredMatches = calculateWinRate(Number(targetWR), Number(currentWR), Number(totalMatches));
    setResult(requiredMatches);
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-gray-800 text-white rounded-lg shadow-lg mt-7">
      {/* Bagian gambar dan teks */}
      <div className="text-center mb-8">
        <div className="flex justify-center">
          <div className="relative w-[200px] h-[200px]">
            <Image
              src="/logo-fox-kalku.png" // Ganti dengan path gambar yang sesuai
              alt="Logo"
              fill
              objectFit="contain"

            />
          </div>
        </div>
        <h1 className="text-3xl font-bold mb-2">Kalkulator Win Rate</h1>
        <p className="text-gray-300">
          Digunakan untuk menghitung total jumlah pertandingan yang harus diambil untuk mencapai target tingkat kemenangan yang diinginkan.
        </p>
      </div>

      {/* Form Input */}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-1">Total Pertandingan Anda Saat Ini</label>
          <input
            type="number"
            value={totalMatches}
            onChange={(e) => setTotalMatches(e.target.value)}
            className="w-full p-2 rounded-lg bg-gray-700 text-white"
            placeholder="Contoh: 223"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Total Win Rate Anda Saat Ini</label>
          <input
            type="number"
            value={currentWR}
            onChange={(e) => setCurrentWR(e.target.value)}
            className="w-full p-2 rounded-lg bg-gray-700 text-white"
            placeholder="Contoh: 54"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Win Rate Total yang Anda Inginkan</label>
          <input
            type="number"
            value={targetWR}
            onChange={(e) => setTargetWR(e.target.value)}
            className="w-full p-2 rounded-lg bg-gray-700 text-white"
            placeholder="Contoh: 70"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-yellow-400 text-gray-800 p-3 rounded-lg font-semibold hover:bg-yellow-500 transition"
        >
          Hitung
        </button>
      </form>

      {/* Hasil */}
      {result !== null && (
        <div className="mt-4 p-4 bg-gray-700 rounded-lg text-white">
          <p>
            Anda membutuhkan <strong>{result}</strong> pertandingan lagi untuk mencapai win rate yang diinginkan.
          </p>
        </div>
      )}
    </div>
  );
};

export default WinRateCalculator;
