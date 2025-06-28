// src/lessonData.js
export const lessons = [
  {
    id: 1,
    title: 'Discover Your Spark',
    description: 'Identify personal strengths and a community need to spark a business idea.',
    sections: 5,
    duration: '60-90 minutes',
    content: {
      overview: "Become a SparkStar by finding what you’re great at and a problem to solve, then combine them into a business idea and validate it with others.",
      checklist: ["Discover your strengths", "Find a community need", "Combine strengths and need into an idea", "Validate your idea", "Reflect on your spark"],
      activities: [
        { id: 1, title: "Discover Your Strengths", time: "10 minutes", tools: ["Pen/pencil", "Paper"], description: "Think about what you’re good at (e.g., drawing, helping).", writeAnswers: ["My Strengths: ___"] },
        { id: 2, title: "Find a Community Need", time: "10 minutes", tools: ["Pen/pencil", "Paper"], description: "Think about a problem people face (e.g., kids get bored).", writeAnswers: ["Community Need: ___"] },
        { id: 3, title: "Combine Strengths and Need", time: "15 minutes", tools: ["Pen/pencil", "Paper"], description: "Mix your strengths and the need to create a business idea.", writeAnswers: ["My Business Idea: ___"] },
        { id: 4, title: "Validate Your Idea", time: "15 minutes", tools: ["Pen/pencil", "Paper"], description: "Ask 2-3 people: “Is this a real problem? Would my idea help?”", writeAnswers: ["Feedback: ___"] },
        { id: 5, title: "Reflect", time: "5 minutes", tools: ["Pen/pencil", "Paper"], isReflection: true, description: "Think about what was fun and what you learned.", writeAnswers: ["What was fun about finding your spark? ___", "What’s one thing you learned about yourself? ___"] }
      ]
    }
  },
  {
    id: 2,
    title: 'Brainstorm Solutions',
    description: 'Brainstorm solutions for the need and create an Idea Blast Poster.',
    sections: 6,
    duration: '60-90 minutes',
    content: {
        overview: "You've found your Spark Idea! Now it's time to brainstorm all the creative ways you can solve the problem. Let your imagination run wild and we'll capture your best thoughts on a fun 'Idea Blast Poster'.",
        checklist: ["Review your idea", "Brainstorm three solutions", "Pick one solution", "Create an Idea Blast Poster", "Share your poster", "Reflect on solutions"],
        activities: [
            { id: 1, title: "Review Your Idea", time: "5 minutes", tools: ["Pen/pencil", "Paper"], description: "Look back at your idea from Lesson 1.", writeAnswers: ["My Idea: ___"] },
            { id: 2, title: "Brainstorm Three Solutions", time: "10 minutes", tools: ["Pen/pencil", "Paper"], description: "List three ways to solve the problem.", writeAnswers: ["Solution 1: ___", "Solution 2: ___", "Solution 3: ___"] },
            { id: 3, title: "Pick One Solution", time: "10 minutes", tools: ["Pen/pencil", "Paper"], description: "Choose your favorite solution.", writeAnswers: ["My Solution: ___"] },
            { id: 4, title: "Create an Idea Blast Poster", time: "15-20 minutes", tools: ["Paper", "crayons/markers"], description: "Draw your solution on a poster." },
            { id: 5, title: "Share Your Poster", time: "10 minutes", tools: ["Pen/pencil", "Paper"], description: "Show your poster to 2-3 people and ask for advice.", writeAnswers: ["One piece of advice: ___"] },
            { id: 6, title: "Reflect", time: "5 minutes", tools: ["Pen/pencil", "Paper"], isReflection: true, description: "Think about what was fun and what you learned.", writeAnswers: ["What was fun about brainstorming? ___", "What did you learn about solving problems? ___"] }
        ]
    }
  },
  {
      id: 3,
      title: 'Validate Your Vision',
      description: 'Test your idea with feedback and create a Validation Star Chart.',
      sections: 5,
      duration: '60-90 minutes',
      content: {
          overview: "You have an amazing idea! But will other people think so too? In this lesson, you'll become a researcher and get feedback from others to make your idea even stronger. We'll collect this feedback in a 'Validation Star Chart'.",
          checklist: ["Review your solution", "Ask for feedback", "Create a Validation Star Chart", "Share your chart", "Reflect on feedback"],
          activities: [
              { id: 1, title: "Review Your Solution", time: "5 minutes", tools: ["Pen/pencil", "Paper"], description: "Look back at your solution from Lesson 2.", writeAnswers: ["My Solution: ___"] },
              { id: 2, title: "Ask for Feedback", time: "15 minutes", tools: ["Pen/pencil", "Paper"], description: "Ask 2-3 people for their thoughts.", writeAnswers: ["Feedback: ___"] },
              { id: 3, title: "Create a Validation Star Chart", time: "15-20 minutes", tools: ["Paper", "crayons/markers"], description: "Draw a chart showing feedback." },
              { id: 4, title: "Share Your Chart", time: "10 minutes", tools: ["Pen/pencil", "Paper"], description: "Show your chart to 2-3 people.", writeAnswers: ["One piece of advice: ___"] },
              { id: 5, title: "Reflect", time: "5 minutes", tools: ["Pen/pencil", "Paper"], isReflection: true, description: "Think about what was fun and what you learned.", writeAnswers: ["What was fun about getting feedback? ___", "What did you learn about your idea? ___"] }
          ]
      }
  },
  // Add all other lessons 4-12 here in the same detailed format...
];

export const badges = [
    { id: 1, name: 'Spark Finder', icon: '✨', lesson: 1 },
    { id: 2, name: 'Idea Creator', icon: '💡', lesson: 2 },
    { id: 3, name: 'Validator', icon: '✨', lesson: 3 },
    { id: 4, name: 'Pitcher', icon: '🎯', lesson: 4 },
    { id: 5, name: 'Planner', icon: '📋', lesson: 5 },
    { id: 6, name: 'Money Master', icon: '💰', lesson: 6 },
    { id: 7, name: 'Brand Builder', icon: '🎨', lesson: 7 },
    { id: 8, name: 'Marketing Wizard', icon: '📱', lesson: 8 },
    { id: 9, name: 'Sales Star', icon: '⭐', lesson: 9 },
    { id: 10, name: 'Success Tracker', icon: '📊', lesson: 10 },
    { id: 11, name: 'SparkStar Champion', icon: '🏆', lesson: 11 },
    { id: 12, name: 'Spark Leader', icon: '👑', lesson: 12 }
];
