import {Link, Store} from '../store/model';
import {config} from '../config';
import {Print, logger} from '../logger';

import axios from 'axios';

const requestURL = `https://sc.ftqq.com/${config.notifications.severChan.scKey}.send`

export async function  sendWeChatMessage(link: Link, store: Store) {
  try {
    await axios.get(requestURL, {
      params: {
        text: Print.inStock(link, store, false, true),
        desp: `
          URL: ${link.cartUrl ? link.cartUrl : link.url},\n
          Brand: ${link.brand},\n
          Model: ${link.model}
        `
      }
    })
    logger.info(`↗ WeChat message sent`);
  } catch (error) {
    logger.error('✖ couldn\'t send WeChat message', error);
  }
}
