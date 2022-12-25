local results, fields = exports.rampage_mysql.query("SELECT * FROM players");
print(results, fields)

exports.rampage_mysql.query("SELECT * FROM players", function(results, fields)
    print(results, fields)
end)