import { style, animate, animation } from '@angular/animations';

export let floatInAnimation = animation(
  [
    style({ transform: 'translateY(25px)', opacity: 0 }),
    animate('{{ duration }} {{ timing }}')
  ],
  {
    params: {
      duration: '200ms',
      timing: 'ease-out'
    }
  }
);

export let floatOutAnimation = animation(
  animate(
    '{{ duration }} {{ timing }}',
    style({
      opacity: 0,
      transform: 'translateY(25px)'
    })
  ),
  {
    params: {
      duration: '150ms',
      timing: 'ease-in'
    }
  }
);

export let fadeInAnimation = animation(
  animate('{{ duration }} {{ timing }}', style({ opacity: 1 })),
  {
    params: {
      duration: '200ms',
      timing: 'ease-out'
    }
  }
);

export let fadeOutAnimation = animation(
  animate('{{ duration }} {{ timing }}', style({ opacity: 0 })),
  {
    params: {
      duration: '150ms',
      timing: 'ease-in'
    }
  }
);
