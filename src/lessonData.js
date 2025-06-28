// src/lessonData.js

export const lessons = [
  // Lesson 1
  {
    id: 1,
    title: 'Discover Your Spark',
    description: 'Identify personal strengths and a community need to spark a business idea.',
    sections: 5,
    duration: '60-90 minutes',
    icon: '✨',
    color: 'bg-yellow-400',
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
  // Lesson 2
  {
    id: 2,
    title: 'Brainstorm Solutions',
    description: 'Brainstorm solutions for the need and create an Idea Blast Poster.',
    sections: 6,
    duration: '60-90 minutes',
    icon: '💡',
    color: 'bg-orange-400',
    content: {
        overview: "You've found your Spark Idea! Now it's time to brainstorm all the creative ways you can solve the problem. Let your imagination run wild and we'll capture your best thoughts on a fun 'Idea Blast Poster'.",
        checklist: ["Review your idea", "Brainstorm three solutions", "Pick one solution", "Create an Idea Blast Poster", "Share your poster", "Reflect on solutions"],
        activities: [
            { id: 1, title: "Review Your Idea", time: "5 minutes", tools: ["Pen/pencil", "Paper"], description: "Look back at your idea from Lesson 1.", writeAnswers: ["My Idea: ___"] },
            { id: 2, title: "Brainstorm Three Solutions", time: "10 minutes", tools: ["Pen/pencil", "Paper"], description: "List three ways to solve the problem.", writeAnswers: ["Solution 1: ___", "Solution 2: ___", "Solution 3: ___"] },
            { id: 3, title: "Pick One Solution", time: "10 minutes", tools: ["Pen/pencil", "Paper"], description: "Choose your favorite solution.", writeAnswers: ["My Solution: ___"] },
            { id: 4, title: "Create an Idea Blast Poster", time: "15-20 minutes", tools: ["Paper", "crayons/markers"], description: "Draw your solution on a poster. Include a name, drawing, slogan, and your name." },
            { id: 5, title: "Share Your Poster", time: "10 minutes", tools: ["Pen/pencil", "Paper"], description: "Show your poster to 2-3 people and ask for advice.", writeAnswers: ["One piece of advice: ___"] },
            { id: 6, title: "Reflect", time: "5 minutes", tools: ["Pen/pencil", "Paper"], isReflection: true, description: "Think about what was fun and what you learned.", writeAnswers: ["What was fun about brainstorming? ___", "What did you learn about solving problems? ___"] }
        ]
    }
  },
  // Lesson 3
  {
    id: 3,
    title: 'Validate Your Vision',
    description: 'Test your idea with feedback and create a Validation Star Chart.',
    sections: 5,
    duration: '60-90 minutes',
    icon: '⭐',
    color: 'bg-green-400',
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
  // Lesson 4
  {
    id: 4,
    title: 'Craft Your Pitch',
    description: 'Create a short pitch and Pitch Spark Card to explain your idea.',
    sections: 5,
    duration: '60-90 minutes',
    icon: '🎯',
    color: 'bg-blue-400',
    content: {
      overview: "An idea is powerful, but you need to be able to explain it quickly! A 'pitch' is a short, exciting summary of your business. In this lesson, you'll create your own pitch and a handy 'Pitch Spark Card' so you're always ready to share your vision.",
      checklist: ["Review your idea", "Write a pitch", "Create a Pitch Spark Card", "Practice and share your pitch", "Reflect on pitching"],
      activities: [
        { id: 1, title: "Review Your Idea", time: "5 minutes", tools: ["Pen/pencil", "Paper"], description: "Look back at your idea from Lesson 3.", writeAnswers: ["My Idea: ___"] },
        { id: 2, title: "Write a Pitch", time: "10 minutes", tools: ["Pen/pencil", "Paper"], description: "Write a 2-3 sentence pitch: What’s your idea and why’s it great?", writeAnswers: ["My Pitch: ___"] },
        { id: 3, title: "Create a Pitch Spark Card", time: "15-20 minutes", tools: ["Paper", "crayons/markers"], description: "Draw your pitch on a card." },
        { id: 4, title: "Practice and Share Your Pitch", time: "15 minutes", tools: ["Pen/pencil", "Paper"], description: "Practice your pitch 2-3 times and share with 2-3 people.", writeAnswers: ["One piece of advice: ___"] },
        { id: 5, title: "Reflect", time: "5 minutes", tools: ["Pen/pencil", "Paper"], isReflection: true, description: "Think about what was fun and what you learned.", writeAnswers: ["What was fun about pitching? ___", "What did you learn about sharing ideas? ___"] }
      ]
    }
  },
  // Lesson 5
  {
    id: 5,
    title: 'Plan Your Mini-Business',
    description: 'Create a simple business plan and Mini-Business Blueprint.',
    sections: 5,
    duration: '60-90 minutes',
    icon: '📋',
    color: 'bg-purple-400',
    content: {
      overview: "Every great adventure needs a map! A business plan is a map for your idea. In this lesson, we'll create a 'Mini-Business Blueprint' to outline the simple steps you'll need to take to bring your idea to life.",
      checklist: ["Review your idea", "Plan your business", "Create a Mini-Business Blueprint", "Share your blueprint", "Reflect on planning"],
      activities: [
        { id: 1, title: "Review Your Idea", time: "5 minutes", tools: ["Pen/pencil", "Paper"], description: "Look back at your idea from Lesson 4.", writeAnswers: ["My Idea: ___"] },
        { id: 2, title: "Plan Your Business", time: "15 minutes", tools: ["Pen/pencil", "Paper"], description: "Answer: What will you sell? Who is it for? How will you make it?", writeAnswers: ["What: ___", "Who: ___", "How: ___"] },
        { id: 3, title: "Create a Mini-Business Blueprint", time: "15-20 minutes", tools: ["Paper", "crayons/markers"], description: "Draw your plan on a blueprint." },
        { id: 4, title: "Share Your Blueprint", time: "10 minutes", tools: ["Pen/pencil", "Paper"], description: "Show your blueprint to 2-3 people.", writeAnswers: ["One piece of advice: ___"] },
        { id: 5, title: "Reflect", time: "5 minutes", tools: ["Pen/pencil", "Paper"], isReflection: true, description: "Think about what was fun and what you learned.", writeAnswers: ["What was fun about planning? ___", "What did you learn about making ideas real? ___"] }
      ]
    }
  },
  // Lesson 6
  {
    id: 6,
    title: 'Money Basics',
    description: 'Set a price for your idea and create a Pricing Poster.',
    sections: 6,
    duration: '60-90 minutes',
    icon: '💰',
    color: 'bg-green-500',
    content: {
      overview: "Let's talk about money! Setting a price for your product or service is a key step. In this lesson, you'll learn how to calculate your costs and choose a fair price that values your hard work. Then you'll announce it with a Pricing Poster!",
      checklist: ["Review your idea", "List costs", "Decide a price", "Create a Pricing Poster", "Share your poster", "Reflect on pricing"],
      activities: [
        { id: 1, title: "Review Your Idea", time: "5 minutes", tools: ["Pen/pencil", "Paper"], description: "Look back at your idea from Lesson 5.", writeAnswers: ["My Idea: ___"] },
        { id: 2, title: "List Costs", time: "10 minutes", tools: ["Pen/pencil", "Paper"], description: "List what you need to make your idea (e.g., paper, glue).", writeAnswers: ["Costs: ___"] },
        { id: 3, title: "Decide a Price", time: "10 minutes", tools: ["Pen/pencil", "Paper"], description: "Choose a fair price that covers costs and adds a little extra.", writeAnswers: ["Price: ___"] },
        { id: 4, title: "Create a Pricing Poster", time: "15-20 minutes", tools: ["Paper", "crayons/markers"], description: "Draw your price on a poster." },
        { id: 5, title: "Share Your Poster", time: "10 minutes", tools: ["Pen/pencil", "Paper"], description: "Show your poster to 2-3 people.", writeAnswers: ["One piece of advice: ___"] },
        { id: 6, title: "Reflect", time: "5 minutes", tools: ["Pen/pencil", "Paper"], isReflection: true, description: "Think about what was fun and what you learned.", writeAnswers: ["What was fun about pricing your idea? ___", "What did you learn about money? ___"] }
      ]
    }
  },
  // Lesson 7
  {
    id: 7,
    title: 'Make It Pop',
    description: 'Create a brand identity and Brand Spark Board.',
    sections: 5,
    duration: '60-90 minutes',
    icon: '🎨',
    color: 'bg-pink-400',
    content: {
      overview: "What does your business look and feel like? That's your brand! It's more than just a name; it's the personality of your company. In this lesson, you'll design a logo and choose colors that tell your story.",
      checklist: ["Review your idea", "Create a brand", "Create a Brand Spark Board", "Share your board", "Reflect on branding"],
      activities: [
        { id: 1, title: "Review Your Idea", time: "5 minutes", tools: ["Pen/pencil", "Paper"], description: "Look back at your idea from Lesson 6.", writeAnswers: ["My Idea: ___"] },
        { id: 2, title: "Create a Brand", time: "15 minutes", tools: ["Pen/pencil", "Paper"], description: "Choose a name, logo, and colors.", writeAnswers: ["Name: ___", "Logo: ___", "Colors: ___"] },
        { id: 3, title: "Create a Brand Spark Board", time: "15-20 minutes", tools: ["Paper", "crayons/markers"], description: "Draw your brand on a board." },
        { id: 4, title: "Share Your Board", time: "10 minutes", tools: ["Pen/pencil", "Paper"], description: "Show your board to 2-3 people.", writeAnswers: ["One piece of advice: ___"] },
        { id: 5, title: "Reflect", time: "5 minutes", tools: ["Pen/pencil", "Paper"], isReflection: true, description: "Think about what was fun and what you learned.", writeAnswers: ["What was fun about creating a brand? ___", "What did you learn about making ideas memorable? ___"] }
      ]
    }
  },
  // Lesson 8
  {
    id: 8,
    title: 'Market Your Magic',
    description: 'Plan marketing and create a Spark Flyer.',
    sections: 5,
    duration: '60-90 minutes',
    icon: '📱',
    color: 'bg-indigo-400',
    content: {
      overview: "You've built an amazing brand, now it's time to spread the word! Marketing is how you let customers know you exist. In this lesson, you'll learn how to reach people and design your very first flyer.",
      checklist: ["Review your idea", "Plan your marketing", "Create a Spark Flyer", "Share your flyer", "Reflect on marketing"],
      activities: [
        { id: 1, title: "Review Your Idea", time: "5 minutes", tools: ["Pen/pencil", "Paper"], description: "Look back at your idea from Lesson 7.", writeAnswers: ["My Idea: ___"] },
        { id: 2, title: "Plan Your Marketing", time: "15 minutes", tools: ["Pen/pencil", "Paper"], description: "Answer: Who should know? Where will you tell them? How?", writeAnswers: ["Who: ___", "Where: ___", "How: ___"] },
        { id: 3, title: "Create a Spark Flyer", time: "15-20 minutes", tools: ["Paper", "crayons/markers"], description: "Draw a flyer to promote your idea." },
        { id: 4, title: "Share Your Flyer", time: "10 minutes", tools: ["Pen/pencil", "Paper"], description: "Show your flyer to 2-3 people.", writeAnswers: ["One piece of advice: ___"] },
        { id: 5, title: "Reflect", time: "5 minutes", tools: ["Pen/pencil", "Paper"], isReflection: true, description: "Think about what was fun and what you learned.", writeAnswers: ["What was fun about marketing? ___", "What did you learn about telling people your idea? ___"] }
      ]
    }
  },
  // Lesson 9
  {
    id: 9,
    title: 'Sell with Confidence',
    description: 'Practice a sales pitch and create a Sales Spark Script.',
    sections: 5,
    duration: '60-90 minutes',
    icon: '⭐',
    color: 'bg-red-400',
    content: {
      overview: "It's time to make your first sale! Selling is just having a helpful conversation with a customer. In this lesson, you'll learn how to talk about your product confidently and make your customers feel great.",
      checklist: ["Review your idea", "Write a sales pitch", "Create a Sales Spark Script", "Practice and share your pitch", "Reflect on selling"],
      activities: [
        { id: 1, title: "Review Your Idea", time: "5 minutes", tools: ["Pen/pencil", "Paper"], description: "Look back at your idea from Lesson 8.", writeAnswers: ["My Idea: ___"] },
        { id: 2, title: "Write a Sales Pitch", time: "10 minutes", tools: ["Pen/pencil", "Paper"], description: "Write a 2-3 sentence pitch: What’s your idea and why should they try it?", writeAnswers: ["My Pitch: ___"] },
        { id: 3, title: "Create a Sales Spark Script", time: "15-20 minutes", tools: ["Paper", "crayons/markers"], description: "Draw your pitch on a card." },
        { id: 4, title: "Practice and Share Your Pitch", time: "15 minutes", tools: ["Pen/pencil", "Paper"], description: "Practice your pitch 2-3 times and share with 2-3 people.", writeAnswers: ["One piece of advice: ___"] },
        { id: 5, title: "Reflect", time: "5 minutes", tools: ["Pen/pencil", "Paper"], isReflection: true, description: "Think about what was fun and what you learned.", writeAnswers: ["What was fun about selling? ___", "What did you learn about convincing people? ___"] }
      ]
    }
  },
  // Lesson 10
  {
    id: 10,
    title: 'Track Your Success',
    description: 'Track progress with the QUASH method and create a Success Spark Tracker.',
    sections: 5,
    duration: '60-90 minutes',
    icon: '📊',
    color: 'bg-teal-400',
    content: {
      overview: "How do you know if your business is doing well? You track it! In this lesson, you'll create a simple 'Success Tracker' to watch your progress and set goals to help you grow.",
      checklist: ["Review your idea", "Track with QUASH", "Create a Success Spark Tracker", "Share your tracker", "Reflect on progress"],
      activities: [
        { id: 1, title: "Review Your Idea", time: "5 minutes", tools: ["Pen/pencil", "Paper"], description: "Look back at your idea from Lesson 9.", writeAnswers: ["My Idea: ___"] },
        { id: 2, title: "Track with QUASH", time: "15 minutes", tools: ["Pen/pencil", "Paper"], description: "Answer the QUASH questions: Question, Understand, Act.", writeAnswers: ["Question: ___", "Understand: ___", "Act: ___"] },
        { id: 3, title: "Create a Success Spark Tracker", time: "15-20 minutes", tools: ["Paper", "crayons/markers"], description: "Draw your progress on a tracker." },
        { id: 4, title: "Share Your Tracker", time: "10 minutes", tools: ["Pen/pencil", "Paper"], description: "Show your tracker to 2-3 people.", writeAnswers: ["One piece of advice: ___"] },
        { id: 5, title: "Reflect", time: "5 minutes", tools: ["Pen/pencil", "Paper"], isReflection: true, description: "Think about what was fun and what you learned.", writeAnswers: ["What was fun about tracking your idea? ___", "What did you learn about making it better? ___"] }
      ]
    }
  },
  // Lesson 11
  {
    id: 11,
    title: 'Celebrate Your Spark',
    description: 'Celebrate your journey with a SparkStar Showcase.',
    sections: 5,
    duration: '60-90 minutes',
    icon: '🏆',
    color: 'bg-yellow-500',
    content: {
      overview: "Review your journey from Lessons 1-10, pick favorite parts, and create a SparkStar Showcase to share your achievements.",
      checklist: ["Review your journey", "Pick favorite moments and lessons", "Create a SparkStar Showcase", "Share your showcase", "Reflect on your journey"],
      activities: [
        { id: 1, title: "Review Your Journey", time: "5 minutes", tools: ["Pen/pencil", "Paper"], description: "Look back at your idea from Lessons 1-10.", writeAnswers: ["My Idea: ___"] },
        { id: 2, title: "Pick Favorite Moments and Lessons", time: "10 minutes", tools: ["Pen/pencil", "Paper"], description: "Answer: Favorite thing made? Most fun lesson? One thing learned?", writeAnswers: ["Favorite Thing: ___", "Fun Lesson: ___", "Learned: ___"] },
        { id: 3, title: "Create a SparkStar Showcase", time: "15-20 minutes", tools: ["Paper", "crayons/markers"], description: "Draw your journey on a showcase." },
        { id: 4, title: "Share Your Showcase", time: "10 minutes", tools: ["Pen/pencil", "Paper"], description: "Show your showcase to 2-3 people.", writeAnswers: ["One piece of advice: ___"] },
        { id: 5, title: "Reflect", time: "5 minutes", tools: ["Pen/pencil", "Paper"], isReflection: true, description: "Think about your journey.", writeAnswers: ["Most exciting part? ___", "How did it feel to share? ___", "Would you start a new idea? ___"] }
      ]
    }
  },
  // Lesson 12
  {
    id: 12,
    title: 'Spark It Forward',
    description: 'Share your idea with a wider audience and create a Spark It Forward Plan.',
    sections: 5,
    duration: '60-90 minutes',
    icon: '👑',
    color: 'bg-gradient-to-r from-yellow-400 to-orange-400',
    content: {
      overview: "Plan how to share your idea from Lesson 11 with more people and make a Spark It Forward Plan to show it.",
      checklist: ["Review your idea", "Plan how to share", "Create a Spark It Forward Plan", "Share your plan", "Reflect on sharing"],
      activities: [
        { id: 1, title: "Review Your Idea", time: "5 minutes", tools: ["Pen/pencil", "Paper"], description: "Look back at your idea from Lesson 11.", writeAnswers: ["My Idea: ___"] },
        { id: 2, title: "Plan How to Share", time: "15 minutes", tools: ["Pen/pencil", "Paper"], description: "Answer: Who else should know? How will you tell them? Why will they love it?", writeAnswers: ["Who: ___", "How: ___", "Why: ___"] },
        { id: 3, title: "Create a Spark It Forward Plan", time: "15-20 minutes", tools: ["Paper", "crayons/markers"], description: "Draw your plan on a poster." },
        { id: 4, title: "Share Your Plan", time: "10 minutes", tools: ["Pen/pencil", "Paper"], description: "Show your plan to 2-3 people.", writeAnswers: ["One piece of advice: ___"] },
        { id: 5, title: "Reflect", time: "5 minutes", tools: ["Pen/pencil", "Paper"], isReflection: true, description: "Think about what was fun and what you learned.", writeAnswers: ["What was fun about planning to share? ___", "What did people say about your plan? ___", "Would you keep sharing or start a new idea? ___"] }
      ]
    }
  }
];
