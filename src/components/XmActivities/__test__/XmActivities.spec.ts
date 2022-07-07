// XmActivities.test.js
import { render } from '@testing-library/vue';

import XmActivities from '@/components/XmActivities';

const activities = [
  { icon: 'dingdan', value: '红包', title: '我的订单', color: '#ff8201', size: '28' },
  { icon: 'daifukuan', value: '现金', title: '待付款', color: '#ff8201', size: '28' },
];

describe('XmActivities Props', () => {
  test('Default Props', async () => {
    render(XmActivities, { props: { activities: [] } });
  });
  test('Activities Props', async () => {
    const { getByText } = render(XmActivities, { props: { activities: activities } });
    getByText('我的订单');
    getByText('待付款');
    // getByText('红包'); // TODO
    // getByText('现金'); // TODO
  });
});
