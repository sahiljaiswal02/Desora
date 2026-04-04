import fs from "fs";
import path from "path";
import https from "https";

const topics = [
  "React performance tips",
  "Why TypeScript matters",
  "CSS Grid vs Flexbox",
  // Add your own topics here
];

const topic = topics[Math.floor(Math.random() * topics.length)];

// 1. Generate blog content with Gemini (free tier)
const geminiRes = await fetch(
  `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
  {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contents: [
        {
          parts: [
            {
              text: `Write a blog post about: "${topic}".
Return JSON with keys: title, slug, excerpt, content (markdown).
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
const rawText = geminiData.candidates[0].content.parts[0].text;

// Strip any accidental markdown fences Gemini sometimes adds
const cleaned = rawText.replace(/```json|```/g, "").trim();
const post = JSON.parse(cleaned);

// 2. Generate doodle image using Pollinations (free, no key needed)
const imagePrompt = `simple cute doodle illustration about ${topic}, minimal line art, white background`;
const imageUrl = `https://image.pollinations.ai/prompt/${encodeURIComponent(imagePrompt)}?width=800&height=400&nologo=true`;
const imagePath = path.join("public/blog-images", `${post.slug}.png`);

await new Promise((resolve, reject) => {
  const file = fs.createWriteStream(imagePath);
  https
    .get(imageUrl, (res) => {
      res.pipe(file);
      file.on("finish", resolve);
    })
    .on("error", reject);
});

// 3. Write the MDX file
const mdxContent = `---
title: "${post.title}"
date: "${new Date().toISOString().split("T")[0]}"
image: "/blog-images/${post.slug}.png"
excerpt: "${post.excerpt}"
---

${post.content}
`;

fs.writeFileSync(path.join("content/blog", `${post.slug}.mdx`), mdxContent);
console.log(`✅ Generated: ${post.title}`);
