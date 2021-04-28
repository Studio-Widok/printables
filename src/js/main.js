import $ from 'cash-dom';

const groups = [];
$('#flag g g').each((index, element) => {
  groups.push($(element));
});

for (let i = 0; i < groups.length; i++) {
  groups[i].css({
    transformOrigin: `${((i + 0.5) * 100) / 11}% 50%`,
  });
}

let x = 0;
const FRAME_N = 700;
const AMPLITUDE = 100;
const MAX_SKEW = 10;
const FREQUENCY = 14;

function frame() {
  x = (x + 1) % FRAME_N;
  for (let i = 0; i < groups.length; i++) {
    const attr = (x / FRAME_N + i / FREQUENCY) * Math.PI * 4;
    const translate = Math.sin(attr) * AMPLITUDE;
    const skew = Math.cos(attr) * MAX_SKEW;
    groups[i].css({
      transform: `translateY(${translate}px) skewY(${skew}deg)`,
    });
  }

  requestAnimationFrame(frame);
}

frame();
