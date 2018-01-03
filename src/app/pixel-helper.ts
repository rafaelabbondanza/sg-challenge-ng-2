import { Constants } from './constants';

export class PixelHelper {
  private static path = Constants.BASE_PATH() + 'api/pixels?code=';
  static generateImgTag(pxCode: string): string {
    return '<img src="' + PixelHelper.path + pxCode +'" height="0" width="0" />';
  }
}
