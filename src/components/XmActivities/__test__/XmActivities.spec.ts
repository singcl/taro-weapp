// XmActivities.test.js
import { render } from '@testing-library/vue';

import XmActivities from '@/components/XmActivities';

describe('XmActivities Props', () => {
  test('Default Props', async () => {
    const { getByText } = render(XmActivities);
    getByText('元');
    getByText(0.0);
    getByText(0);
  });
});
