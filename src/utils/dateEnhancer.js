// eslint-disable-next-line no-extend-native
Date.prototype.addDays = function (days) {
	var date = new Date(this.valueOf());
	date.setDate(date.getDate() + days);
	return date;
};
// eslint-disable-next-line no-extend-native
Date.prototype.substractDays = function (days) {
	var date = new Date(this.valueOf());
	date.setDate(date.getDate() - days);
	return date;
};