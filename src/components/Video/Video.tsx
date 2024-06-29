"use client";
import React from "react";
import { ControlBar, Player } from "video-react";
import "video-react/dist/video-react.css"; // import css

type Props = {};

export const Video = (props: Props) => {
  return (
    <div className="w-full aspect-video rounded overflow-hidden xl:mt-5">
      <Player
        aspectRatio="16:9"
        fluid={true}
        src="https://cdn.cs50xshirazu.ir/intro.mp4"
        poster="/images/videoPoster.svg">
        <ControlBar autoHide={false} className="my-class" />
      </Player>
    </div>
  );
};
