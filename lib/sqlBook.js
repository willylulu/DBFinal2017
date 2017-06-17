class SqlBook{
	static getDb3View(){
		return "Select * From Accident_Process_Response ";
	}
<<<<<<< HEAD
	static getSensorSpeed(){
		return "Seletct speedlimit From Sensor ";
	}
	static insertSensorSpeed(item_no, current_speed){
		return "Insert Into sensor_status (item_no , current_speed) Values("+item_no+","+current_speed+")";
=======
	static getSensor(){
		return "Select * From Sensor ";
>>>>>>> e139a970a27d7ada668471c3e578e3aaf9958285
	}
	static updateWarn(){
		return "UPDATE warn SET status = 'clear' WHERE accident_id IN" + 
		"(Select accident_id from Accident_Process_Response where Accident_Process_Response.status = 'clear' ";
	}
}
module.exports = SqlBook;