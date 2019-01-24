module.exports = {




    "Redis":
    {
        "mode":"SYS_REDIS_MODE",
        "ip": "SYS_REDIS_HOST",
        "port": "SYS_REDIS_PORT",
        "user": "SYS_REDIS_USER",
        "password": "SYS_REDIS_PASSWORD",
        "sentinels":{
            "hosts": "SYS_REDIS_SENTINEL_HOSTS",
            "port":"SYS_REDIS_SENTINEL_PORT",
            "name":"SYS_REDIS_SENTINEL_NAME"
        }

    },


    "Host":
    {
        "vdomain": "LB_FRONTEND",
        "domain": "HOST_NAME",
        "port": "HOST_LITETICKET_PORT",
        "version": "HOST_VERSION",
        "HashKey":"HOST_HASHKEY",
        "UseDashboardMsgQueue": 'HOST_USE_DASHBOARD_MSG_QUEUE'
    }


};

//NODE_CONFIG_DIR
