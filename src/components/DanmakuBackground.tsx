import React, { useEffect, useState, memo } from 'react';
import './DanmakuBackground.css';

const DANMAKU_POOL = [
  "I scored 30... my mom's gonna kill me.",
  "50? Am I too pure or just boring?",
  "Where are the 99+ saints at?",
  "Is this test spying on my life?",
  "Question 80 made me blush lol.",
  "Help, I've done everything on this list.",
  "Is it possible to get a negative score?",
  "I'm pure because I'm shy, not because I'm good.",
  "Someone on IG posted a 10... legend.",
  "No way people are lower than me.",
  "Time to rethink my life choices after this.",
  "I don't even know what some of these mean...",
  "Is this test giving me ideas?",
  "I miss my 100/100 childhood self.",
  "My roommate is judging me for doing this.",
  "Shoutout to the 10/100 warriors.",
  "My parents would disown me if they saw this.",
  "Are people really doing all this nowadays?",
  "There goes my purity, goodbye world.",
  "Can someone explain question 120?",
  "We need a 'times heartbroken' category.",
  "I'm only low because I'm curious.",
  "I can never show this score to my crush.",
  "Wait, I'm actually a good kid?",
  "85... I can still be saved, right?",
  "Anyone else with all 'No's?",
  "I want to be wild but I'm too scared.",
  "This test knows my secrets.",
  "Imagine doing this for Truth or Dare.",
  "This feels like a police interrogation lmao.",
  "A whole new world just opened up for me.",
  "I'm pure because I haven't met 'the one' yet.",
  "30 gang, we out here.",
  "This test is a reality check.",
  "I wish I had at least one of these stories.",
  "My life is so vanilla compared to these.",
  "15... am I going to jail?",
  "My teachers would be so disappointed.",
  "Thought I was a pro, turned out to be a noob.",
  "Is anyone even reading these?",
  "The person before me had a crazy score!",
  "This feels strangely comforting.",
  "Glad I'm not the only low scorer here.",
  "Purity is an attitude, high score is a trophy.",
  "I need new friends after seeing this.",
  "Everyone here is so chaotic.",
  "I love the vibes in this community.",
  "Don't ask my score, it's 100 (in my dreams).",
  "Some things you regret, some things you don't.",
  "Is this a test or a confession booth?",
  "The test is tempting me to be bad.",
  "My score is a secret unless you tell me yours.",
  "Going to sleep early after seeing this score.",
  "Let's team up and lower the average.",
  "I want to be bad but my anxiety says no.",
  "This score is my retirement from the streets.",
  "These questions are way too specific.",
  "I was pure until I finished this test.",
  "This danmaku is so relatable it hurts.",
  "Accidentally clicked 'Select All' and panicked.",
  "Ten years ago, I was a solid 100.",
  "This score means I'm still growing up.",
  "Low score, high spirit!",
  "Who shared this in the group chat? Help.",
  "My soul feels cleansed after this.",
  "My score is lower than my height...",
  "Kids these days are built different.",
  "I'm only here for the research...",
  "How do I unlock the high score mode?",
  "My score is a eulogy for my youth.",
  "These questions are calling me out for having no life.",
  "High score = Single for too long.",
  "I'm not alone in this chaos.",
  "Let's go on a quest to lower our scores.",
  "Sending this to my ex right now.",
  "This score makes me feel old.",
  "I was pure once, then life happened.",
  "I want to be a rebel but I'm home by 9.",
  "Reading these comments is better than the test.",
  "Are everyone's scores this wild?",
  "I need a movie-style romance like this.",
  "Taking this score to my grave.",
  "If I could restart, I'd stay at 100.",
  "Is this my real life? Is this just fantasy?",
  "I need a moment to process this.",
  "Too embarrassed to say hi now.",
  "Am I the only one finding this hilarious?",
  "My score is shaking, my soul is crying.",
  "The ultimate purity check is real.",
  "I didn't even pass? Oh wait, it's purity.",
  "Higher is better, so I'm basically a saint.",
  "These comments make me feel better.",
  "The air here smells like pure intentions.",
  "My score is a monument to my past.",
  "We're all adults here (mostly).",
  "I'm only low because I'm too fun.",
  "The background vibes are immaculate.",
  "Low score, no regrets.",
  "Purity isn't a crime, low scores are fine!"
];

interface DanmakuItem {
  id: number;
  text: string;
  top: number;
  delay: number;
  duration: number;
}

const DanmakuItemComponent = memo(({ item }: { item: DanmakuItem }) => (
  <div
    className="danmaku-item"
    style={{
      top: `${item.top}%`,
      animationDelay: `${item.delay}s`,
      animationDuration: `${item.duration}s`
    }}
  >
    {item.text}
  </div>
));

export const DanmakuBackground: React.FC = () => {
  const [items, setItems] = useState<DanmakuItem[]>([]);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Delay initialization to prioritize critical content
    const timer = setTimeout(() => {
      const isMobile = window.innerWidth < 768;
      const numTracks = isMobile ? 8 : 15; 
      const maxItems = isMobile ? 20 : 45; 
      
      const shuffledPool = [...DANMAKU_POOL]
        .sort(() => Math.random() - 0.5)
        .slice(0, maxItems);
      
      const itemsPerTrack = Math.ceil(shuffledPool.length / numTracks);
      const newItems: DanmakuItem[] = [];

      for (let t = 0; t < numTracks; t++) {
        const duration = 50 + Math.random() * 40; 
        
        for (let i = 0; i < itemsPerTrack; i++) {
          const poolIndex = t * itemsPerTrack + i;
          if (poolIndex >= shuffledPool.length) break;

          const text = shuffledPool[poolIndex];
          const top = (t / numTracks) * 90 + 5; 
          const delay = i * (duration / itemsPerTrack) + (Math.random() * 10);

          newItems.push({
            id: poolIndex,
            text,
            top,
            delay,
            duration
          });
        }
      }
      setItems(newItems);
      setIsReady(true);
    }, 2000); // 2 second delay

    return () => clearTimeout(timer);
  }, []);

  if (!isReady) return null;

  return (
    <div className="danmaku-container">
      {items.map((item) => (
        <DanmakuItemComponent key={item.id} item={item} />
      ))}
    </div>
  );
};
