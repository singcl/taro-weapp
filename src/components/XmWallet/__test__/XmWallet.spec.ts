// XmWallet.test.js
import { render } from '@testing-library/vue';

import XmWallet from '@/components/XmWallet';

describe('XmWallet Props', () => {
  test('Default Props', async () => {
    const { getByText } = render(XmWallet);
    getByText('元');
    getByText(0.0);
    getByText(0);
  });
});
