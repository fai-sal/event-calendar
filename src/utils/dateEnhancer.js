Date.prototype.addDays = function (days) {
	var date = new Date(this.valueOf());
	date.setDate(date.getDate() + days);
	return date;
};
Date.prototype.substractDays = function (days) {
	var date = new Date(this.valueOf());
	date.setDate(date.getDate() - days);
	return date;
};