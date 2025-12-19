export const introText = {
  title: "The New and Improved 1988 Rice Trasher Purity Test",
  description: "There's no doubt in anyone's mind that the old Purity Test, first printed in this very paper, is an enduring classic which should still be mandatory for all entering freshmen. However, it has been noted that the test is perhaps a little outdated. With this in mind, we at the backpage are proud to offer the new, improved, 1988 Purity Test.",
  instructions: "For each of the following things you have done, give yourself one point. When you're done, subtract the total from 150. This is your score. Original source: <a href=\"/rice-test\" class=\"internal-link\">The Rice Thresher (April 1, 1988)</a>",
  definitions: [
    { term: "Sexual activity", definition: "Either sexual intercourse or heavy activity with both (or all) parties naked and with orgasm as the ultimate goal. This is in response to complaints that intercourse is not always the most reliable indicator of purity." }
  ]
};

export interface Question {
  text: string;
  emoji: string;
  category?: 'romance' | 'boldness' | 'curiosity' | 'rebellion' | 'experience';
}

export interface Section {
  title?: string;
  questions: Question[];
}

export interface ScoringCategory {
  min: number;
  max: number;
  title: string;
  text: string;
  verdict: string;
}

export const sections: Section[] = [
  {
    title: "General",
    questions: [
      { text: "Kissed a member of the opposite sex", emoji: "💋", category: "romance" },
      { text: "French kissed a member of the opposite sex", emoji: "👅", category: "romance" },
      { text: "Made out with a member of the opposite sex", emoji: "💑", category: "romance" },
      { text: "Scrogged (naked making out) with a member of the opposite sex", emoji: "🔥", category: "romance" },
      { text: "Cunnilingus with a member of the opposite sex", emoji: "🍭", category: "experience" },
      { text: "Fellatio with a member of the opposite sex", emoji: "🍦", category: "experience" },
      { text: "69 with a member of the opposite sex", emoji: "♋", category: "experience" },
      { text: "Anal intercourse with a member of the opposite sex", emoji: "🍑", category: "experience" },
      { text: "Felching (oral act after anal sex) with a member of the opposite sex", emoji: "🧼", category: "curiosity" },
      { text: "Sexual intercourse with a member of the opposite sex", emoji: "🏩", category: "experience" },
      { text: "Golden Showers (urination on partner)", emoji: "🚿", category: "curiosity" },
      { text: "Kissed a member of the same sex", emoji: "🌈", category: "curiosity" },
      { text: "French kissed a member of the same sex", emoji: "🏳️‍🌈", category: "curiosity" },
      { text: "Made out with a member of the same sex", emoji: "👬", category: "curiosity" },
      { text: "Scrogged (naked making out) with a member of the same sex", emoji: "✨", category: "curiosity" },
      { text: "Cunnilingus with a member of the same sex", emoji: "💎", category: "curiosity" },
      { text: "Fellatio with a member of the same sex", emoji: "🍌", category: "curiosity" },
      { text: "69 with a member of the same sex", emoji: "🔄", category: "curiosity" },
      { text: "Anal intercourse with a member of the same sex", emoji: "💫", category: "curiosity" },
      { text: "Felching (oral act after anal sex) with a member of the same sex", emoji: "🌀", category: "curiosity" },
    ]
  },
  {
    title: "Sexual Activity with:",
    questions: [
      { text: "An animal", emoji: "🐾", category: "curiosity" },
      { text: "An inanimate object", emoji: "🧸", category: "curiosity" },
      { text: "A relative", emoji: "🌳", category: "curiosity" },
      { text: "Someone asleep or passed out", emoji: "💤", category: "rebellion" },
      { text: "Someone tripping (on drugs)", emoji: "🍄", category: "rebellion" },
      { text: "Roommate's boyfriend or girlfriend", emoji: "🏠", category: "rebellion" },
      { text: "Two people (menage a trois)", emoji: "🥉", category: "experience" },
      { text: "More than two people (orgy)", emoji: "🎭", category: "experience" },
      { text: "Your advisor/freshman", emoji: "🎓", category: "boldness" },
      { text: "A campus police officer", emoji: "👮", category: "boldness" },
      { text: "Someone married/engaged (not to you)", emoji: "💍", category: "rebellion" },
      { text: "Someone over 30", emoji: "👴", category: "experience" },
      { text: "An ex", emoji: "🔙", category: "romance" },
      { text: "A faculty member", emoji: "📖", category: "boldness" },
      { text: "A prostitute", emoji: "💸", category: "experience" },
      { text: "A stranger", emoji: "👤", category: "experience" },
      { text: "A non-Rice stranger", emoji: "🦉", category: "experience" },
      { text: "Someone whose name you couldn't remember afterwards", emoji: "❓", category: "experience" },
    ]
  },
  {
    title: "Sexual activity:",
    questions: [
      { text: "Without birth control", emoji: "🎲", category: "boldness" },
      { text: "While passed out or asleep", emoji: "🛌", category: "rebellion" },
      { text: "While tied up", emoji: "⛓️", category: "curiosity" },
      { text: "Using food", emoji: "🍓", category: "curiosity" },
      { text: "With whips, chains, or other S & M type gadgets", emoji: "🖤", category: "curiosity" },
      { text: "Any other bizarre sexual toy", emoji: "🔋", category: "curiosity" },
      { text: "Standing up", emoji: "🧍", category: "experience" },
      { text: "Doggie style", emoji: "🐕", category: "experience" },
      { text: "Any other position besides woman on top or missionary", emoji: "🤸", category: "experience" },
      { text: "In a hot tub", emoji: "♨️", category: "romance" },
      { text: "Underwater", emoji: "🌊", category: "romance" },
      { text: "With three different people in one weekend", emoji: "📅", category: "experience" },
      { text: "With two different people in one night", emoji: "🌙", category: "experience" },
      { text: "With more than three different people in one weekend", emoji: "🗓️", category: "experience" },
      { text: "Within the last week", emoji: "⏳", category: "experience" },
      { text: "Within the last day", emoji: "☀️", category: "experience" },
      { text: "Within the last hour", emoji: "⌚", category: "experience" },
      { text: "More than once a day (average)", emoji: "🔁", category: "experience" },
      { text: "Lost virginity before this year", emoji: "🗝️", category: "experience" },
      { text: "Lost virginity before college (Rice)", emoji: "🏫", category: "experience" },
      { text: "Lost virginity before high school", emoji: "🎒", category: "experience" },
      { text: "Sexual activity while another person is in the room", emoji: "👀", category: "boldness" },
      { text: "In a classroom", emoji: "📝", category: "boldness" },
      { text: "In a commons, private dining room (PDR), or college library", emoji: "🍴", category: "boldness" },
      { text: "In the library (Fondren), any classroom building, Lovett Hall, or Ryon lab (during operating hours)", emoji: "📚", category: "boldness" },
      { text: "In the stadium", emoji: "🏟️", category: "boldness" },
      { text: "At the computer lab (Mudd)", emoji: "💻", category: "boldness" },
      { text: "On a roof or sundeck", emoji: "🌇", category: "boldness" },
      { text: "Willy's statue (campus landmark)", emoji: "🗿", category: "boldness" },
      { text: "At the beach", emoji: "🏖️", category: "romance" },
      { text: "In the steam tunnels", emoji: "🚇", category: "boldness" },
      { text: "Gotten caught or caught someone", emoji: "🚨", category: "boldness" },
      { text: "Seen a porno flick", emoji: "🎥", category: "curiosity" },
      { text: "Read Playboy, Playgirl, Penthouse, Forum or Hustler", emoji: "📰", category: "curiosity" },
      { text: "Seen a stripper/nude dancer", emoji: "💃", category: "curiosity" },
      { text: "Ordered anything that came in a plain brown wrapper (discreet packaging)", emoji: "📦", category: "curiosity" },
      { text: "Been flashed", emoji: "🧥", category: "curiosity" },
      { text: "Flashed someone", emoji: "⚡", category: "boldness" },
      { text: "Sunbathed nude", emoji: "🌞", category: "boldness" },
      { text: "Committed voyeurism", emoji: "🔭", category: "rebellion" },
      { text: "Spent the night with a member of the opposite sex", emoji: "🌃", category: "romance" },
      { text: "Cohabitated with a member of the opposite sex (nonsexual basis)", emoji: "🛋️", category: "romance" },
      { text: "Cohabitated with a member of the opposite sex (sexual basis)", emoji: "🏠", category: "romance" },
      { text: "Never been to church", emoji: "⛪", category: "rebellion" },
      { text: "Have not attended church since coming to college (Rice)", emoji: "📉", category: "rebellion" },
      { text: "Ditched a date", emoji: "🏃", category: "rebellion" },
      { text: "Masturbated", emoji: "✊", category: "experience" },
      { text: "Masturbated with another person present", emoji: "🤝", category: "boldness" },
      { text: "Masturbated using sexual aids", emoji: "🛠️", category: "curiosity" },
      { text: "Had a Venereal Disease (STI)", emoji: "🏥", category: "experience" },
      { text: "Vandalised/stolen anything from another college", emoji: "🧨", category: "rebellion" },
      { text: "Had an abortion", emoji: "🏥", category: "experience" },
      { text: "Used colored or ribbed condoms", emoji: "🎈", category: "curiosity" },
      { text: "Used joy jelly (lubricant), flavored underpants, etc.", emoji: "🍯", category: "curiosity" },
      { text: "Shoplifted", emoji: "🛍️", category: "rebellion" },
      { text: "Been arrested", emoji: "🚔", category: "rebellion" },
      { text: "Stolen a sign", emoji: "🛑", category: "rebellion" },
      { text: "Committed a misdemeanor (other than sign stealing)", emoji: "📜", category: "rebellion" },
      { text: "Cheated or violated the honor code", emoji: "📉", category: "rebellion" },
      { text: "Witnessed a crime", emoji: "🕵️", category: "rebellion" },
      { text: "Committed assault", emoji: "👊", category: "rebellion" },
      { text: "Been convicted of anything", emoji: "⚖️", category: "rebellion" },
      { text: "Run with Baker 13 (undie run tradition)", emoji: "🏃‍♂️", category: "boldness" },
      { text: "Thrown anything off of Lovett or Sid (dormitory towers)", emoji: "☄️", category: "boldness" },
      { text: "Driven drunk", emoji: "🚗", category: "rebellion" },
      { text: "Been caught driving drunk", emoji: "🛑", category: "rebellion" },
      { text: "Used fake ID", emoji: "🆔", category: "rebellion" },
      { text: "Own fake ID", emoji: "💳", category: "rebellion" },
      { text: "Gotten a parking ticket (Rice)", emoji: "🎫", category: "rebellion" },
      { text: "Gotten a real ticket", emoji: "🚔", category: "rebellion" },
      { text: "Lied on a job application", emoji: "🤥", category: "rebellion" },
      { text: "Owned a deadly weapon (not Mace)", emoji: "🗡️", category: "rebellion" },
      { text: "Assaulted a police officer or campus police", emoji: "🥊", category: "rebellion" },
      { text: "Committed statutory rape", emoji: "⚖️", category: "rebellion" },
      { text: "Committed non-statutory rape", emoji: "🚨", category: "rebellion" },
      { text: "Gone steam tunneling (exploring underground tunnels)", emoji: "🔦", category: "boldness" },
      { text: "Gone swimming in Rupp's pool (campus pool)", emoji: "🏊", category: "boldness" },
      { text: "Snuck into party or movie", emoji: "🎟️", category: "boldness" },
      { text: "Own Ozzy Osbourne album/tape/CD", emoji: "🎸", category: "rebellion" },
      { text: "Been to House of Guys (specific party spot)", emoji: "🏠", category: "rebellion" },
      { text: "Been picked up at House of Guys", emoji: "🙋", category: "rebellion" },
      { text: "Responded to/placed a personal ad (not in the school paper)", emoji: "🗞️", category: "curiosity" },
      { text: "Cruised Westheimer (a major street)", emoji: "🏎️", category: "boldness" },
      { text: "Gone to a singles bar", emoji: "🍸", category: "romance" },
      { text: "Gotten picked up", emoji: "🤝", category: "romance" },
      { text: "Drunk alcohol", emoji: "🍺", category: "experience" },
      { text: "Been drunk", emoji: "🥴", category: "experience" },
      { text: "Get drunk at least once a week", emoji: "🍻", category: "experience" },
      { text: "Vomited (Booted)", emoji: "🤮", category: "experience" },
      { text: "Passed out", emoji: "😵", category: "experience" },
      { text: "Vomited/passed out at College Night", emoji: "🎊", category: "experience" },
      { text: "Vomited/passed out on date", emoji: "🥀", category: "romance" },
      { text: "Joined Rally Club", emoji: "📣", category: "rebellion" },
      { text: "Vomited on faculty member/parent/Rupp", emoji: "😱", category: "boldness" },
      { text: "Used alcohol to lower inhibitions (skank)", emoji: "🥂", category: "experience" },
      { text: "Vomited/passed out at Esperanza/Rondelet/Archi-Arts (dances)", emoji: "💃", category: "experience" },
      { text: "Vomited/passed out before noon", emoji: "🌅", category: "experience" },
      { text: "Participated in Lovett Beerathon (or been drunk 24 hours independently)", emoji: "🏆", category: "experience" },
      { text: "Gone to NOD (Night of Decadence party)", emoji: "👹", category: "boldness" },
      { text: "Smoked", emoji: "🚬", category: "experience" },
      { text: "Habitually smoke", emoji: "💨", category: "experience" },
      { text: "Used Ecstasy (X)", emoji: "💊", category: "experience" },
      { text: "Smoked pot", emoji: "🌿", category: "experience" },
      { text: "Used cocaine", emoji: "❄️", category: "rebellion" },
      { text: "Used crack", emoji: "⚡", category: "rebellion" },
      { text: "Abused prescription drugs", emoji: "💊", category: "rebellion" },
      { text: "Mixed drugs & alcohol", emoji: "🧪", category: "rebellion" },
      { text: "Used drugs before college (Rice)", emoji: "🧪", category: "rebellion" },
      { text: "Sold drugs", emoji: "💰", category: "rebellion" },
      { text: "Been arrested in connection with drugs", emoji: "🚔", category: "rebellion" },
      { text: "Done shrooms", emoji: "🍄", category: "experience" },
      { text: "Been to Counterball (annual event)", emoji: "🏀", category: "boldness" }
    ]
  }
];

export const scoringCategories: ScoringCategory[] = [
  { 
    min: 145, max: 150, title: "Angelic", 
    text: "You are the definition of purity. Even a drop of rain would feel guilty touching you.", 
    verdict: "Your purity exceeds 99% of the population. Are you a literal angel or just very, very good at saying no?" 
  },
  { 
    min: 130, max: 144, title: "Saint", 
    text: "A pillar of virtue in a chaotic world.", 
    verdict: "You've dipped your toes into the pool of life, but you're still wearing your floaties. Stay pure!" 
  },
  { 
    min: 110, max: 129, title: "Pure", 
    text: "Mostly innocent, with just a hint of curiosity.", 
    verdict: "You're like a vanilla cupcake. Sweet, classic, and maybe a little bit predictable—but everyone loves a cupcake." 
  },
  { 
    min: 95, max: 109, title: "Innocent", 
    text: "The world is starting to look a lot more interesting.", 
    verdict: "You've seen some things, but your halo is still mostly intact. Just don't let it slip over your eyes." 
  },
  { 
    min: 80, max: 94, title: "Curious", 
    text: "Beginning to explore the boundaries of the known world.", 
    verdict: "You're in the 'Danger Zone' of curiosity. One more party and that halo might start looking like a necklace." 
  },
  { 
    min: 65, max: 79, title: "Experienced", 
    text: "You've been around the block, and you know the shortcuts.", 
    verdict: "You've definitely graduated from the school of 'Wait, we can do that?'. You're the one teaching the freshmen now." 
  },
  { 
    min: 50, max: 64, title: "Adventurous", 
    text: "Life is an adventure, and you're the lead explorer.", 
    verdict: "Your bucket list is mostly checked off. At this point, you're not just 'experienced', you're a subject matter expert." 
  },
  { 
    min: 35, max: 49, title: "Wild", 
    text: "You don't just push the envelope; you shred it.", 
    verdict: "Your life story is probably restricted in 14 countries. Have you considered writing a memoir? Or hiring a lawyer?" 
  },
  { 
    min: 20, max: 34, title: "Party Animal", 
    text: "The party doesn't start until you walk in.", 
    verdict: "You've seen the sunrise more times than a baker. Your 'purity' is now a collector's item because it's so rare." 
  },
  { 
    min: 10, max: 19, title: "Fallen Angel", 
    text: "The halo is long gone, replaced by a very stylish pair of horns.", 
    verdict: "You didn't just fall from grace; you did a triple backflip into the abyss. And honestly? It looks good on you." 
  },
  { 
    min: 0, max: 9, title: "Legend", 
    text: "You've seen everything, done everything, and probably invented a few things.", 
    verdict: "You are the person the 'Rice Purity Test' was warned about. You don't take the test; you ARE the test." 
  },
];

