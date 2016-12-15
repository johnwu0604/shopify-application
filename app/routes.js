var request = require("request");

module.exports = function (app) {

    app.get('/api/orders', function (req, res) {
        request.get("https://shopicruit.myshopify.com/admin/orders.json?page=1&access_token=c32313df0d0ef512ca64d5b336a0d7c6",function(error,response,body){
            if(error){
                res.send(error)
            }else{
                res.send(body);
            }
        });
    });

    // application -------------------------------------------------------------
    app.get('*', function (req, res) {
        res.sendFile(__dirname + '/public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });


};