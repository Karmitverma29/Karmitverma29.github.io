import TypeIt from "typeit-react";

function Intro() {
  return (
    <TypeIt
     
      getBeforeInit={(instance) => {
        instance
          .type("Full Stack Web Developer.")
          .pause(750)
          .delete()
          .pause(500)
          .type("Front-end Developer.")
          .pause(750)
          .delete()
          .type("A tech enthusiastic!")
          .delete()
          .type("Full Stack Web Developer.")
          .pause(750)
          .delete()
          .pause(500)
          .type("Front-end Developer.")
          .pause(750)
          .delete()
          .type("A tech enthusiastic!");

        return instance;
      }}
    />
  );
}

export default Intro;
