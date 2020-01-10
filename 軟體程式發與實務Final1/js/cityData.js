var word = [
   {
	   Area: 'TW', City: [
		  { CName: '臺北市', EName: 'Taipei' },
	      { CName: '宜蘭縣', EName: 'Yilan' },
		  { CName: '嘉義縣', EName: 'Chiayi' },
		  { CName: '臺東縣', EName: 'Taitung' },
		  { CName: '臺中市', EName: 'Taichung' }
	   ]
   }
];

var WeekForcastUrl = 'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-091?';

var WeekChinese={
	"Mon":"一",
	"Tue":"二",
	"Wed":"三",
	"Thu":"四",
	"Fri":"五",
	"Sat":"六",
	"Sun":"日"
}


var weather_con = {
	"01":["http://pic.616pic.com/ys_bnew_img/00/13/36/ywIADlldoz.jpg","晴天"],
	"02":["http://pic.616pic.com/ys_bnew_img/00/13/36/ywIADlldoz.jpg","晴天"],
	"03":["https://i2.kknews.cc/SIG=oncrmr/191q0005s585p4qo328r.jpg","多雲"],
	"04":["https://i2.kknews.cc/SIG=oncrmr/191q0005s585p4qo328r.jpg","多雲"],
	"05":["https://i2.kknews.cc/SIG=oncrmr/191q0005s585p4qo328r.jpg","多雲"],
	"06":["https://i2.kknews.cc/SIG=oncrmr/191q0005s585p4qo328r.jpg","多雲"],
	"06":["https://i.52112.com/icon/jpg/256/20190103/27278/1359436.jpg","雨天"],
	"07":["https://i.52112.com/icon/jpg/256/20190103/27278/1359436.jpg","雨天"],
	"08":["https://i.52112.com/icon/jpg/256/20190103/27278/1359436.jpg","雨天"],
	"09":["https://i.52112.com/icon/jpg/256/20190103/27278/1359436.jpg","雨天"],
	"10":["https://i.52112.com/icon/jpg/256/20190103/27278/1359436.jpg","雨天"],
	"11":["https://i.52112.com/icon/jpg/256/20190103/27278/1359436.jpg","雨天"],
	"12":["https://i.52112.com/icon/jpg/256/20190103/27278/1359436.jpg","雨天"],
	"13":["https://i.52112.com/icon/jpg/256/20190103/27278/1359436.jpg","雨天"],
	"14":["https://i.52112.com/icon/jpg/256/20190103/27278/1359436.jpg","雨天"],
	"15":["https://i.52112.com/icon/jpg/256/20190103/27278/1359436.jpg","雨天"],
	"16":["https://i.52112.com/icon/jpg/256/20190103/27278/1359436.jpg","雨天"],
	"17":["https://i.52112.com/icon/jpg/256/20190103/27278/1359436.jpg","雨天"],
	"18":["https://i.52112.com/icon/jpg/256/20190103/27278/1359436.jpg","雨天"]
}