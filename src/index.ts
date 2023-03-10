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

barba.hooks.after(async () => {
  await restartWebflow();
});

if (history.scrollRestoration) {
  history.scrollRestoration = 'manual';
}
