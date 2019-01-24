module.exports = {


    "Redis":
        {
            "mode":"sentinel",//instance, cluster, sentinel
            "ip": "45.55.142.207",
            "port": 6389,
            "user": "duo",
            "password": "DuoS123",
            "sentinels":{
                "hosts": "138.197.90.92,45.55.205.92,138.197.90.92",
                "port":16389,
                "name":"redis-cluster"
            }

        },


    "Host":
        {
            "resource": "cluster",
            "vdomain": "127.0.0.1",
            "domain": "127.0.0.1",
            "port": "3635",
            "version": "1.0.0.0",
            "HashKey":"ticket",
            "UseDashboardMsgQueue": 'false'
        },


};