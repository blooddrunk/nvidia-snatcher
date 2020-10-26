import { Store } from './store';

export const AmazonJP: Store = {
	labels: {
		captcha: {
			container: 'body',
			text: ['enter the characters you see below'],
		},
		inStock: {
			container: '#desktop_buybox',
			text: ['カートに入れる'],
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
			url:
				'https://www.amazon.co.jp/LG-27GN950-B-Compatible%E3%83%BBFreeSync-DisplayHDR600-DisplayPort/dp/B08CZ91HNK/',
		},
		{
			brand: 'evga',
			model: 'ps5 special',
			series: '3080',
			url: 'https://www.amazon.co.jp/dp/B08GGGCH3Y/',
		},
		{
			brand: 'evga',
			model: 'ps5',
			series: '3080',
			url: 'https://www.amazon.co.jp/dp/B08GGGBKRQ/',
		},
		{
			brand: 'evga',
			model: 'xbox x',
			series: '3080',
			url:
				'https://www.amazon.co.jp/%E3%83%9E%E3%82%A4%E3%82%AF%E3%83%AD%E3%82%BD%E3%83%95%E3%83%88-Xbox-Series-X%E2%80%8B/dp/B08GGKZ34Z/',
		},
		{
			brand: 'evga',
			model: 'xbox x special',
			series: '3080',
			url:
				'https://www.amazon.co.jp/%E3%83%9E%E3%82%A4%E3%82%AF%E3%83%AD%E3%82%BD%E3%83%95%E3%83%88-Xbox-Series-X%E2%80%8B%E3%80%90Amazon-co-jp%E7%89%B9%E5%85%B8%E3%80%91%E3%82%AA%E3%83%AA%E3%82%B8%E3%83%8A%E3%83%AB%E3%83%87%E3%82%B6%E3%82%A4%E3%83%B3%E3%82%A8%E3%82%B3%E3%83%90%E3%83%83%E3%82%B0/dp/B08GG17K5G/',
		},
	],
	name: 'amazon-jp',
};
