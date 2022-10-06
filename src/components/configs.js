export const animeTimelineConfig = {
  easing: 'easeOutElastic(1, 0.7)',
  duration: 2500,
  delay: 300,
  direction: 'forwards',
  loop: true,
};

export const animeItemsConfig = {
  topPinkTriangle: {
    targets: '.top-pink-triangle',
    keyframes: [
      {
        translateX: 8,
        translateY: -5,
        opacity: 1,
      },
      {
        translateX: 12,
        translateY: -6,
        opacity: 0,
        duration: 1000,
      },
    ],
  },
  circleRectangle: {
    targets: '.circle-rectangle',
    keyframes: [
      {
        translateX: 2,
        translateY: -1,
        opacity: 1,
      },
      {
        translateX: 2,
        translateY: -2,
        opacity: 0,
        duration: 600,
      },
    ],
  },
  diamondPink: {
    targets: '.diamond-pink',
    keyframes: [
      {
        translateX: 0,
        translateY: -3,
        opacity: 1,
      },
      {
        translateX: -3,
        translateY: -3,
        opacity: 0,
        duration: 600,
      },
    ],
  },
  line: {
    targets: ['.line', '.squiggle'],
    keyframes: [
      {
        strokeDashoffset: [
          e => {
            const totalLength = e.getTotalLength();
            e.setAttribute('stroke-dasharray', totalLength);
            return totalLength;
          },
          0,
        ],
        opacity: [0, 1],
      },
      {
        strokeDashoffset: [
          0,
          e => {
            const totalLength = e.getTotalLength();
            e.setAttribute('stroke-dasharray', totalLength);
            return totalLength * -1;
          },
        ],
        opacity: [1, 0],
      },
    ],
  },
};
