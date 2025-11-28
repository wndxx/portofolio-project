import mypp from "../assets/notesImage/mypp.jpeg"
import seiko from "../assets/notesImage/seiko.png"
import levi from "../assets/notesImage/levi.jpg"
import seikowebp from "../assets/notesImage/seiko.webp"

export const notes = [
  {
  id: 1,
  slug: "dangers-of-alcohol",
  title: "The Dangers of Alcohol Consumption",
  category: "Health",
  // date: "2025-01-20",
  localImage: mypp, // ganti dengan gambar kamu sendiri
  content: [
    { 
      type: "p", 
      text: "Alcohol may look harmless and fun at first, but excessive alcohol consumption can seriously impact your physical and mental health. Many people underestimate how quickly casual drinking can lead to long-term problems." 
    },

    { type: "h2", text: "Why Alcohol Is Dangerous" },
    { 
      type: "ul", 
      items: [
        "It affects judgment and decision-making",
        "It damages vital organs such as the liver and heart",
        "It increases the risk of addiction",
        "It lowers self-control and increases risky behavior"
      ] 
    },

    { type: "h2", text: "Long-Term Health Effects" },
    { 
      type: "ol", 
      items: [
        "Liver disease such as cirrhosis or fatty liver",
        "Increased risk of heart problems",
        "Mental health issues including depression and anxiety",
        "Weaker immune system and slower body recovery"
      ] 
    },

    { 
      type: "p", 
      text: "Avoiding alcohol is one of the smartest choices you can make for your long-term well-being. A clear mind and healthy body are worth more than any temporary pleasure from alcohol." 
    }
  ]
}
,
  {
  id: 2,
  slug: "quit-smoking-guide",
  title: "How to Quit Smoking: A Simple Guide",
  category: "Health",
  // date: "2025-01-21",
  localImage: seikowebp, // ganti dengan gambar kamu sendiri
  content: [
    { 
      type: "p", 
      text: "Quitting smoking is one of the best decisions you can make for your body, mind, and future. The process may be challenging, but with the right steps and mindset, anyone can break free from nicotine addiction." 
    },

    { type: "h2", text: "Why You Should Quit Smoking" },
    { 
      type: "ul", 
      items: [
        "Improves lung and heart health",
        "Saves money from daily cigarette expenses",
        "Boosts energy and breathing quality",
        "Reduces the risk of cancer and chronic diseases"
      ] 
    },

    { type: "h2", text: "Steps to Quit Smoking" },
    { 
      type: "ol", 
      items: [
        "Set a clear quit date and commit to it",
        "Remove all cigarettes, lighters, and ashtrays around you",
        "Identify your smoking triggers and avoid them",
        "Drink more water to reduce cravings",
        "Ask friends or family for support",
        "Stay active—exercise helps reduce withdrawal symptoms"
      ] 
    },

    { 
      type: "p", 
      text: "The first few days may be tough, but every moment without a cigarette is progress. Be patient with yourself, stay consistent, and remember: your future self will thank you for choosing a healthier life." 
    }
  ]
},
{
  id: 3,
  slug: "attack-on-titan-impact",
  title: "How 'Attack on Titan' Shaped My Bones and Backbone",
  category: "Personal / Anime",
  // date: "2025-11-29",
  localImage: levi, // replace with your image
  content: [
    {
      type: "p",
      text: "Some stories come and go. Others punch a hole in your chest, rearrange your thoughts, and put a mirror in front of your fears. Attack on Titan did that — not because of monsters alone, but because it taught me how to look at walls and ask why they're there."
    },

    { type: "h2", text: "Lessons on Freedom and Choice" },
    {
      type: "p",
      text: "Freedom in AoT is not a flashy banner. It's a hard-earned horizon. The series made me realize that wanting to be free is half the battle — the other half is accepting how much you must risk to reach beyond your comfort zone."
    },
    {
      type: "ul",
      items: [
        "Freedom is messy: choices have collateral, and truth often demands sacrifice.",
        "Courage is a daily practice, not a single heroic moment.",
        "Holding on to ideals is noble, but bending smartly can save lives."
      ]
    },

    { type: "h2", text: "Facing the Brutal Truth" },
    {
      type: "p",
      text: "AoT refuses to let its characters hide behind convenient illusions. It taught me a brutal but necessary habit: look for inconvenient truths early. The sooner you face reality, the sooner you can do meaningful work to change it."
    },

    { type: "h2", text: "Resilience Is Built, Not Given" },
    {
      type: "p",
      text: "Watching characters keep moving after losing everything reframed my definition of resilience. It isn't just surviving pain — it's choosing to get up and carry something forward that matters, even when the map is burned."
    },

    { type: "h2", text: "Small Acts, Massive Impact" },
    {
      type: "ul",
      items: [
        "A single brave word can spark a revolution in someone's day.",
        "Consistent small efforts compound into real change.",
        "Leadership is service: the best leaders show the way by doing, not by shouting."
      ]
    },

    {
      type: "p",
      text: "Ultimately, Attack on Titan taught me to refuse comfort when it means abandoning responsibility. It made me less interested in safety, and more obsessed with truth, action, and legacy. If a story can change how you stand in the world, this one changed how I walk through it."
    },

    { type: "h2", text: "A Personal Promise" },
    {
      type: "p",
      text: "Because of this show I promise to chase clarity over comfort, to speak when silence hurts more than the words, and to shoulder the small, stubborn duties that make something larger possible."
    },

    {
      type: "p",
      text: "If you've been touched by a story — keep it close. Let it teach you, then let it go so you can shape your own horizon."
    }
  ]
}


];
