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
  dataLayer.push({ event: 'VirtualPageview', virtualPageURL: currentUrl, virtualPageTitle: title });
});

barba.hooks.enter(() => {
  let scrollX = 0;
  const newLocal = 0;
  let scrollY = newLocal;

  barba.hooks.leave(() => {
    scrollX = barba.history.current.scroll.x;
    scrollY = barba.history.current.scroll.y;
  });

  // then later in the code...
  window.scrollTo(scrollX, scrollY);
});
