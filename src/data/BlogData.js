import blog1 from "../assets/blog1.png";
import blog2 from "../assets/blog2.png";
import blog3 from "../assets/blog3.png";
import blog4 from "../assets/blog4.png";
import blog5 from "../assets/blog5.png";
import blog6 from "../assets/blog6.png";
import blog7 from "../assets/blog7.png";
import blog8 from "../assets/blog8.png";
import blog9 from "../assets/blog9.png";
import blog10 from "../assets/blog10.png";

import author1 from "../assets/author1.png";
import author2 from "../assets/author2.png";
import author3 from "../assets/author3.png";
import author4 from "../assets/author4.png";
import author5 from "../assets/author5.png";
import author6 from "../assets/author6.png";
import author7 from "../assets/author7.png";
import author8 from "../assets/author8.png";
import author9 from "../assets/author9.png";

const BlogData = [
  {
    id: 1,
    title:
      "Breaking into Product Design: Advice from Untitled Founder, Frankie",
    author: "Frankie Sullivan",
    authorImg: author1,
    createdAt: new Date("2025-08-01"),
    description:
      "Let’s get one thing out of the way: you don’t need a fancy Bachelor’s Degree to get into Product Design. We sat down with Frankie Sullivan to talk about gatekeeping in product design and how anyone can enter this growing industry. Frankie shares personal stories, the challenges she faced, and practical steps you can take to build a portfolio, even if you’re starting from scratch.",
    content: `
      Product design is an ever-evolving field where creativity meets functionality. Frankie emphasizes that the real key is problem-solving—understanding users, identifying their pain points, and designing solutions that work for them. 

      She also points out that networking plays a big role. Reach out to people in the field, attend local design meetups, and don't hesitate to ask for feedback on your work. Tools like Figma, Sketch, and Adobe XD are accessible to beginners, and online courses can help you master them quickly.

      Above all, Frankie’s main advice is to start now. Don’t wait until you “feel ready” — the best way to learn design is by doing it.
    `,
    image: blog1,
  },
  {
    id: 2,
    title: "Migrating to Linear 101",
    author: "Nebiyu Musbah",
    authorImg: author1,
    createdAt: new Date("2025-07-19"),
    description:
      "Linear helps streamline software projects, sprints, tasks & bug tracking. Here’s how to get started and make your workflow seamless.",
    content: `
      Linear is a powerful project management tool designed for speed and efficiency. In this guide, we walk through setting up your first workspace, inviting your team, and organizing your backlog into sprints. 

      Nebiyu also covers integrations with GitHub, Slack, and other productivity tools that make collaboration easier. One pro tip: use keyboard shortcuts to navigate Linear — they can save you hours every week.
    `,
    image: blog2,
  },
  {
    id: 3,
    title: "The Power of Morning Routines",
    author: "Abdulaziz Isa",
    authorImg: author2,
    createdAt: new Date("2025-06-07"),
    description:
      "Discover how a simple morning routine can boost productivity and improve mental health. Ready to transform your mornings?",
    content: `
      Research shows that starting your day with intention can significantly improve your productivity and mood. Abdulaziz shares his own morning routine: waking up at 6 AM, doing 10 minutes of meditation, 20 minutes of exercise, and 30 minutes of focused reading before checking emails. 

      This simple yet effective structure reduces stress and sets a positive tone for the rest of the day.
    `,
    image: blog3,
  },
  {
    id: 4,
    title: "Meal Prep in Minutes",
    author: "Emily Carter",
    authorImg: author3,
    createdAt: new Date("2025-07-28"),
    description:
      "Short on time? These easy meal prep hacks will keep you eating healthy without spending hours in the kitchen.",
    content: `
      Meal prepping doesn’t have to be complicated. Emily shares quick recipes, storage tips, and the best kitchen tools to save time. She recommends batch cooking grains, roasting vegetables in bulk, and preparing protein-rich snacks in advance.

      By investing one hour on Sundays, you can have healthy meals ready for the entire week.
    `,
    image: blog4,
  },
  {
    id: 5,
    title: "Stay Focused at Home",
    author: "Sophia Nguyen",
    authorImg: author4,
    createdAt: new Date("2025-07-24"),
    description:
      "Struggling with focus while working remotely? Try these proven strategies to stay productive.",
    content: `
      Working from home comes with unique distractions. Sophia discusses how to set boundaries, create a dedicated workspace, and use time-blocking to stay on task. She also shares tools like Pomodoro timers and noise-canceling apps to boost concentration.
    `,
    image: blog5,
  },
  {
    id: 6,
    title: "Journaling for Clarity",
    author: "Sadam Hussien",
    authorImg: author5,
    createdAt: new Date("2025-07-19"),
    description:
      "Writing just a few minutes a day can improve mental clarity and reduce stress. Here's how to start your journaling habit.",
    content: `
      Journaling helps process emotions, clarify goals, and track personal growth. Sadam suggests starting with just one sentence a day, focusing on gratitude or intentions. Over time, you’ll develop deeper reflections and better self-awareness.
    `,
    image: blog6,
  },
  {
    id: 7,
    title: "Stretch at Your Desk",
    author: "John Smith",
    authorImg: author6,
    createdAt: new Date("2025-05-01"),
    description:
      "Sitting all day can cause stiffness — try these easy stretches to stay limber and pain-free.",
    content: `
      John shares five simple stretches you can do without leaving your chair, improving posture and reducing back pain. He also explains how micro-breaks every hour can increase energy levels.
    `,
    image: blog7,
  },
  {
    id: 8,
    title: "Try a Digital Detox",
    author: "Ryan Foster",
    authorImg: author7,
    createdAt: new Date("2025-04-16"),
    description:
      "Constant screen time draining your energy? Learn how a short digital detox can refresh your mind.",
    content: `
      Ryan talks about his weekend experiment of turning off all screens and spending time outdoors. The result? Better sleep, improved mood, and a fresh perspective on work-life balance.
    `,
    image: blog8,
  },
  {
    id: 9,
    title: "Travel for Less",
    author: "Olivia Bennett",
    authorImg: author8,
    createdAt: new Date("2025-04-09"),
    description:
      "Traveling doesn’t have to break the bank. Discover smart ways to save on flights, stays, and more.",
    content: `
      Olivia lists her favorite budget travel hacks — from using flight deal alerts to booking local homestays instead of hotels. She also shares packing tips to avoid baggage fees.
    `,
    image: blog9,
  },
  {
    id: 10,
    title: "Read More in 30 Days",
    author: "Daniel Harris",
    authorImg: author9,
    createdAt: new Date("2025-03-03"),
    description:
      "Always wanted to read more? This simple 30-day challenge will make reading a daily habit.",
    content: `
      Daniel outlines a step-by-step challenge: start with short books, schedule reading time, and gradually increase daily minutes. By the end of the month, reading will feel natural.
    `,
    image: blog10,
  },
];

export default BlogData;
