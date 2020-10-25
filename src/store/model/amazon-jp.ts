import {Store} from './store';

export const AmazonJP: Store = {
	labels: {
		captcha: {
			container: 'body',
			text: ['enter the characters you see below']
		},
		inStock: {
			container: '#desktop_buybox',
			text: ['カートに入れる']
		},
		maxPrice: {
			container: 'span[class*="PriceString"]',
			euroFormat: false
		}
	},
	links: [
		{
			brand: 'test:brand',
			model: 'test:model',
			series: 'test:series',
			url: 'https://www.amazon.co.jp/LG-27GN950-B-Compatible%E3%83%BBFreeSync-DisplayHDR600-DisplayPort/dp/B08CZ91HNK/'
		},
		{
			brand: 'evga',
			model: 'ps5 special',
			series: '3080',
			url: 'https://www.amazon.co.jp/dp/B08GGGCH3Y/'
		},
		{
			brand: 'asus',
			model: 'ps5',
			series: '3080',
			url: 'https://www.amazon.co.jp/dp/B08GGGBKRQ/'
		},
	
	],
	name: 'amazon-jp'
};
