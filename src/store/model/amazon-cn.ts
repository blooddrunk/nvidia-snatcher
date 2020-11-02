import { Store } from './store';

export const AmazonCN: Store = {
	labels: {
		captcha: {
			container: 'body',
			text: ['enter the characters you see below'],
		},
		inStock: {
			container: '#desktop_buybox',
			text: ['加入购物车'],
		},
		maxPrice: {
			container: 'span[class*="PriceString"]',
			euroFormat: false,
		},
	},
	links: [
		{
			brand: 'test:brand',
			model: 'test:model',
			series: 'test:series',
			url: 'https://www.amazon.cn/dp/B07L8YGDL5/',
		},
		{
			brand: 'evga',
			model: 'ftw3 ultra',
			series: '3080',
			url: 'https://www.amazon.cn/dp/B08HR3Y5GQ/',
		},
		{
			brand: 'evga',
			model: 'tuf',
			series: '3080',
			url: 'https://www.amazon.cn/dp/B08HHDP9DW/',
		},
	],
	name: 'amazon-cn',
};
