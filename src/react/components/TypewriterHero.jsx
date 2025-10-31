import Typewriter from "typewriter-effect";

export default function TypewriterHero() {
  return (
    <h3 className="text-2xl md:text-2xl font-heading font-bold text-primary-400 text-right">
      <Typewriter
        options={{
          strings: [
            "I am Front-End Developer.",
            "I am Creative.",
            "I am always willing to learn.",
            "I am a problem solver.",
            "I'm a Hard Worker.",
          ],
          autoStart: true,
          loop: true,
          delay: 60,
          deleteSpeed: 40,
          pauseFor: 1500,
          cursor: "|",
        }}
      />
    </h3>
  );
}
