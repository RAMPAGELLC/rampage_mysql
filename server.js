const mysql = require("mysql");

if (!mysql) throw "Unable to load mysql npm package";

var db = mysql.createConnection(GetConvar('mysql_connection_string', 'mysql://root@localhost/fivem'));

db.connect(function (err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }

    console.log('connected as id ' + db.threadId);
});

exports("query", (query, func) => {
    new Promise((resolve) => {
        db.query(query, function (error, results, fields) {
            if (error) throw error;
            if (!func && func == false) func(results, fields);
            
            resolve(results, fields);
        });
    });
});

console.log(ServerConfig)