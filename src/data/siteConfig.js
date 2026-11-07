// All personalization for the private gate and birthday surprise lives here.
// Edit this file to change the secret, the greeting name, or the message.

// Secret gate: she must answer this question to enter the site.
// Answers are matched case-insensitively, ignoring spaces and punctuation.
export const gate = {
  question: "Who is my forever?",
  answers: ["#shafrinChowdhuryEftee#"],
};

// Big birthday popup, shown on every login after the gate.
export const birthday = {
  name: "Shafrin Chowdhury Eftee",
  headline: "Happy Birthday",
  // Popup shows only while the date falls inside this window (month: 1-12):
  // appears on Nov 8 and remains through the end of Nov 9.
  window: { month: 11, startDay: 7, endDay: 9 },
  // Set to true to preview the popup outside the window.
  forceShow: false,
  wishes: [
    "Today the world celebrates the day it was blessed with you — and my heart celebrates every single day it was blessed with your love.",
    "You are my favorite dream come true, my calm in the chaos, and the most beautiful chapter of my story. May this year love you as gently as you love everyone around you.",
    "I wish you a lifetime of laugh wrinkles, eyes that sparkle with joy, and mornings that feel as soft as your hand in mine. Thank you for being exactly, perfectly you.",
  ],
  signature: "Forever and always yours ❤️",
};
