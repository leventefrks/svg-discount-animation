export const animeTimelineConfig = {
  easing: 'easeOutElastic(1, 0.7)',
  duration: 2500,
  delay: 300,
  direction: 'reverse',
  loop: true,
};

const lineAnimation = (event, isReversed = false) => {
  const totalLength = event.getTotalLength();
  event.setAttribute('stroke-dasharray', totalLength);
  return isReversed ? totalLength * -1 : totalLength;
};

export const animeItemsConfig = {
  lineRight: {
    targets: [
      '.blue-line--big-right',
      '.pink-squiggle',
      '.blue-squiggle--left',
    ],
    keyframes: [
      {
        strokeDashoffset: [event => lineAnimation(event), 0],
        opacity: [0, 1],
      },
      {
        strokeDashoffset: [0, event => lineAnimation(event, true)],
        opacity: [1, 0],
      },
    ],
  },
  lineLeft: {
    targets: [
      '.blue-line--big-left',
      '.blue-line',
      '.pink-line',
      '.blue-squiggle--right',
    ],
    keyframes: [
      {
        strokeDashoffset: [event => lineAnimation(event, true), 0],
        opacity: [0, 1],
      },
      {
        strokeDashoffset: [0, event => lineAnimation(event)],
        opacity: [1, 0],
      },
    ],
  },
};
