class SqlBook{
	static getDb3View(){
		return "Select * From Accident_Process_Response ";
	}
	static getSensorSpeed(){
		return "Seletct speedlimit From Sensor ";
	}
	static insertSensorSpeed(item_no, current_speed){
		return "Insert Into sensor_status (item_no , current_speed) Values("+item_no+","+current_speed+")";
	}
	static updateWarn(){
		return "UPDATE warn SET status = 'clear' WHERE accident_id IN" + 
		"(Select accident_id from Accident_Process_Response where Accident_Process_Response.status = 'clear' ";
	}
	static getWarn(){
		return "Select * From warn";
	}
	static getBroadcast(){
		return "Select * From broadcast";
	}
	static updateWarn(){
		return "UPDATE warn SET status = 'clear' WHERE accident_id IN" + 
		"(Select accident_id from Accident_Process_Response where Accident_Process_Response.status = 'clear' ";
	}
}
module.exports = SqlBook;