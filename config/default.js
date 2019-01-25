module.exports = {


    "Redis":
        {
            "mode":"",//instance, cluster, sentinel
            "ip": "",
            "port": ,
            "user": "duo",
            "password": "",
            "sentinels":{
                "hosts": "",
                "port":,
                "name":""
            }

        },


    "Host":
        {
            "resource": "",
            "vdomain": "127.0.0.1",
            "domain": "127.0.0.1",
            "port": "3635",
            "version": "1.0.0.0",
            "HashKey":"ticket",
            "UseDashboardMsgQueue": 'false'
        },


};
