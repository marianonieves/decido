// List of decision-making tips
const tips = [
  "Break big decisions into smaller, manageable steps.",
  "Consider how your decision aligns with your long-term goals.",
  "List pros and cons to see the full picture clearly.",
  "Avoid making decisions when stressed or tired.",
  "Trust your intuition, but verify with logic.",
  "Set a deadline to avoid overthinking.",
  "Seek advice from someone with relevant experience.",
  "Think about how this decision will impact others.",
  "Imagine the best and worst outcomes of your choice.",
  "Always have a backup plan ready.",
  "Reflect on past decisions and their outcomes.",
  "Focus on facts, not just feelings.",
  "Practice gratitude for what you already have.",
  "Ask yourself, 'What’s the worst that could happen?'.",
  "Prioritize decisions that bring long-term benefits.",
  "Evaluate how reversible your choice is.",
  "Start with the easiest decision to build momentum.",
  "Stay open to adjusting your choice as needed.",
  "Think about how this choice reflects your values.",
  "Don’t compare your decision to others’ choices.",
  "Avoid seeking endless opinions; trust yourself.",
  "Consider if this is a 'now' or 'later' decision.",
  "Be realistic about what’s within your control.",
  "Eliminate unnecessary options to simplify.",
  "Don’t let fear of failure stop you from deciding.",
  "Align your choices with your top priorities.",
  "Take a short walk to clear your mind before deciding.",
  "Ask, 'Does this decision excite or drain me?'.",
  "Use a decision matrix to weigh options logically.",
  "Avoid perfectionism—choose what’s good enough.",
  "Learn from mistakes, but don’t dwell on them.",
  "Reward yourself for making tough choices.",
  "Seek clarity, not perfection, in your options.",
  "Make sure your decision respects your boundaries.",
  "Avoid distractions when focusing on a big choice.",
  "Think about how this decision will feel in a year.",
  "Ask, 'Is this decision kind to myself and others?'.",
  "Take breaks to prevent decision fatigue.",
  "Practice mindfulness to reduce decision stress.",
  "Remember, not deciding is also a decision."
];

// Function to display a random tip on page load
function displayRandomTip() {
  const tipCard = document.getElementById("tip-card");
  const randomIndex = Math.floor(Math.random() * tips.length);
  const randomTip = tips[randomIndex];
  tipCard.textContent = "\uD83D\uDCA1 TIP #"+(randomIndex+1)+": " + randomTip ;
}

// Call the function on page load
window.onload = displayRandomTip;
