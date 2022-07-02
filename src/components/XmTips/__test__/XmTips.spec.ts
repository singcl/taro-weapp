// XmTips.test.js
import { render, fireEvent } from '@testing-library/vue';
import { createApp } from 'vue';
import { createPinia } from 'pinia';

import XmTips from '@/components/XmTips';

const app = createApp({});
app.use(createPinia());

//
test('it should work', async () => {
  const { getByText } = render(XmTips, {
    props: {
      /* ... */
    },
  });

  // 断言输出
  getByText('0');
  const incrementButton = getByText('INCREMENT');

  // 向我们的增长按钮发送一个点击事件。
  await fireEvent.click(incrementButton);
  getByText('1');

  // 向我们的增长按钮发送一个点击事件。
  await fireEvent.click(incrementButton);
  getByText('2');

  const decrementButton = getByText('DECREMENT');

  // 向我们的增长按钮发送一个点击事件。
  await fireEvent.click(decrementButton);
  getByText('1');

  // 向我们的增长按钮发送一个点击事件。
  await fireEvent.click(decrementButton);
  getByText('0');

  // 向我们的增长按钮发送一个点击事件。
  await fireEvent.click(decrementButton);
  getByText('-1');
});
