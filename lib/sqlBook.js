class SqlBook{

    static getDb3View(){
        return "Select * from Accident_Process_Response ;";
    }

    static getSensor(){
        return "Select * from Sensor;";
    }
}

module.exports = SqlBook;