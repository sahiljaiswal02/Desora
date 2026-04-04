import fs from "fs";
import path from "path";
import https from "https";

const topics = [
  "React performance tips",
  "Why TypeScript matters",
  "CSS Grid vs Flexbox",
];

const topic = topics[Math.floor(Math.random() * topics.length)];

// 1. Generate with Gemini
const geminiRes = await fetch(
  `https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent?key=${process.env.GEMINI_API_KEY}`,
  {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contents: [
        {
          parts: [
            {
              text: `Write a blog post about: "${topic}".
Return JSON with keys: title, slug, excerpt, category (one of: DESIGN, DEVELOPMENT, STRATEGY, TECHNOLOGY), content (markdown).
Keep content around 500 words. Return ONLY the JSON, no extra text, no markdown fences.`,
            },
          ],
        },
      ],
      generationConfig: { temperature: 0.8 },
    }),
  },
);

const geminiData = await geminiRes.json();

if (!geminiData.candidates) {
  console.error("Gemini error:", JSON.stringify(geminiData, null, 2));
  process.exit(1);
}

const rawText = geminiData.candidates[0].content.parts[0].text;
const cleaned = rawText.replace(/```json|```/g, "").trim();
const post = JSON.parse(cleaned);

// 2. Get Unsplash image URL (no download, just resolve the redirect URL)
// 2. Get Unsplash image URL with fallbacks
const keywords = encodeURIComponent(topic);

const unsplashAttempts = [
  `https://source.unsplash.com/800x400/?${keywords}`,
  `https://source.unsplash.com/800x400/?technology,computer`,
  `https://source.unsplash.com/800x400/?business,work`,
];

const FINAL_FALLBACK =
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=400&fit=crop";

async function resolveUnsplashUrl(url) {
  return new Promise((resolve) => {
    https
      .get(url, (res) => {
        if (
          (res.statusCode === 301 || res.statusCode === 302) &&
          res.headers.location
        ) {
          const clean = res.headers.location.split("?")[0];
          // Make sure it's a real image URL not empty
          if (clean && clean.startsWith("https://images.unsplash.com")) {
            resolve(clean);
          } else {
            resolve(null);
          }
        } else if (res.statusCode === 200) {
          resolve(url);
        } else {
          resolve(null);
        }
      })
      .on("error", () => resolve(null));
  });
}

let resolvedImageUrl = null;

// Try each Unsplash URL one by one
for (const attempt of unsplashAttempts) {
  resolvedImageUrl = await resolveUnsplashUrl(attempt);
  if (resolvedImageUrl) {
    console.log(`🖼  Image resolved: ${resolvedImageUrl}`);
    break;
  }
  console.log(`⚠️  Failed: ${attempt}, trying next...`);
}

// If everything fails, use hardcoded fallback
if (!resolvedImageUrl) {
  resolvedImageUrl = FINAL_FALLBACK;
  console.log(`⚠️  Using final fallback image`);
}

// 3. Update blogs.json
const jsonPath = "src/data/blogs.json";
fs.mkdirSync("src/data", { recursive: true });

const existing = fs.existsSync(jsonPath)
  ? JSON.parse(fs.readFileSync(jsonPath, "utf-8"))
  : [];

const newEntry = {
  title: post.title,
  slug: post.slug,
  excerpt: post.excerpt,
  category: post.category,
  date: new Date().toISOString().split("T")[0],
  image: resolvedImageUrl, // 👈 direct Unsplash URL, no local file
  content: post.content,
};

// Add new post at the top, keep latest 10
const updated = [newEntry, ...existing].slice(0, 10);
fs.writeFileSync(jsonPath, JSON.stringify(updated, null, 2));

console.log(`✅ Generated: ${post.title}`);
console.log(`🖼  Image: ${resolvedImageUrl}`);
