"use client";

import { useState } from "react";

const Feedback = () => {
  const [name, setName] = useState("");
  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState<number | null>(null);
  const [feedbackList, setFeedbackList] = useState<{ name: string; feedback: string; rating: number }[]>([
    { name: "Bagas", feedback: "Sangat membantu dalam meningkatkan win rate saya!", rating: 5 },
    { name: "Ahmad", feedback: "Kalkulator ini sederhana dan mudah digunakan.", rating: 4 },
    { name: "Asa", feedback: "Saya suka desainnya yang bersih.", rating: 4 },
    { name: "Mayjon", feedback: "Bermanfaat untuk pemain baru seperti saya.", rating: 5 },
    { name: "Andree", feedback: "Sangat bermanfaat, terima kasih!", rating: 5 },
    { name: "Arkhan", feedback: "Hasil perhitungan akurat dan cepat.", rating: 4 },
    { name: "Dani", feedback: "Bagus sekali, saya merekomendasikan ini kepada teman-teman.", rating: 5 },
    { name: "Rafli", feedback: "Saya berharap ada lebih banyak fitur.", rating: 3 },
    { name: "Irul", feedback: "User interface yang ramah pengguna.", rating: 4 },
    { name: "Putri", feedback: "Kalkulator ini membuat saya bisa mencapai target yang sesuai.", rating: 5 },
  ]);

  const handleFeedbackSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (feedback.trim() !== "" && name.trim() !== "" && rating !== null) {
      setFeedbackList((prevList) => [{ name, feedback, rating }, ...prevList]);
      setFeedback(""); // Clear the input field
      setName(""); // Clear the name field
      setRating(null); // Reset the rating
    }
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-gray-800 text-white rounded-lg shadow-lg mt-2">
      <h1 className="text-2xl font-bold mb-4">Berikan Feedback</h1>
      <form onSubmit={handleFeedbackSubmit} className="mb-4">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 rounded-lg bg-gray-700 text-white mb-4"
          placeholder="Nama Anda"
          required
        />
        <textarea
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          className="w-full p-2 rounded-lg bg-gray-700 text-white"
          placeholder="Tulis feedback Anda di sini..."
          rows={4}
          required
        />
        <div className="my-4">
          <p className="mb-2">Rating:</p>
          <div className="flex space-x-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                onClick={() => setRating(star)}
                xmlns="http://www.w3.org/2000/svg"
                className={`w-6 h-6 cursor-pointer ${rating && star <= rating ? 'text-yellow-400' : 'text-gray-500'}`}
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 .587l3.668 7.568 8.245 1.199-5.964 5.084 1.573 8.172L12 18.896l-7.522 3.998 1.573-8.172-5.964-5.084 8.245-1.199z" />
              </svg>
            ))}
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-yellow-400 text-gray-800 p-3 rounded-lg font-semibold hover:bg-yellow-500 transition"
        >
          Kirim
        </button>
      </form>

      <h2 className="text-xl font-bold mb-2">Feedback dari Pengguna</h2>
      <div className="bg-gray-700 p-4 rounded-lg max-h-60 overflow-y-auto">
        {feedbackList.map((item, index) => (
          <div key={index} className="border-b border-gray-600 py-2">
            <p className="font-semibold">{item.name} <span className="text-yellow-400">{"★".repeat(item.rating)}{"☆".repeat(5 - item.rating)}</span></p>
            <p>{item.feedback}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feedback;
