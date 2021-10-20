import React, { useState, useEffect, useRef } from 'react';

const Player = () => {
  const streamUrl = 'https://2ea405abac00.us-west-2.playback.live-video.net/api/video/v1/us-west-2.613431923415.channel.fNv60AcZ79AH.m3u8';
  const { IVSPlayer } = window;
  const { isPlayerSupported, PlayerState, PlayerEventType } = IVSPlayer;

  const [loading, setLoading] = useState(true);
  const [isMiniPlayer, setIsMiniPlayer] = useState(false);
  const [muted, setMuted] = useState(false);

  const [playerPosition, setPlayerPosition] = useState({});
  const [playerSize, setPlayerSize] = useState({});

  const player = useRef(null);
  const playerBaseEl = useRef(null);
  const videoEl = useRef(null);
  const visibleRef = useRef(null);

  useEffect(() => {
    if (!player.current) return;

    setMuted(player.current.isMuted());
  }, [loading]);

  useEffect(() => {
    const { ENDED, PLAYING, READY } = PlayerState;
    const { ERROR } = PlayerEventType;
    console.log(IVSPlayer);

    if (!isPlayerSupported) {
      console.warn(
        'The current browser does not support the Amazon IVS player.',
      );

      return;
    }

    const onStateChange = () => {
      const playerState = player.current.getState();

      // console.log(`Player State - ${playerState}`);
      setLoading(playerState !== PLAYING);
    };

    const onError = (err) => {
      // console.warn('Player Event - ERROR:', err);
    };

    player.current = IVSPlayer.create();
    player.current.attachHTMLVideoElement(videoEl.current);
    player.current.load(streamUrl);
    player.current.play();

    player.current.addEventListener(READY, onStateChange);
    player.current.addEventListener(PLAYING, onStateChange);
    player.current.addEventListener(ENDED, onStateChange);
    player.current.addEventListener(ERROR, onError);

    return () => {
      player.current.removeEventListener(READY, onStateChange);
      player.current.removeEventListener(PLAYING, onStateChange);
      player.current.removeEventListener(ENDED, onStateChange);
      player.current.removeEventListener(ERROR, onError);
    };
  }, [IVSPlayer, isPlayerSupported, streamUrl]);

  if (!isPlayerSupported) {
    return null;
  }

  return (
    <div className="Player">
      <video ref={videoEl} controls playsInline><track kind="captions" /></video>
    </div>
  );
};

export default Player;
