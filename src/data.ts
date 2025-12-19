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
  probability?: number;
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
      { text: "Kissed a member of the opposite sex", emoji: "💋", category: "romance", probability: 83 },
      { text: "French kissed a member of the opposite sex", emoji: "👅", category: "romance", probability: 72 },
      { text: "Made out with a member of the opposite sex", emoji: "💑", category: "romance", probability: 71 },
      { text: "Scrogged (naked making out) with a member of the opposite sex", emoji: "🔥", category: "romance", probability: 46 },
      { text: "Cunnilingus with a member of the opposite sex", emoji: "🍭", category: "experience", probability: 34 },
      { text: "Fellatio with a member of the opposite sex", emoji: "🍦", category: "experience", probability: 38 },
      { text: "69 with a member of the opposite sex", emoji: "♋", category: "experience", probability: 21 },
      { text: "Anal intercourse with a member of the opposite sex", emoji: "🍑", category: "experience", probability: 8 },
      { text: "Felching (oral act after anal sex) with a member of the opposite sex", emoji: "🧼", category: "curiosity", probability: 0.1 },
      { text: "Sexual intercourse with a member of the opposite sex", emoji: "🏩", category: "experience", probability: 48 },
      { text: "Golden Showers (urination on partner)", emoji: "🚿", category: "curiosity", probability: 0.1 },
      { text: "Kissed a member of the same sex", emoji: "🌈", category: "curiosity", probability: 25 },
      { text: "French kissed a member of the same sex", emoji: "🏳️‍🌈", category: "curiosity", probability: 15 },
      { text: "Made out with a member of the same sex", emoji: "👬", category: "curiosity", probability: 12 },
      { text: "Scrogged (naked making out) with a member of the same sex", emoji: "✨", category: "curiosity", probability: 5 },
      { text: "Cunnilingus with a member of the same sex", emoji: "💎", category: "curiosity", probability: 4 },
      { text: "Fellatio with a member of the same sex", emoji: "🍌", category: "curiosity", probability: 4 },
      { text: "69 with a member of the same sex", emoji: "🔄", category: "curiosity", probability: 2 },
      { text: "Anal intercourse with a member of the same sex", emoji: "💫", category: "curiosity", probability: 2 },
      { text: "Felching (oral act after anal sex) with a member of the same sex", emoji: "🌀", category: "curiosity", probability: 0.1 },
    ]
  },
  {
    title: "Sexual Activity with:",
    questions: [
      { text: "An animal", emoji: "🐾", category: "curiosity", probability: 0.01 },
      { text: "An inanimate object", emoji: "🧸", category: "curiosity", probability: 20 },
      { text: "A relative", emoji: "🌳", category: "curiosity", probability: 0.01 },
      { text: "Someone asleep or passed out", emoji: "💤", category: "rebellion", probability: 0.5 },
      { text: "Someone tripping (on drugs)", emoji: "🍄", category: "rebellion", probability: 2 },
      { text: "Roommate's boyfriend or girlfriend", emoji: "🏠", category: "rebellion", probability: 1 },
      { text: "Two people (menage a trois)", emoji: "🥉", category: "experience", probability: 2 },
      { text: "More than two people (orgy)", emoji: "🎭", category: "experience", probability: 1 },
      { text: "Your advisor/freshman", emoji: "🎓", category: "boldness", probability: 2 },
      { text: "A campus police officer", emoji: "👮", category: "boldness", probability: 0.5 },
      { text: "Someone married/engaged (not to you)", emoji: "💍", category: "rebellion", probability: 1 },
      { text: "Someone over 30", emoji: "👴", category: "experience", probability: 5 },
      { text: "An ex", emoji: "🔙", category: "romance", probability: 30 },
      { text: "A faculty member", emoji: "📖", category: "boldness", probability: 0.1 },
      { text: "A prostitute", emoji: "💸", category: "experience", probability: 0.5 },
      { text: "A stranger", emoji: "👤", category: "experience", probability: 15 },
      { text: "A non-Rice stranger", emoji: "🦉", category: "experience", probability: 12 },
      { text: "Someone whose name you couldn't remember afterwards", emoji: "❓", category: "experience", probability: 5 },
    ]
  },
  {
    title: "Sexual activity:",
    questions: [
      { text: "Without birth control", emoji: "🎲", category: "boldness", probability: 8 },
      { text: "While passed out or asleep", emoji: "🛌", category: "rebellion", probability: 0.5 },
      { text: "While tied up", emoji: "⛓️", category: "curiosity", probability: 8 },
      { text: "Using food", emoji: "🍓", category: "curiosity", probability: 4 },
      { text: "With whips, chains, or other S & M type gadgets", emoji: "🖤", category: "curiosity", probability: 5 },
      { text: "Any other bizarre sexual toy", emoji: "🔋", category: "curiosity", probability: 14 },
      { text: "Standing up", emoji: "🧍", category: "experience", probability: 24 },
      { text: "Doggie style", emoji: "🐕", category: "experience", probability: 36 },
      { text: "Any other position besides woman on top or missionary", emoji: "🤸", category: "experience", probability: 40 },
      { text: "In a hot tub", emoji: "♨️", category: "romance", probability: 5 },
      { text: "Underwater", emoji: "🌊", category: "romance", probability: 8 },
      { text: "With three different people in one weekend", emoji: "📅", category: "experience", probability: 1 },
      { text: "With two different people in one night", emoji: "🌙", category: "experience", probability: 2 },
      { text: "With more than three different people in one weekend", emoji: "🗓️", category: "experience", probability: 0.5 },
      { text: "Within the last week", emoji: "⏳", category: "experience", probability: 13 },
      { text: "Within the last day", emoji: "☀️", category: "experience", probability: 5 },
      { text: "Within the last hour", emoji: "⌚", category: "experience", probability: 1 },
      { text: "More than once a day (average)", emoji: "🔁", category: "experience", probability: 2 },
      { text: "Lost virginity before this year", emoji: "🗝️", category: "experience", probability: 41 },
      { text: "Lost virginity before college (Rice)", emoji: "🏫", category: "experience", probability: 35 },
      { text: "Lost virginity before high school", emoji: "🎒", category: "experience", probability: 5 },
      { text: "Sexual activity while another person is in the room", emoji: "👀", category: "boldness", probability: 10 },
      { text: "In a classroom", emoji: "📝", category: "boldness", probability: 2 },
      { text: "In a commons, private dining room (PDR), or college library", emoji: "🍴", category: "boldness", probability: 3 },
      { text: "In the library (Fondren), any classroom building, Lovett Hall, or Ryon lab (during operating hours)", emoji: "📚", category: "boldness", probability: 4 },
      { text: "In the stadium", emoji: "🏟️", category: "boldness", probability: 2 },
      { text: "At the computer lab (Mudd)", emoji: "💻", category: "boldness", probability: 0.5 },
      { text: "On a roof or sundeck", emoji: "🌇", category: "boldness", probability: 4 },
      { text: "Willy's statue (campus landmark)", emoji: "🗿", category: "boldness", probability: 1 },
      { text: "At the beach", emoji: "🏖️", category: "romance", probability: 5 },
      { text: "In the steam tunnels", emoji: "🚇", category: "boldness", probability: 2 },
      { text: "Gotten caught or caught someone", emoji: "🚨", category: "boldness", probability: 8 },
      { text: "Seen a porno flick", emoji: "🎥", category: "curiosity", probability: 84 },
      { text: "Read Playboy, Playgirl, Penthouse, Forum or Hustler", emoji: "📰", category: "curiosity", probability: 5 },
      { text: "Seen a stripper/nude dancer", emoji: "💃", category: "curiosity", probability: 5 },
      { text: "Ordered anything that came in a plain brown wrapper (discreet packaging)", emoji: "📦", category: "curiosity", probability: 16 },
      { text: "Been flashed", emoji: "🧥", category: "curiosity", probability: 10 },
      { text: "Flashed someone", emoji: "⚡", category: "boldness", probability: 5 },
      { text: "Sunbathed nude", emoji: "🌞", category: "boldness", probability: 2 },
      { text: "Committed voyeurism", emoji: "🔭", category: "rebellion", probability: 0.5 },
      { text: "Spent the night with a member of the opposite sex", emoji: "🌃", category: "romance", probability: 52 },
      { text: "Cohabitated with a member of the opposite sex (nonsexual basis)", emoji: "🛋️", category: "romance", probability: 25 },
      { text: "Cohabitated with a member of the opposite sex (sexual basis)", emoji: "🏠", category: "romance", probability: 12 },
      { text: "Never been to church", emoji: "⛪", category: "rebellion", probability: 25 },
      { text: "Have not attended church since coming to college (Rice)", emoji: "📉", category: "rebellion", probability: 45 },
      { text: "Ditched a date", emoji: "🏃", category: "rebellion", probability: 15 },
      { text: "Masturbated", emoji: "✊", category: "experience", probability: 95 },
      { text: "Masturbated with another person present", emoji: "🤝", category: "boldness", probability: 20 },
      { text: "Masturbated using sexual aids", emoji: "🛠️", category: "curiosity", probability: 30 },
      { text: "Had a Venereal Disease (STI)", emoji: "🏥", category: "experience", probability: 4 },
      { text: "Vandalised/stolen anything from another college", emoji: "🧨", category: "rebellion", probability: 3 },
      { text: "Had an abortion", emoji: "🏥", category: "experience", probability: 1 },
      { text: "Used colored or ribbed condoms", emoji: "🎈", category: "curiosity", probability: 20 },
      { text: "Used joy jelly (lubricant), flavored underpants, etc.", emoji: "🍯", category: "curiosity", probability: 13 },
      { text: "Shoplifted", emoji: "🛍️", category: "rebellion", probability: 12 },
      { text: "Been arrested", emoji: "🚔", category: "rebellion", probability: 1 },
      { text: "Stolen a sign", emoji: "🛑", category: "rebellion", probability: 15 },
      { text: "Committed a misdemeanor (other than sign stealing)", emoji: "📜", category: "rebellion", probability: 10 },
      { text: "Cheated or violated the honor code", emoji: "📉", category: "rebellion", probability: 8 },
      { text: "Witnessed a crime", emoji: "🕵️", category: "rebellion", probability: 25 },
      { text: "Committed assault", emoji: "👊", category: "rebellion", probability: 1 },
      { text: "Been convicted of anything", emoji: "⚖️", category: "rebellion", probability: 0.5 },
      { text: "Run with Baker 13 (undie run tradition)", emoji: "🏃‍♂️", category: "boldness", probability: 10 },
      { text: "Thrown anything off of Lovett or Sid (dormitory towers)", emoji: "☄️", category: "boldness", probability: 10 },
      { text: "Driven drunk", emoji: "🚗", category: "rebellion", probability: 4 },
      { text: "Been caught driving drunk", emoji: "🛑", category: "rebellion", probability: 0.1 },
      { text: "Used fake ID", emoji: "🆔", category: "rebellion", probability: 25 },
      { text: "Own fake ID", emoji: "💳", category: "rebellion", probability: 20 },
      { text: "Gotten a parking ticket (Rice)", emoji: "🎫", category: "rebellion", probability: 41 },
      { text: "Gotten a real ticket", emoji: "🚔", category: "rebellion", probability: 15 },
      { text: "Lied on a job application", emoji: "🤥", category: "rebellion", probability: 15 },
      { text: "Owned a deadly weapon (not Mace)", emoji: "🗡️", category: "rebellion", probability: 3 },
      { text: "Assaulted a police officer or campus police", emoji: "🥊", category: "rebellion", probability: 0.1 },
      { text: "Committed statutory rape", emoji: "⚖️", category: "rebellion", probability: 0.1 },
      { text: "Committed non-statutory rape", emoji: "🚨", category: "rebellion", probability: 0.1 },
      { text: "Gone steam tunneling (exploring underground tunnels)", emoji: "🔦", category: "boldness", probability: 8 },
      { text: "Gone swimming in Rupp's pool (campus pool)", emoji: "🏊", category: "boldness", probability: 10 },
      { text: "Snuck into party or movie", emoji: "🎟️", category: "boldness", probability: 30 },
      { text: "Own Ozzy Osbourne album/tape/CD", emoji: "🎸", category: "rebellion", probability: 0.5 },
      { text: "Been to House of Guys (specific party spot)", emoji: "🏠", category: "rebellion", probability: 5 },
      { text: "Been picked up at House of Guys", emoji: "🙋", category: "rebellion", probability: 1 },
      { text: "Responded to/placed a personal ad (not in the school paper)", emoji: "🗞️", category: "curiosity", probability: 2 },
      { text: "Cruised Westheimer (a major street)", emoji: "🏎️", category: "boldness", probability: 10 },
      { text: "Gone to a singles bar", emoji: "🍸", category: "romance", probability: 8 },
      { text: "Gotten picked up", emoji: "🤝", category: "romance", probability: 12 },
      { text: "Drunk alcohol", emoji: "🍺", category: "experience", probability: 71 },
      { text: "Been drunk", emoji: "🥴", category: "experience", probability: 63 },
      { text: "Get drunk at least once a week", emoji: "🍻", category: "experience", probability: 25 },
      { text: "Vomited (Booted)", emoji: "🤮", category: "experience", probability: 47 },
      { text: "Passed out", emoji: "😵", category: "experience", probability: 30 },
      { text: "Vomited/passed out at College Night", emoji: "🎊", category: "experience", probability: 15 },
      { text: "Vomited/passed out on date", emoji: "🥀", category: "romance", probability: 5 },
      { text: "Joined Rally Club", emoji: "📣", category: "rebellion", probability: 2 },
      { text: "Vomited on faculty member/parent/Rupp", emoji: "😱", category: "boldness", probability: 0.1 },
      { text: "Used alcohol to lower inhibitions (skank)", emoji: "🥂", category: "experience", probability: 45 },
      { text: "Vomited/passed out at Esperanza/Rondelet/Archi-Arts (dances)", emoji: "💃", category: "experience", probability: 10 },
      { text: "Vomited/passed out before noon", emoji: "🌅", category: "experience", probability: 2 },
      { text: "Participated in Lovett Beerathon (or been drunk 24 hours independently)", emoji: "🏆", category: "experience", probability: 5 },
      { text: "Gone to NOD (Night of Decadence party)", emoji: "👹", category: "boldness", probability: 25 },
      { text: "Smoked", emoji: "🚬", category: "experience", probability: 25 },
      { text: "Habitually smoke", emoji: "💨", category: "experience", probability: 8 },
      { text: "Used Ecstasy (X)", emoji: "💊", category: "experience", probability: 3 },
      { text: "Smoked pot", emoji: "🌿", category: "experience", probability: 45 },
      { text: "Used cocaine", emoji: "❄️", category: "rebellion", probability: 3 },
      { text: "Used crack", emoji: "⚡", category: "rebellion", probability: 0.1 },
      { text: "Abused prescription drugs", emoji: "💊", category: "rebellion", probability: 5 },
      { text: "Mixed drugs & alcohol", emoji: "🧪", category: "rebellion", probability: 15 },
      { text: "Used drugs before college (Rice)", emoji: "🧪", category: "rebellion", probability: 20 },
      { text: "Sold drugs", emoji: "💰", category: "rebellion", probability: 2 },
      { text: "Been arrested in connection with drugs", emoji: "🚔", category: "rebellion", probability: 0.5 },
      { text: "Done shrooms", emoji: "🍄", category: "experience", probability: 12 },
      { text: "Been to Counterball (annual event)", emoji: "🏀", category: "boldness", probability: 10 }
    ]
  }
];

export const scoringCategories: ScoringCategory[] = [
  { 
    min: 145, max: 150, title: "Angelic", 
    text: "You are the definition of purity. Even a drop of rain would feel guilty touching you.", 
    verdict: "You rank in the {{ranking}} of the population. You are truly an angel in a world of temptation." 
  },
  { 
    min: 130, max: 144, title: "Saint", 
    text: "A pillar of virtue in a chaotic world.", 
    verdict: "You are in the {{ranking}} of your peers. You've maintained a high level of virtue while navigating life." 
  },
  { 
    min: 110, max: 129, title: "Pure", 
    text: "Mostly innocent, with just a hint of curiosity.", 
    verdict: "You are in the {{ranking}} range. You're beginning to explore life's mysteries, but still quite innocent." 
  },
  { 
    min: 95, max: 109, title: "Innocent", 
    text: "The world is starting to look a lot more interesting.", 
    verdict: "You are now in the {{ranking}} of the population. You've definitely left your 'innocent' days behind." 
  },
  { 
    min: 80, max: 94, title: "Curious", 
    text: "Beginning to explore the boundaries of the known world.", 
    verdict: "You rank in the {{ranking}} of souls. Your experiences are significantly beyond the average student." 
  },
  { 
    min: 65, max: 79, title: "Experienced", 
    text: "You've been around the block, and you know the shortcuts.", 
    verdict: "Your score is in the {{ranking}} of the population. You've lived a life most only read about." 
  },
  { 
    min: 50, max: 64, title: "Adventurous", 
    text: "Life is an adventure, and you're the lead explorer.", 
    verdict: "You are a living legend ({{ranking}}). Your score is so rare it barely registers on our general charts." 
  },
  { 
    min: 35, max: 49, title: "Wild", 
    text: "You don't just push the envelope; you shred it.", 
    verdict: "You have transcended the test ({{ranking}}). At this point, you're not just 'experienced', you're an outlier." 
  },
  { 
    min: 20, max: 34, title: "Party Animal", 
    text: "The party doesn't start until you walk in.", 
    verdict: "Your ranking is {{ranking}}. Your life is a statistical anomaly." 
  },
  { 
    min: 10, max: 19, title: "Fallen Angel", 
    text: "The halo is long gone, replaced by a very stylish pair of horns.", 
    verdict: "You rank in the {{ranking}} outlier. You didn't just fall from grace; you did a triple backflip into the abyss." 
  },
  { 
    min: 0, max: 9, title: "Legend", 
    text: "You've seen everything, done everything, and probably invented a few things.", 
    verdict: "You are the {{ranking}} outlier that the 'Rice Purity Test' was warned about. You don't take the test; you ARE the test." 
  },
];

