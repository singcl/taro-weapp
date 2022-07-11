import Taro from '@tarojs/taro';
import { BASE_URL } from '@/config';
import { Code /* ,BusinessCode */ } from '@/services/code/code';
import { ZhCnText } from '@/services/code/zhCn';
//
export async function wxUpload(localPath: string) {
  const token = Taro.getStorageSync('token');
  return new Promise<Taro.uploadFile.SuccessCallbackResult>((resolve, reject) => {
    Taro.uploadFile({
      url: `${BASE_URL}/weixin/auth/avatar`,
      filePath: localPath,
      header: {
        WxToken: token,
      },
      name: 'file',
      success: resolve,
      fail: reject,
    });
  });
}

//
export async function upload(localPath: string) {
  const response = await wxUpload(localPath);
  const { /*  data, */ statusCode } = response;
  if (statusCode !== Code.HTTP_SUCCESS) {
    // 通用错误提示
    Taro.showToast({
      title: ZhCnText[statusCode],
      icon: 'error',
    });
    return Promise.reject(ZhCnText[statusCode]);
  }
  Taro.showToast({
    title: `头像更新成功`,
    icon: 'success',
    duration: 2000,
  });
  return response;
}
