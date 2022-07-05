// XmSimpleCard.test.js
import { render } from '@testing-library/vue';

import XmSimpleCard from '@/components/XmSimpleCard';

//
test('it should work', async () => {
  render(XmSimpleCard, {
    props: {
      /* ... */
    },
    slots: {
      default: 'This is a slot',
    },
  });

  // TODO 插槽 Test
});
