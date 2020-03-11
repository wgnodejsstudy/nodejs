var q = { 
  "query" : {
    "status" : {
      "option" : "online"
    },
    "stats" : [
      {
        "type" : "and",
        "filters" : [],
        "disabled" : false
      }
    ]
  },
  "sort" : {
    "price" : "asc"
  }
}

function generateQuery(type) {
  q.query.type = type;
  return q;
}

module.exports.generateQuery = generateQuery;