import React from "react";

export default function YouTubeEmbed({
  videoUrl,
  title = "YouTube video player",
}) {
  // Extract video ID from standard or shortened YouTube URLs cleanly
  const getEmbedUrl = (url) => {
    let id = "";
    if (url.includes("youtu.be/")) {
      id = url.split("youtu.be/")[1]?.split("?")[0];
    } else if (url.includes("v=")) {
      id = url.split("v=")[1]?.split("&")[0];
    } else if (url.includes("embed/")) {
      id = url.split("embed/")[1]?.split("?")[0];
    }
    return `https://www.youtube.com/embed/${id}`;
  };

  return (
    <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-md bg-black">
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src={getEmbedUrl(videoUrl)}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
}
