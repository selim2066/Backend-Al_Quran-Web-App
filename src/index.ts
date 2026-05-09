// import express from "express";
// import cors from "cors";
// import surahsRouter from "./routes/surahs";
// import ayahsRouter from "./routes/ayahs";
// import searchRouter from "./routes/search";

// const app = express();
// const PORT = process.env.PORT || 4000;

// app.use(cors({
//   origin: [
//     "http://localhost:3000",
//     "https://your-frontend.vercel.app", // update after deploying
//   ],
// }));
// app.use(express.json());

// app.use("/api/surahs", surahsRouter);
// app.use("/api/ayahs", ayahsRouter);
// app.use("/api/search", searchRouter);

// app.get("/", (_req, res) => {
//   res.json({ status: "ok", message: "Quran API — Node.js + Express" });
// });

// app.listen(PORT, () => {
//   console.log(`✅ Server running on http://localhost:${PORT}`);
// });

// !v2
import cors from "cors";
import express from "express";
import ayahsRouter from "./routes/ayahs";
import searchRouter from "./routes/search";
import surahsRouter from "./routes/surahs";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://frontend-al-quran-web-app.vercel.app/", // update after deploying
    ],
  }),
);
app.use(express.json());

app.use("/api/surahs", surahsRouter);
app.use("/api/ayahs", ayahsRouter);
app.use("/api/search", searchRouter);

app.get("/", (_req, res) => {
  res.json({ status: "ok", message: "Quran API — Node.js + Express" });
});

app.listen(Number(PORT), "0.0.0.0", () => {
  console.log(`Alhamdulillah Server running on http://localhost:${PORT}`);
});
