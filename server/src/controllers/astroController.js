// server/src/controllers/astroController.js
import { GoogleGenAI } from '@google/genai';
import { calculateMulank, calculateBhagyank } from '../utils/numerology.js';
import dotenv from 'dotenv';

dotenv.config();

const ai = new GoogleGenAI({ 
  apiKey: process.env.GEMINI_API_KEY 
});

export const generateKundli = async (req, res) => {
  try {
    // Note: React sends timeOfBirth as 'timeOfBirth', mapping it to your 'tob' concept
    const { fullName, dob, timeOfBirth, location } = req.body;

    if (!dob) {
      return res.status(400).json({ success: false, message: "Date of Birth is missing." });
    }

    // Apply your upgraded numerology math
    const mulank = calculateMulank(dob);
    const bhagyank = calculateBhagyank(dob);

    // Apply your System Instruction
    const systemInstruction = `You are a master Vedic Astrologer and Numerologist. Respond directly to the user in a warm, mystical, yet highly structured manner. Use Markdown formatting.`;
    
    // Apply your exact Prompt structure
    const userPrompt = `
      Calculate a comprehensive reading for:
      Name: ${fullName}
      Date of Birth: ${dob}
      Time of Birth: ${timeOfBirth}
      Place of Birth: ${location}

      I have mathematically calculated their Numerology:
      - Mulank (Psychic Number): ${mulank}
      - Bhagyank (Destiny Number): ${bhagyank}

      Please provide a detailed reading broken down exactly into the following sections using Markdown headings:
      1. **Numerology Profile**: Explain the profound significance of their Mulank (${mulank}) and Bhagyank (${bhagyank}).
      2. **Planetary Snapshot**: Based on the date, time, and location, estimate the general ascendant and key planetary placements in the 12 houses.
      3. **Love Life & Relationships**: What does their cosmic profile indicate?
      4. **Career & Wealth**: Best career paths and financial trajectory.
      5. **Overall Success & Remedies**: Actionable advice and potential remedies for success.
    `;

    // Call the upgraded Gemini 2.5 Flash API
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userPrompt,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
      }
    });

    // Return the response structured for our React frontend
    res.status(200).json({
      success: true,
      data: {
        numerology: { mulank, bhagyank },
        reading: response.text
      }
    });

  } catch (error) {
    console.error("🚨 Astrology Generation Error:", error);
    
    if (error.status === 429) {
      return res.status(429).json({ 
        success: false, 
        message: "The cosmic energies are overwhelming our servers. Please wait 60 seconds and try again." 
      });
    }

    res.status(500).json({ 
      success: false, 
      message: "Failed to generate reading. Please check your API key and server logs." 
    });
  }
};