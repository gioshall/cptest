var i18n = {
	Lang: {
		// attr name [ 'zh' , 'en' ]
		'main-title': ['Click 2 Play 隨點即玩', 'Click 2 Play 隨點即玩'],
		'sub-title': ['App 試玩廣告 全新演繹方式', 'App 試玩廣告 全新演繹方式'],
		'description-01': ['點擊 Banner 立即試玩，<br>免安裝、免下載。', '點擊 Banner 立即試玩，<br>免安裝、免下載。'],
		'description-02': ['觸發使用者下載', '觸發使用者下載'],
		'features-01': ['強大眼球吸引力<br>有效<i>提升點擊率</i>', '強大眼球吸引力<br>有效<i>提升點擊率</i>'],
		'features-02': ['<i>HTML5</i> 技術 同時支持<br><i>雙平台</i>及 <i>SDK / API</i> 模式', '<i>HTML5</i> 技術 同時支持<br><i>雙平台</i>及 <i>SDK / API</i> 模式'],
		'features-03': ['<互動化提升<i>用戶體驗</i>', '<互動化提升<i>用戶體驗</i>'],
		'features-04': ['<i>降低投放單位成本</i>', '<i>降低投放單位成本</i>'],
		'quotes-title': ['菁英推薦 Click 2 Play', '菁英推薦 Click 2 Play'],

		'quote-name-01': ['Mark Zuckerberg', 'Mark Zuckerberg'],
		'quote-pos-01': ['CEO, Facebook', 'CEO, Facebook'],
		'quote-01': ['Maybe it\'s the best solution ever.', 'Maybe it\'s the best solution ever.'],

		'quote-name-02': ['Tim Cook', 'Tim Cook'],
		'quote-pos-02': ['CEO, Apple Inc.', 'CEO, Apple Inc.'],
		'quote-02': ['I\'m thrilled, it\'s amazing.', 'I\'m thrilled, it\'s amazing.'],

		'quote-name-03': ['Bono', 'Bono'],
		'quote-pos-03': ['Vocals, U2', 'Vocals, U2'],
		'quote-03': ['I want a cookie.', 'I want a cookie.'],

		'title-partner': ['我們的合作夥伴', '我們的合作夥伴'],
		'contact-btn': ['聯絡我們', '聯絡我們'],
		'contact-sub': ['將有專人聯繫，期待與您合作', '將有專人聯繫，期待與您合作'],
	},

	getText: function(msg, lang) {
		return this.Lang[msg][lang];
	}
}

var title = Object.keys(i18n.Lang);
for (var i = 0; i < title.length; i++) {
	var lang = $('html').attr('lang');
	if (lang == 'zh') {
		$('[text=' + title[i] + ']').html(i18n.getText(title[i], 0));
	}
	if (lang == 'en') {
		$('[text=' + title[i] + ']').html(i18n.getText(title[i], 1));
	}
};