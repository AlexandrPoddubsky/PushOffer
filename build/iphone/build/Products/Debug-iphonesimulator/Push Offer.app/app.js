var view_locations_list = Ti.UI.createWindow({
	//backgroundColor: 'white'
});

var navWin = Ti.UI.iOS.createNavigationWindow({
	window: view_locations_list
});

var tableData = [ {title: 'Apples'}, {title: 'Bananas'}, {title: 'Carrots'}, {title: 'Potatoes'} ];
var tableview_locations = Ti.UI.createTableView({
	data: tableData
});
view_locations_list.add(tableview_locations);

navWin.open();
