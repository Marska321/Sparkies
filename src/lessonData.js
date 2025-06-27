// This file holds all the lesson and badge data for the SparkSkill app.

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
          { id: 1, title: "Discover Your Strengths", time: "10 minutes", tools: ["Pen/pencil", "Paper"], description: "Think about what you’re good at (e.g., drawing, helping).", tasks: ["My Strengths: ___________________________"], example: "I’m great at drawing and making crafts!", tip: "Pretend you’re a superhero—what’s your superpower?" },
          { id: 2, title: "Find a Community Need", time: "10 minutes", tools: ["Pen/pencil", "Paper"], description: "Think about a problem people face (e.g., kids get bored).", tasks: ["Community Need: ___________________________"], example: "Kids need fun things to do at home!", tip: "Ask family or friends, “What’s something you wish was easier?”" },
          { id: 3, title: "Combine Strengths and Need", time: "15 minutes", tools: ["Pen/pencil", "Paper"], description: "Mix your strengths and the need to create a business idea.", tasks: ["My Business Idea: ___________________________"], example: "SparkCraft Kits – Fun craft projects for kids to do at home!", tip: "Imagine your idea helping everyone in Sparkville!" },
          { id: 4, title: "Validate Your Idea", time: "15 minutes", tools: ["Pen/pencil", "Paper"], description: "Ask 2-3 people: “Is this a real problem? Would my idea help?”", tasks: ["Feedback: ___________________________"], example: "Mom said, “Kids would love craft kits!”", tip: "Be brave—feedback makes ideas stronger!" },
          { id: 5, title: "Reflect", time: "5 minutes", tools: ["Pen/pencil", "Paper"], description: "Think about what was fun and what you learned. Write answers and share with your parent or teacher.", tasks: ["What was fun about finding your spark?", "What’s one thing you learned about yourself?"] }
        ]
      }
    },
    // Lesson 2: Brainstorm Solutions
    {
      id: 2,
      title: 'Brainstorm Solutions',
      description: 'Brainstorm solutions for the need and create an Idea Blast Poster.',
      sections: 6,
      duration: '60-90 minutes',
      completed: true,
      icon: '💡',
      color: 'bg-orange-400',
      content: {
        overview: "Think of ways to solve the problem from Lesson 1, pick the best one, and make an Idea Blast Poster to show it off.",
        checklist: ["Review your idea", "Brainstorm three solutions", "Pick one solution", "Create an Idea Blast Poster", "Share your poster", "Reflect on solutions"],
        activities: [
          { id: 1, title: "Review Your Idea", time: "5 minutes", tools: ["Pen/pencil", "Paper"], description: "Look back at your idea from Lesson 1.", tasks: ["My Idea: ___________________________"], example: "SparkCraft Kits – Fun craft projects for kids!", tip: "Talk to your parent if you need a reminder." },
          { id: 2, title: "Brainstorm Three Solutions", time: "10 minutes", tools: ["Pen/pencil", "Paper"], description: "List three ways to solve the problem.", tasks: ["Solution 1: ___________________________", "Solution 2: ___________________________", "Solution 3: ___________________________"], example: "1. Craft kits, 2. Activity books, 3. Online craft videos.", tip: "Think big—no idea is too wild!" },
          { id: 3, title: "Pick One Solution", time: "10 minutes", tools: ["Pen/pencil", "Paper"], description: "Choose your favorite solution.", tasks: ["My Solution: ___________________________"], example: "SparkCraft Kits – Easy craft kits for kids!", tip: "Pick the one you’re most excited about!" },
          { id: 4, title: "Create an Idea Blast Poster", time: "15-20 minutes", tools: ["Paper", "crayons/markers", "magazine cutouts"], description: "Draw your solution on a poster.", tasks: ["Solution name at the top", "A drawing of your solution", "A fun slogan (e.g., “Craft the Fun!”)", "Your name at the bottom"], tip: "Add colors or sparkles to make it pop!" },
          { id: 5, title: "Share Your Poster", time: "10 minutes", tools: ["Pen/pencil", "Paper"], description: "Show your poster to 2-3 people and ask for advice.", tasks: ["Ask: “Would you use this?”", "Ask: “Any ideas to make it better?”", "Write down one piece of advice: ___________________"], tip: "Be proud of your creativity!" },
          { id: 6, title: "Reflect", time: "5 minutes", tools: ["Pen/pencil", "Paper"], description: "Think about what was fun and what you learned.", tasks: ["What was fun about brainstorming?", "What did you learn about solving problems?"] }
        ]
      }
    },
    // Lesson 3: Validate Your Vision
    {
      id: 3,
      title: 'Validate Your Vision',
      description: 'Test your idea with feedback and create a Validation Star Chart.',
      sections: 5,
      duration: '60-90 minutes',
      completed: true,
      icon: '⭐',
      color: 'bg-green-400',
      content: {
        overview: "Test your solution from Lesson 2 by asking others what they think and make a Validation Star Chart to show feedback.",
        checklist: ["Review your solution", "Ask for feedback", "Create a Validation Star Chart", "Share your chart", "Reflect on feedback"],
        activities: [
          { id: 1, title: "Review Your Solution", time: "5 minutes", tools: ["Pen/pencil", "Paper"], description: "Look back at your solution from Lesson 2.", tasks: ["My Solution: ___________________________"], example: "SparkCraft Kits – Easy craft kits for kids!", tip: "Look at your Idea Blast Poster if you need a reminder." },
          { id: 2, title: "Ask for Feedback", time: "15 minutes", tools: ["Pen/pencil", "Paper"], description: "Ask 2-3 people for their thoughts.", tasks: ["Ask: “Would you use this?”", "Ask: “Why or why not?”", "Write their answers: ___________________"], example: "Dad said, “Kids would love it, but add more colors!”", tip: "Pretend you’re a detective finding clues!" },
          { id: 3, title: "Create a Validation Star Chart", time: "15-20 minutes", tools: ["Paper", "crayons/markers", "magazine cutouts"], description: "Draw a chart showing feedback.", tasks: ["Solution name at the top", "A drawing of your solution", "One feedback quote (e.g., “Kids would love it!”)", "Your name at the bottom"], tip: "Add stars or colors to make it shine!" },
          { id: 4, title: "Share Your Chart", time: "10 minutes", tools: ["Pen/pencil", "Paper"], description: "Show your chart to 2-3 people.", tasks: ["Ask: “Does this show my idea well?”", "Ask: “Any ideas to make it better?”", "Write one piece of advice: ___________________"], tip: "Be brave—feedback helps!" },
          { id: 5, title: "Reflect", time: "5 minutes", tools: ["Pen/pencil", "Paper"], description: "Think about what was fun and what you learned.", tasks: ["What was fun about getting feedback?", "What did you learn about your idea?"] }
        ]
      }
    },
    // Lesson 4: Craft Your Pitch
    {
      id: 4,
      title: 'Craft Your Pitch',
      description: 'Create a short pitch and Pitch Spark Card to explain your idea.',
      sections: 5,
      duration: '60-90 minutes',
      completed: false,
      current: true,
      progress: 40,
      icon: '🎯',
      color: 'bg-blue-400',
      content: {
        overview: "Write a short pitch to share your idea from Lesson 3 and make a Pitch Spark Card to show it off.",
        checklist: ["Review your idea", "Write a pitch", "Create a Pitch Spark Card", "Practice and share your pitch", "Reflect on pitching"],
        activities: [
          { id: 1, title: "Review Your Idea", time: "5 minutes", tools: ["Pen/pencil", "Paper"], description: "Look back at your idea from Lesson 3.", tasks: ["My Idea: ___________________________"], example: "SparkCraft Kits – Fun craft kits for kids!", tip: "Look at your Validation Star Chart if you need a reminder." },
          { id: 2, title: "Write a Pitch", time: "10 minutes", tools: ["Pen/pencil", "Paper"], description: "Write a 2-3 sentence pitch: What’s your idea and why’s it great?", tasks: ["My Pitch: ___________________________"], example: "SparkCraft Kits! Fun, easy crafts for kids at home for just R20!", tip: "Pretend you’re telling a friend why your idea rocks!" },
          { id: 3, title: "Create a Pitch Spark Card", time: "15-20 minutes", tools: ["Paper", "crayons/markers", "magazine cutouts"], description: "Draw your pitch on a card.", tasks: ["Idea name at the top", "Your pitch in the middle", "A drawing of your idea", "Your name at the bottom"], tip: "Add colors or sparkles to make it pop!" },
          { id: 4, title: "Practice and Share Your Pitch", time: "15 minutes", tools: ["Pen/pencil", "Paper"], description: "Practice your pitch 2-3 times and share with 2-3 people.", tasks: ["Ask: “Is my pitch clear?”", "Ask: “Any ideas to make it better?”", "Write one piece of advice: ___________________"], tip: "Smile and have fun—you’re a SparkStar!" },
          { id: 5, title: "Reflect", time: "5 minutes", tools: ["Pen/pencil", "Paper"], description: "Think about what was fun and what you learned.", tasks: ["What was fun about pitching?", "What did you learn about sharing ideas?"] }
        ]
      }
    },
    // Lesson 5: Plan Your Mini-Business
    {
      id: 5,
      title: 'Plan Your Mini-Business',
      description: 'Create a simple business plan and Mini-Business Blueprint.',
      sections: 5,
      duration: '60-90 minutes',
      completed: false,
      icon: '📋',
      color: 'bg-purple-400',
      content: {
        overview: "Plan how to make your idea from Lesson 4 real and create a Mini-Business Blueprint to show your plan.",
        checklist: ["Review your idea", "Plan your business", "Create a Mini-Business Blueprint", "Share your blueprint", "Reflect on planning"],
        activities: [
          { id: 1, title: "Review Your Idea", time: "5 minutes", tools: ["Pen/pencil", "Paper"], description: "Look back at your idea from Lesson 4.", tasks: ["My Idea: ___________________________"], example: "SparkCraft Kits – Fun craft kits for kids!", tip: "Look at your Pitch Spark Card if you need a reminder." },
          { id: 2, title: "Plan Your Business", time: "15 minutes", tools: ["Pen/pencil", "Paper"], description: "Answer the core questions about your business.", tasks: ["What will you sell? ___________________", "Who is it for? ___________________", "How will you make it? ___________________"], example: "What: craft kits, Who: kids aged 7-12, How: assemble at home", tip: "Pretend you’re planning a Sparkville shop!" },
          { id: 3, title: "Create a Mini-Business Blueprint", time: "15-20 minutes", tools: ["Paper", "crayons/markers", "magazine cutouts"], description: "Draw your plan on a blueprint.", tasks: ["Idea name at the top", "Your plan answers (what, who, how)", "A drawing of your idea", "Your name at the bottom"], tip: "Add colors or cutouts to make it exciting!" },
          { id: 4, title: "Share Your Blueprint", time: "10 minutes", tools: ["Pen/pencil", "Paper"], description: "Show your blueprint to 2-3 people.", tasks: ["Ask: “Is my plan clear?”", "Ask: “Any ideas to make it better?”", "Write one piece of advice: ___________________"], tip: "Be proud of your plan—you’re a SparkStar!" },
          { id: 5, title: "Reflect", time: "5 minutes", tools: ["Pen/pencil", "Paper"], description: "Think about what was fun and what you learned.", tasks: ["What was fun about planning?", "What did you learn about making ideas real?"] }
        ]
      }
    },
    // Lesson 6: Money Basics
    {
      id: 6,
      title: 'Money Basics',
      description: 'Set a price for your idea and create a Pricing Poster.',
      sections: 6,
      duration: '60-90 minutes',
      completed: false,
      icon: '💰',
      color: 'bg-green-500',
      content: {
        overview: "Decide how much to charge for your idea from Lesson 5 and make a Pricing Poster to show it.",
        checklist: ["Review your idea", "List costs", "Decide a price", "Create a Pricing Poster", "Share your poster", "Reflect on pricing"],
        activities: [
          { id: 1, title: "Review Your Idea", time: "5 minutes", tools: ["Pen/pencil", "Paper"], description: "Look back at your idea from Lesson 5.", tasks: ["My Idea: ___________________________"], example: "SparkCraft Kits – Fun craft kits for kids!", tip: "Look at your Mini-Business Blueprint if you need a reminder." },
          { id: 2, title: "List Costs", time: "10 minutes", tools: ["Pen/pencil", "Paper"], description: "List what you need to make your idea (e.g., paper, glue).", tasks: ["Costs: ___________________________"], example: "Paper (R5), glue (R3), beads (R2) per kit.", tip: "Pretend you’re shopping for Sparkville supplies!" },
          { id: 3, title: "Decide a Price", time: "10 minutes", tools: ["Pen/pencil", "Paper"], description: "Choose a fair price that covers costs and adds a little extra.", tasks: ["Price: ___________________________"], example: "R20 per SparkCraft Kit.", tip: "Ask your parent, “Is this price fair?”" },
          { id: 4, title: "Create a Pricing Poster", time: "15-20 minutes", tools: ["Paper", "crayons/markers", "magazine cutouts"], description: "Draw your price on a poster.", tasks: ["Idea name at the top", "Your price (e.g., “R20 per kit”)", "A drawing of your idea", "Your name at the bottom"], tip: "Add sparkles or colors to make it catchy!" },
          { id: 5, title: "Share Your Poster", time: "10 minutes", tools: ["Pen/pencil", "Paper"], description: "Show your poster to 2-3 people.", tasks: ["Ask: “Is this price fair?”", "Ask: “Any ideas to make it better?”", "Write one piece of advice: ___________________"], tip: "Be confident—you’re learning about money!" },
          { id: 6, title: "Reflect", time: "5 minutes", tools: ["Pen/pencil", "Paper"], description: "Think about what was fun and what you learned.", tasks: ["What was fun about pricing your idea?", "What did you learn about money?"] }
        ]
      }
    },
    // Lesson 7: Make It Pop
    {
      id: 7,
      title: 'Make It Pop',
      description: 'Create a brand identity and Brand Spark Board.',
      sections: 5,
      duration: '60-90 minutes',
      completed: false,
      icon: '🎨',
      color: 'bg-pink-400',
      content: {
        overview: "Give your idea from Lesson 6 a cool name, logo, and colors, and make a Brand Spark Board to show it off.",
        checklist: ["Review your idea", "Create a brand", "Create a Brand Spark Board", "Share your board", "Reflect on branding"],
        activities: [
          { id: 1, title: "Review Your Idea", time: "5 minutes", tools: ["Pen/pencil", "Paper"], description: "Look back at your idea from Lesson 6.", tasks: ["My Idea: ___________________________"], example: "SparkCraft Kits – Fun craft kits for kids!", tip: "Look at your Pricing Poster if you need a reminder." },
          { id: 2, title: "Create a Brand", time: "15 minutes", tools: ["Pen/pencil", "Paper"], description: "Choose a name, logo, and colors for your idea.", tasks: ["Name: ___________________", "Logo: ___________________", "Colors: ___________________"], example: "Name: 'SparkCraft Kits', Logo: a star, Colors: yellow and blue", tip: "Pretend your brand is for a Sparkville shop!" },
          { id: 3, title: "Create a Brand Spark Board", time: "15-20 minutes", tools: ["Paper", "crayons/markers", "magazine cutouts"], description: "Draw your brand on a board.", tasks: ["Idea name at the top", "Your logo and colors", "A drawing of your idea", "Your name at the bottom"], tip: "Add sparkles or cutouts to make it stand out!" },
          { id: 4, title: "Share Your Board", time: "10 minutes", tools: ["Pen/pencil", "Paper"], description: "Show your board to 2-3 people.", tasks: ["Ask: “Does my brand look exciting?”", "Ask: “Any ideas to make it better?”", "Write one piece of advice: ___________________"], tip: "Be proud of your brand—you’re a SparkStar!" },
          { id: 5, title: "Reflect", time: "5 minutes", tools: ["Pen/pencil", "Paper"], description: "Think about what was fun and what you learned.", tasks: ["What was fun about creating a brand?", "What did you learn about making ideas memorable?"] }
        ]
      }
    },
    // Lesson 8: Market Your Magic
    {
      id: 8,
      title: 'Market Your Magic',
      description: 'Plan marketing and create a Spark Flyer.',
      sections: 5,
      duration: '60-90 minutes',
      completed: false,
      icon: '📱',
      color: 'bg-indigo-400',
      content: {
        overview: "Plan how to tell people about your idea from Lesson 7 and make a Spark Flyer to promote it.",
        checklist: ["Review your idea", "Plan your marketing", "Create a Spark Flyer", "Share your flyer", "Reflect on marketing"],
        activities: [
          { id: 1, title: "Review Your Idea", time: "5 minutes", tools: ["Pen/pencil", "Paper"], description: "Look back at your idea from Lesson 7.", tasks: ["My Idea: ___________________________"], example: "SparkCraft Kits – Fun craft kits for kids!", tip: "Look at your Brand Spark Board if you need a reminder." },
          { id: 2, title: "Plan Your Marketing", time: "15 minutes", tools: ["Pen/pencil", "Paper"], description: "Answer the core questions about your marketing plan.", tasks: ["Who should know? ___________________", "Where will you tell them? ___________________", "How will you tell them? ___________________"], example: "Who: kids at school, Where: school noticeboard, How: flyers", tip: "Pretend you’re advertising in Sparkville!" },
          { id: 3, title: "Create a Spark Flyer", time: "15-20 minutes", tools: ["Paper", "crayons/markers", "magazine cutouts"], description: "Draw a flyer to promote your idea.", tasks: ["Idea name at the top", "A drawing of your idea", "A catchy slogan", "Your name at the bottom"], tip: "Add colors or cutouts to grab attention!" },
          { id: 4, title: "Share Your Flyer", time: "10 minutes", tools: ["Pen/pencil", "Paper"], description: "Show your flyer to 2-3 people.", tasks: ["Ask: “Does this make you want to try my idea?”", "Ask: “Any ideas to make it better?”", "Write one piece of advice: ___________________"], tip: "Be excited—you’re spreading the word!" },
          { id: 5, title: "Reflect", time: "5 minutes", tools: ["Pen/pencil", "Paper"], description: "Think about what was fun and what you learned.", tasks: ["What was fun about marketing?", "What did you learn about telling people your idea?"] }
        ]
      }
    },
    // Lesson 9: Sell with Confidence
    {
      id: 9,
      title: 'Sell with Confidence',
      description: 'Practice a sales pitch and create a Sales Spark Script.',
      sections: 5,
      duration: '60-90 minutes',
      completed: false,
      icon: '⭐',
      color: 'bg-red-400',
      content: {
        overview: "Write a sales pitch to convince people to try your idea from Lesson 8 and make a Sales Spark Script to show it.",
        checklist: ["Review your idea", "Write a sales pitch", "Create a Sales Spark Script", "Practice and share your pitch", "Reflect on selling"],
        activities: [
          { id: 1, title: "Review Your Idea", time: "5 minutes", tools: ["Pen/pencil", "Paper"], description: "Look back at your idea from Lesson 8.", tasks: ["My Idea: ___________________________"], example: "SparkCraft Kits – Fun craft kits for kids!", tip: "Look at your Spark Flyer if you need a reminder." },
          { id: 2, title: "Write a Sales Pitch", time: "10 minutes", tools: ["Pen/pencil", "Paper"], description: "Write a 2-3 sentence pitch: What’s your idea and why should they try it?", tasks: ["My Pitch: ___________________________"], example: "SparkCraft Kits! Get fun crafts for kids at just R20!", tip: "Pretend you’re selling to a Sparkville customer!" },
          { id: 3, title: "Create a Sales Spark Script", time: "15-20 minutes", tools: ["Paper", "crayons/markers", "magazine cutouts"], description: "Draw your pitch on a card.", tasks: ["Idea name at the top", "Your pitch in the middle", "A drawing of your idea", "Your name at the bottom"], tip: "Add colors or sparkles to make it exciting!" },
          { id: 4, title: "Practice and Share Your Pitch", time: "15 minutes", tools: ["Pen/pencil", "Paper"], description: "Practice your pitch 2-3 times and share with 2-3 people.", tasks: ["Ask: “Does my pitch make you want to try it?”", "Ask: “Any ideas to make it better?”", "Write one piece of advice: ___________________"], tip: "Be confident—you’re a SparkStar seller!" },
          { id: 5, title: "Reflect", time: "5 minutes", tools: ["Pen/pencil", "Paper"], description: "Think about what was fun and what you learned.", tasks: ["What was fun about selling?", "What did you learn about convincing people?"] }
        ]
      }
    },
    // Lesson 10: Track Your Success
    {
      id: 10,
      title: 'Track Your Success',
      description: 'Track progress with the QUASH method and create a Success Spark Tracker.',
      sections: 5,
      duration: '60-90 minutes',
      completed: false,
      icon: '📊',
      color: 'bg-teal-400',
      content: {
        overview: "Use QUASH (Question, Understand, Act, Share, Hone) to check your idea from Lesson 9 and make a Success Spark Tracker to show progress.",
        checklist: ["Review your idea", "Track with QUASH", "Create a Success Spark Tracker", "Share your tracker", "Reflect on progress"],
        activities: [
          { id: 1, title: "Review Your Idea", time: "5 minutes", tools: ["Pen/pencil", "Paper"], description: "Look back at your idea from Lesson 9.", tasks: ["My Idea: ___________________________"], example: "SparkCraft Kits – Fun craft kits for kids!", tip: "Look at your Sales Spark Script if you need a reminder." },
          { id: 2, title: "Track with QUASH", time: "15 minutes", tools: ["Pen/pencil", "Paper"], description: "Answer these QUASH questions about your idea.", tasks: ["Question (What to know?): ___________________", "Understand (What did you learn?): ___________________", "Act (What will you do?): ___________________"], example: "Question: 'Do kids like my kits?' Understand: 'They want more colors.' Act: 'Add beads to kits.'", tip: "Pretend you’re a Sparkville scientist checking your idea!" },
          { id: 3, title: "Create a Success Spark Tracker", time: "15-20 minutes", tools: ["Paper", "crayons/markers", "magazine cutouts"], description: "Draw your progress on a tracker.", tasks: ["Idea name at the top", "Your QUASH answers", "A drawing of your idea", "Your name at the bottom"], tip: "Add colors or stars to show progress!" },
          { id: 4, title: "Share Your Tracker", time: "10 minutes", tools: ["Pen/pencil", "Paper"], description: "Show your tracker to 2-3 people.", tasks: ["Ask: “Does this show my progress well?”", "Ask: “Any ideas to make it better?”", "Write one piece of advice: ___________________"], tip: "Be proud of your progress—you’re a SparkStar!" },
          { id: 5, title: "Reflect", time: "5 minutes", tools: ["Pen/pencil", "Paper"], description: "Think about what was fun and what you learned.", tasks: ["What was fun about tracking your idea?", "What did you learn about making it better?"] }
        ]
      }
    },
    // Lesson 11: Celebrate Your Spark
    {
      id: 11,
      title: 'Celebrate Your Spark',
      description: 'Celebrate your journey with a SparkStar Showcase.',
      sections: 5,
      duration: '60-90 minutes',
      completed: false,
      icon: '🏆',
      color: 'bg-yellow-500',
      content: {
        overview: "Review your journey from Lessons 1-10, pick favorite parts, and create a SparkStar Showcase to share your achievements.",
        checklist: ["Review your journey", "Pick favorite moments and lessons", "Create a SparkStar Showcase", "Share your showcase", "Reflect on your journey"],
        activities: [
          { id: 1, title: "Review Your Journey", time: "5 minutes", tools: ["Pen/pencil", "Paper"], description: "Look back at your idea from Lessons 1-10.", tasks: ["My Idea: ___________________________"], example: "SparkCraft Kits – Fun craft projects for kids!", tip: "Look at past creations with your parent or teacher." },
          { id: 2, title: "Pick Favorite Moments and Lessons", time: "10 minutes", tools: ["Pen/pencil", "Paper"], description: "Answer questions about your journey.", tasks: ["Favorite thing made? ___________________", "Most fun lesson? ___________________", "One thing learned? ___________________"], example: "Favorite thing: poster, Fun lesson: making a flyer, Learned: 'Feedback helps.'", tip: "Pretend you’re telling a Sparkville friend about your adventure!" },
          { id: 3, title: "Create a SparkStar Showcase", time: "15-20 minutes", tools: ["Paper", "crayons/markers", "magazine cutouts"], description: "Draw your journey on a showcase.", tasks: ["Idea name at the top", "A drawing of your favorite creation", "One lesson learned", "Your name at the bottom"], tip: "Add colors, sparkles, or cutouts to make it festive!" },
          { id: 4, "title": "Share Your Showcase", time: "10 minutes", tools: ["Pen/pencil", "Paper"], description: "Show your showcase to 2-3 people.", tasks: ["Ask: “Does this show my journey well?”", "Ask: “Any ideas to make it better?”", "Write one piece of advice: ___________________"], tip: "Be proud—you’re a SparkStar champion!" },
          { id: 5, title: "Reflect", time: "5 minutes", tools: ["Pen/pencil", "Paper"], description: "Think about your journey.", tasks: ["What was the most exciting part?", "How did it feel to share your showcase?", "Would you start a new idea?"] }
        ]
      }
    },
    // Lesson 12: Spark It Forward
    {
      id: 12,
      title: 'Spark It Forward',
      description: 'Share your idea with a wider audience and create a Spark It Forward Plan.',
      sections: 5,
      duration: '60-90 minutes',
      completed: false,
      icon: '👑',
      color: 'bg-gradient-to-r from-yellow-400 to-orange-400',
      content: {
        overview: "Plan how to share your idea from Lesson 11 with more people and make a Spark It Forward Plan to show it.",
        checklist: ["Review your idea", "Plan how to share", "Create a Spark It Forward Plan", "Share your plan", "Reflect on sharing"],
        activities: [
          { id: 1, title: "Review Your Idea", time: "5 minutes", tools: ["Pen/pencil", "Paper"], description: "Look back at your idea from Lesson 11.", tasks: ["My Idea: ___________________________"], example: "SparkCraft Kits – Fun craft projects for kids!", tip: "Look at your SparkStar Showcase if you need a reminder." },
          { id: 2, title: "Plan How to Share", time: "15 minutes", tools: ["Pen/pencil", "Paper"], description: "Answer the core questions about sharing your idea.", tasks: ["Who else should know? ___________________", "How will you tell them? ___________________", "Why will they love it? ___________________"], example: "Who: kids at school, How: flyers, Why: it's fun and affordable", tip: "Pretend you’re inviting all of Sparkville to try your idea!" },
          { id: 3, title: "Create a Spark It Forward Plan", time: "15-20 minutes", tools: ["Paper", "crayons/markers", "magazine cutouts"], description: "Draw your plan on a poster.", tasks: ["Idea name at the top", "A drawing of you sharing", "One sharing sentence", "Your name at the bottom"], example: "I'll show my flyer at school!", tip: "Add colors or cutouts to make it lively!" },
          { id: 4, title: "Share Your Plan", time: "10 minutes", tools: ["Pen/pencil", "Paper"], description: "Show your plan to 2-3 people.", tasks: ["Ask: “Does my plan make you excited to share my idea?”", "Ask: “Any ideas to make it better?”", "Write one piece of advice: ___________________"], tip: "Be proud—you’re a SparkStar leader!" },
          { id: 5, title: "Reflect", time: "5 minutes", tools: ["Pen/pencil", "Paper"], description: "Think about what was fun and what you learned.", tasks: ["What was fun about planning to share?", "What did people say about your plan?", "Would you keep sharing or start a new idea?"] }
        ]
      }
    }
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
