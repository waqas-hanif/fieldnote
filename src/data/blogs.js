export const blogs = [
  {
    id: 1,
    title: "How Small Businesses Can Use AI Without Hiring an AI Team",
    slug: "small-businesses-ai-without-ai-team",
    category: "Technology",
    categorySlug: "technology",
    authorId: 1,
    author: "Ahsan Malik",
    date: "September 24, 2026",
    readTime: 6,
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80",
    excerpt:
      "AI is becoming easier to use, but small businesses do not need a huge technical team to benefit from it.",
    content: `
      Artificial intelligence is no longer limited to large technology companies.
      Small businesses can now use AI for customer support, content planning,
      data analysis and everyday administrative tasks.

      The important part is not using every new AI tool. The better approach is
      to identify repetitive problems inside a business and find simple tools
      that can solve them.

      A small business might begin by using AI to organize customer questions,
      summarize documents or create a first draft of marketing content.

      The goal should be to save time while keeping human judgment at the center
      of important business decisions.
    `,
    quickTake: {
      problem: "Small businesses often have limited time and technical resources.",
      whyItMatters:
        "Automation can reduce repetitive work and allow teams to focus on customers.",
      solution:
        "Start with one repetitive task and introduce a simple AI-assisted workflow.",
    },
    tags: ["AI", "Business", "Automation", "Technology"],
    likes: 284,
    featured: true,
    trending: true,
    resources: [
      {
        title: "OpenAI",
        url: "https://openai.com/",
      },
      {
        title: "Google AI",
        url: "https://ai.google/",
      },
    ],
  },

  {
    id: 2,
    title: "Why Farmers Lose Water Before Crops Even Need It",
    slug: "farmers-water-management",
    category: "Agriculture",
    categorySlug: "agriculture",
    authorId: 2,
    author: "Sarah Ahmed",
    date: "September 21, 2026",
    readTime: 7,
    image:
      "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1200&q=80",
    excerpt:
      "Water management is becoming one of the most important challenges facing modern agriculture.",
    content: `
      Irrigation is essential for crop production, but applying more water does
      not always mean producing more crops.

      Water can be lost through evaporation, runoff and inefficient irrigation
      practices before plants can use it effectively.

      Farmers can improve water efficiency by understanding soil conditions,
      crop requirements and the timing of irrigation.

      Simple monitoring practices can sometimes make a significant difference
      without requiring expensive technology.
    `,
    quickTake: {
      problem: "A significant amount of irrigation water can be lost before plants use it.",
      whyItMatters:
        "Efficient water use can reduce waste and improve farm sustainability.",
      solution:
        "Match irrigation timing and quantity with soil and crop requirements.",
    },
    tags: ["Agriculture", "Water", "Sustainability", "Farming"],
    likes: 421,
    featured: false,
    trending: true,
    resources: [
      {
        title: "FAO",
        url: "https://www.fao.org/",
      },
      {
        title: "USDA",
        url: "https://www.usda.gov/",
      },
    ],
  },

  {
    id: 3,
    title: "What I Learned From Building My First Real Client Project",
    slug: "lessons-first-client-project",
    category: "Development",
    categorySlug: "development",
    authorId: 3,
    author: "Hamza Tariq",
    date: "September 18, 2026",
    readTime: 5,
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    excerpt:
      "Building a real application taught me lessons that tutorials could not explain.",
    content: `
      Tutorials are useful when learning development, but real projects introduce
      problems that are difficult to understand from examples alone.

      One of the biggest lessons was that writing code is only one part of
      development. Planning, communication, testing and handling unexpected
      requirements are equally important.

      A real project also forces developers to think about loading states,
      errors, responsive layouts and maintainable code.

      These lessons helped turn individual coding skills into a more complete
      development workflow.
    `,
    quickTake: {
      problem: "Tutorial projects often hide the problems found in real applications.",
      whyItMatters:
        "Real projects teach planning, debugging and handling changing requirements.",
      solution:
        "Build complete projects and intentionally solve problems beyond the happy path.",
    },
    tags: ["React", "JavaScript", "Web Development", "Career"],
    likes: 356,
    featured: false,
    trending: true,
    resources: [
      {
        title: "React Documentation",
        url: "https://react.dev/",
      },
      {
        title: "MDN Web Docs",
        url: "https://developer.mozilla.org/",
      },
    ],
  },

  {
    id: 4,
    title: "The Career Skills University Courses Often Do Not Teach",
    slug: "career-skills-university-does-not-teach",
    category: "Career",
    categorySlug: "career",
    authorId: 4,
    author: "Mariam Khan",
    date: "September 15, 2026",
    readTime: 6,
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=80",
    excerpt:
      "Technical knowledge matters, but communication, documentation and problem-solving also shape professional growth.",
    content: `
      Academic education provides important foundations, but professional work
      often requires additional skills.

      Communication is one of the most useful examples. A person may understand
      a technical problem but still struggle to explain it clearly to another
      person.

      Documentation, time management, teamwork and asking useful questions are
      also important skills.

      These abilities develop through practice, projects and real collaboration.
    `,
    quickTake: {
      problem: "Academic knowledge does not cover every workplace situation.",
      whyItMatters:
        "Professional environments require technical and communication skills together.",
      solution:
        "Practice communication, teamwork and documentation alongside technical learning.",
    },
    tags: ["Career", "Students", "Skills", "Professional Growth"],
    likes: 198,
    featured: false,
    trending: false,
    resources: [
      {
        title: "LinkedIn Learning",
        url: "https://www.linkedin.com/learning/",
      },
    ],
  },

  {
    id: 5,
    title: "Why Most To-Do Lists Fail After One Week",
    slug: "why-to-do-lists-fail",
    category: "Productivity",
    categorySlug: "productivity",
    authorId: 4,
    author: "Mariam Khan",
    date: "September 12, 2026",
    readTime: 4,
    image:
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=1200&q=80",
    excerpt:
      "The problem with many productivity systems is not the list itself but how tasks are defined.",
    content: `
      A long task list can create the feeling of progress without producing
      meaningful results.

      One common problem is writing tasks that are too large or unclear.
      "Work on project" is very different from "create the project folder and
      write the first component."

      Breaking work into clear actions makes it easier to start and measure
      progress.

      A useful productivity system should make the next action obvious.
    `,
    quickTake: {
      problem: "Large and unclear tasks are difficult to start.",
      whyItMatters:
        "Unclear tasks create friction and make productivity systems difficult to maintain.",
      solution:
        "Convert large tasks into small, specific actions.",
    },
    tags: ["Productivity", "Planning", "Work", "Habits"],
    likes: 312,
    featured: false,
    trending: true,
    resources: [],
  },

  {
    id: 6,
    title: "How a Local Business Can Build a Useful Online Presence",
    slug: "local-business-online-presence",
    category: "Business",
    categorySlug: "business",
    authorId: 4,
    author: "Mariam Khan",
    date: "September 9, 2026",
    readTime: 6,
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80",
    excerpt:
      "A useful online presence is more than having a website. Customers need accurate information and an easy way to contact a business.",
    content: `
      Many local businesses think an online presence means simply creating a
      website or social media account.

      In practice, customers need basic information such as opening hours,
      location, services, contact details and genuine information about what
      the business provides.

      A simple, fast and mobile-friendly website can become a useful digital
      home for a local business.

      The focus should always remain on helping customers find accurate
      information quickly.
    `,
    quickTake: {
      problem: "Customers often struggle to find accurate information about local businesses.",
      whyItMatters:
        "Missing information can make customers leave before contacting the business.",
      solution:
        "Provide clear services, contact details, location and updated business information.",
    },
    tags: ["Business", "Website", "Marketing", "Local Business"],
    likes: 167,
    featured: false,
    trending: false,
    resources: [],
  },
]