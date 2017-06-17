class sqlBook{
	static getDb3View(){
		return "Select * From Accident_Process_Response ";
	}
	static getSensor(){
		return "Seletct * From Sensor ";
	}
	static updateWarn(){
		return "UPDATE warn SET status = 'clear' WHERE accident_id  IN" + 
		"(Select accident_id from Accident_Process_Response where accident_status = 'clear')";
	}

module.exports = SqlBook;