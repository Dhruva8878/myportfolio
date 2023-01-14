import React from "react";

import Typewriter from "typewriter-effect";

export const Type = () => {
  return (
    <>
      <Typewriter
        options={{
          strings: [
            "Full Stack Web Developer",
            "Music Enthusiast",
            "Creative Thinking",
            "Exploring New Places",
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 40,
        }}
      />
    </>
  );
};
