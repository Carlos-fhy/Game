import { GoogleGenAI, Type } from "@google/genai";
import { BehaviorCard, RiskLevel } from "../types";

// Helper to get the AI instance.
// Using a function to ensure we capture the latest process.env.API_KEY if it changes (though usually static)
const getAI = () => new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getExplanation = async (card: BehaviorCard): Promise<{ explanation: string; scientific: string }> => {
  try {
    const ai = getAI();
    const prompt = `
      解释为什么"${card.content}"这种行为被归类为"${card.correctLevel === RiskLevel.High ? '高风险' : card.correctLevel === RiskLevel.Low ? '低风险' : '安全'}"。
      
      请提供两个部分的回答：
      1. 通俗解释：适合大众理解的原因（一句话）。
      2. 科学原理：关于艾滋病病毒传播途径（血液、体液、母婴）的具体机制（50字以内）。
    `;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            explanation: { type: Type.STRING },
            scientific: { type: Type.STRING },
          },
        },
      },
    });

    if (response.text) {
      return JSON.parse(response.text);
    }
    throw new Error("No response");
  } catch (error) {
    console.error("Gemini Error:", error);
    return {
      explanation: "无法连接到AI导师，请参考标准卫生指南。",
      scientific: "暂无数据。"
    };
  }
};
