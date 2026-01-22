import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const generateSupportResponse = async (userMessage: string) => {
  if (!apiKey) {
    console.error("API Key not found");
    return "I'm sorry, I cannot connect to the support server right now.";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-preview',
      contents: userMessage,
      config: {
        thinkingConfig: { thinkingBudget: 32768 },
        systemInstruction: "You are a helpful customer support agent for UMONEY, a financial tracking app. Keep your answers concise, professional, and friendly. Help users with deposits, withdrawals, and team management questions."
      }
    });
    
    return response.text || "I didn't understand that.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I am currently experiencing high traffic. Please try again later.";
  }
};