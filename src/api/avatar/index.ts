import Taro from '@tarojs/taro';
import { BASE_URL } from '@/config';
//
export async function upload(localPath: string) {
  const token = Taro.getStorageSync('token');
  return new Promise((resolve, reject) => {
    Taro.uploadFile({
      url: `${BASE_URL}/weixin/auth/avatar`,
      filePath: localPath,
      header: {
        WxToken: token,
      },
      name: 'file',
      success: function (res) {
        resolve(res);
        Taro.showToast({
          title: `头像更新成功`,
          icon: 'success',
          duration: 2000,
        });
      },
      fail: function (err) {
        reject(err);
      },
    });
  });
}
