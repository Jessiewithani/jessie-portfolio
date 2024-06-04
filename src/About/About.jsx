import '../About/styles/about.scss';

// find a nice font for the about me section that goes well with the header font

export default function About() {
  return (
    <div className="about-wrapper">
      // can incorporate pagination here
      <div className="chapter-one">
        <h1>I. The Forgotten</h1>
        <p>
          If you were to tell the younger version of me, that one day, I'd end up in the tech industry, I would never believe you. In college I switched majors about a million times, 
          and I found myself floating like a nimbus, with no direction in life whatsoever. I didn't have the slightest hint of ambition, and alongside that, I had dead end jobs that
          never secured my future, nor did it motivate me. What was the breaking point? The lo and behold immigrant dream of becoming a doctor. Was it my dream? Of course not, but it
          meant that I would finally amount to something. Being an immigrant child is no joke. After years of tirelessly chasing a vision that wasn't mine, I fumbled upon an opportunity
          that little did I know was going to change my life forever.
        </p>
      </div>
      <div className="chapter-two">
        <h1>II. The Discovery</h1>
        <p>
          A good friend of mine invited me to go to an event called, "Demo Night". I said sure, with the intention of being fed afterwards of course. When we got there, we entered a building
          and went downstairs to this sketch ass basement that had a whole bunch of tvs placed around the room with groups of people surrounding it. The hell am I looking at? That was my
          initial reaction. I followed my friend around the room like a lost dog, jumping from group to group, but what I realized was that there were presentations that were being given
          on these tvs. These groups of people, were students that attended a bootcamp called Turing (named after Alan Turing a computer scientist), and these presentations were projects that
          they created with a coding language that they learned. I was beyond mindblown. This was some pretty neat stuff! I've always used applications but never realized complexity and 
          functionality behind it. It was a cool experience... But life went on for me after that.

        </p>
      </div>
      <div className="chapter-three">
        <h1>III. The Truth</h1>
        <p>
          Several years and a lot of lost ambition later, I came across a post about an event called, "Try Coding". I wasn't doing much with my life at the time, and just really wanted to try
          something new, so I signed up and got my friend to go with me as well. Day of, we got there, entered a building, went downstairs, (sounds familiar right?) but this time to a less sketchy
          basement. We entered the classroom and it was as it said, an event to try out coding. It was divided into two days, front end and back end. During that duration, I found myself consumed 
          with the genuine joy of learning something new, something that I wanted to continue learning about, and something that I wanted to turn into a career. On the last day, we were given the
          option to check out the school's website and apply to the program if we were interested in doing so. I can't give you a metric for how long I hesitated, but believe me when I say, "I HESITATED".
          I eventually told myself, that if this was meant to be, it'll happen, and everything will fall into place. Well, it happened.
        </p>
      </div>
      <div className="chapter-four">
        <h1>IV. The Present</h1>
        <p>
          I became a Front End engineer, a passionate one at that.
        </p>
      </div>
    </div>
  )
}