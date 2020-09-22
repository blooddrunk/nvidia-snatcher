import {Config} from '../config';
import {Link} from '../store/model';
import {Logger} from '../logger';
import axios from 'axios';

const requestURL = `https://sc.ftqq.com/${Config.notifications.severChan.scKey}.send`

export async function  sendWeChatMessage(cartUrl: string, link: Link) {
  try {
    await axios.get(requestURL, {
      params: {
        text: 'Stock_Notification',
        desp: `
          URL: ${cartUrl},\n
          Brand: ${link.brand},\n
          Model: ${link.model}
        `
      }
    })
    Logger.info(`↗ WeChat message sent: ${cartUrl}`);
  } catch (error) {
    Logger.error(error);
  }
}
