"use client";
import React from "react";
import { ControlBar, Player } from "video-react";
import "video-react/dist/video-react.css"; // import css

type Props = {};

export const Video = (props: Props) => {
  return (
    <div className="w-full aspect-video rounded overflow-hidden">
      <Player
        aspectRatio="16:9"
        fluid={true}
        src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
        poster="/images/videoPoster.svg">
        <ControlBar autoHide={false} className="my-class" />
      </Player>
    </div>
  );
};
