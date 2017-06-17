class SqlBook{
	static getDb3View(){
		return "Select * From Accident_Process_Response where status = 'clear' ";
	}
	static getSensorSpeed(){
		return "Seletct speedlimit From Sensor ";
	}
	static insertSensorSpeed(item_no, current_speed){
		return "Insert Into sensor_status (item_no , current_speed) Values("+item_no+","+current_speed+")";
	}
	
	static getWarn(){
		return "Select * From warn";
	}
	
	static getBroadcast(){
		return "Select * From broadcast";
	}
<<<<<<< HEAD
	
	static updateWarn(accident_id){
		return "UPDATE warn SET status = 'clear' WHERE accident_id = " + accident_id;
	}
=======
>>>>>>> 3f993ad593e7457a4ef6a66738a1aad6f48870b1
}
module.exports = SqlBook;