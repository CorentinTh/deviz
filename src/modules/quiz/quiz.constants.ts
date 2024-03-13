export const feedbackSentencesPerScore = {
  25: [
    'If you would have answered randomly, you would have scored better!',
    'Seems like your expertise lies outside the realm of this quiz!',
    'Did you try using your lucky guess? Oh wait, we need actual knowledge here!',
    'Even a broken clock is right twice a day, but you? Not so much.',
    "Your answers were as close to correct as I am to winning a Grammy. Spoiler: I can't sing.",
    'You might want to brush up on your knowledge before the next quiz!',
  ],
  50: [
    "Not too shabby, but not too shiny either. You're comfortably mediocre!",
    "You're halfway to genius or halfway to clueless. Glass half full?",
    "Looks like you guessed half of them right. Or actually knew. We'll never tell.",
    "A solid C for effort, but in the game of knowledge, it's win or learn.",
    "{score-percentage}? In a 'Did I turn off the oven?' test, that would be worrying.",
  ],
  75: [
    "Impressive! You're pretty smart, or a very good guesser.",
    "80%? You're the kind of person who reads instruction manuals, aren't you?",
    "You've nearly aced it. Missed by just a hair...or five questions.",
    'Close to perfection, but just human enough to keep things interesting.',
    "You're like a human encyclopedia! Just a few pages short.",
  ],
  100: [
    '{score-percentage}%? Show-off! But seriously, impressive work.',
    "Perfection achieved! Are you sure you didn't cheat? Just kidding, we're proud!",
    "You didn't just ace it; you rewrote the book on it.",
    'All hail the quiz master! Your throne awaits.',
    "Congratulations! You're the unicorn of quiz takers - mythical and legendary.",
  ],
} as const;
