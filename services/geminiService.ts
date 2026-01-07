
import { GoogleGenAI } from "@google/genai";

export const generateRomanticPoem = async () => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: "Write a short, extremely romantic 4-line poem for a 1st wedding anniversary. Use words like 'Jaan', 'eternal', and 'blessing'. Keep it sweet and modern.",
      config: {
        temperature: 0.9,
      }
    });
    return response.text || "You are the beat in my heart and the soul in my breath. Happy Anniversary, my love.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Every moment with you is a treasure. Happy First Anniversary to my beautiful Jaan.";
  }
};
