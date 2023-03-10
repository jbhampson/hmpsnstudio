import barba from '@barba/core';
import { gsap } from 'gsap';

barba.init({
  transitions: [
    {
      name: 'default',
      leave(data) {
        console.log('leave');
        console.log(data);
        gsap.to(data.current.container, { opacity: 0, duration: 1 });
      },
      enter(data) {
        console.log('enter');
        console.log(data);
        gsap.to(data.current.container, { opacity: 1, duration: 1 });
      },
    },
  ],
});
