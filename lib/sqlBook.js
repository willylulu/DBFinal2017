class sqlBook{
	constructor(){
        this.getDb3View = "Select * from Accident_Process_Response ;"; //連到db3的view
        this.getSensor = "Seletct * from Sensor;";
    }
}

module.exports = sqlBook;