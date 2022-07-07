// XmSimpleCard.test.js
import { render } from '@testing-library/vue';

import XmSimpleCard from '@/components/XmSimpleCard';

//
test('Layout default slot', async () => {
  const { getByText } = render(XmSimpleCard, {
    slots: {
      default: 'THIS IS A DEFAULT SLOT',
    },
  });
  getByText('THIS IS A DEFAULT SLOT');
});
