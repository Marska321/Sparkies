// src/lessonData.js

export const lessons = [
  // Lesson 1: Discover Your Spark
  {
    id: 1,
    title: 'Discover Your Spark',
    description: 'Identify personal strengths and a community need to spark a business idea.',
    sections: 5,
    duration: '60-90 minutes',
    completed: true,
    icon: '✨',
    color: 'bg-yellow-400',
    content: {
      overview: "Become a SparkStar by finding what you’re great at and a problem to solve, then combine them into a business idea and validate it with others.",
      checklist: ["Discover your strengths", "Find a community need", "Combine strengths and need into an idea", "Validate your idea", "Reflect on your spark"],
      activities: [
        { id: 1, title: "Discover Your Strengths", time: "10 minutes", tools: ["Pen/pencil", "Paper"], description: "Think about what you’re good at (e.g., drawing, helping).", writeAnswers: ["My Strengths: ___________________________"], example: "I’m great at drawing and making crafts!", tip: "Pretend you’re a superhero—what’s your superpower?" },
        { id: 2, title: "Find a Community Need", time: "10 minutes", tools: ["Pen/pencil", "Paper"], description: "Think about a problem people face (e.g., kids get bored).", writeAnswers: ["Community Need: ___________________________"], example: "Kids need fun things to do at home!", tip: "Ask family or friends, “What’s something you wish was easier?”" },
        { id: 3, title: "Combine Strengths and Need", time: "15 minutes", tools: ["Pen/pencil", "Paper"], description: "Mix your strengths and the need to create a business idea.", writeAnswers: ["My Business Idea: ___________________________"], example: "SparkCraft Kits – Fun craft projects for kids to do at home!", tip: "Imagine your idea helping everyone in Sparkville!" },
        { id: 4, title: "Validate Your Idea", time: "15 minutes", tools: ["Pen/pencil", "Paper"], description: "Ask 2-3 people: “Is this a real problem? Would my idea help?”", writeAnswers: ["Feedback: ___________________________"], example: "Mom said, “Kids would love craft kits!”", tip: "Be brave—feedback makes ideas stronger!" },
        { id: 5, title: "Reflect", time: "5 minutes", tools: ["Pen/pencil", "Paper"], isReflection: true, description: "Think about what was fun and what you learned.", writeAnswers: ["What was fun about finding your spark? ___________________________", "What’s one thing you learned about yourself? ___________________________"] }
      ]
    }
  },
  // ... (All other lessons should also have their 'Reflect' activity updated with 'isReflection: true')
  // For brevity, only Lesson 1 is shown, but apply this change to all "Reflect" activities in your file.
];

export const badges = [
    { id: 1, name: 'Spark Finder', icon: '✨', lesson: 1, earned: true, date: '6/27/2025' },
    { id: 2, name: 'Idea Creator', icon: '💡', lesson: 2, earned: true, date: '6/27/2025' },
    { id: 3, name: 'Validator', icon: '✨', lesson: 3, earned: true, date: '6/27/2025' },
    { id: 4, name: 'Pitcher', icon: '🎯', lesson: 4, earned: false },
    { id: 5, name: 'Planner', icon: '📋', lesson: 5, earned: false },
    { id: 6, name: 'Money Master', icon: '💰', lesson: 6, earned: false },
    { id: 7, name: 'Brand Builder', icon: '🎨', lesson: 7, earned: false },
    { id: 8, name: 'Marketing Wizard', icon: '📱', lesson: 8, earned: false },
    { id: 9, name: 'Sales Star', icon: '⭐', lesson: 9, earned: false },
    { id: 10, name: 'Success Tracker', icon: '📊', lesson: 10, earned: false },
    { id: 11, name: 'SparkStar Champion', icon: '🏆', lesson: 11, earned: false },
    { id: 12, name: 'Spark Leader', icon: '👑', lesson: 12, earned: false }
];
