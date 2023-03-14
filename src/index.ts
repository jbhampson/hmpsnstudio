import barba from '@barba/core';
import { restartWebflow } from '@finsweet/ts-utils';
import { gsap } from 'gsap';

barba.init({
  transitions: [
    {
      name: 'default',
      async leave(data) {
        console.log('leave');
        console.log(data);
        await gsap.to(data.current.container, { opacity: 0, duration: 0.5 });
      },
      async after(data) {
        console.log('afterEnter');
        console.log(data);
        await gsap.to(data.next.container, { opacity: 1, duration: 0.5 });
      },
    },
  ],
});

barba.hooks.enter(async (data) => {
  if (data.trigger !== 'back') {
    scrollY.push(barba.history.current.scroll.y);
  }
});

barba.hooks.after(async (data) => {
  await restartWebflow();
  if (data.trigger !== 'back') {
    window.scrollTo(0, 0);
  } else {
    window.scrollTo(0, scrollY.pop());
  }
});
