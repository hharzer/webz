import * as Lodash from 'lodash';

var config = {
    port: 3000,
    base_url:'../',
    controllers: 'controllers',
    cors: {
        enabled:false,
        origin: "*",
        allowMethods: "*",
        credentials:true,
        allowHeaders:'Content-Type, Authorization',
        optionsUrl:false
    },
    resources:["/public"],
    filter: {
        enabled:true,
        exceptions: ['*.css','*.js','*.html'],
        filters:[ 
            'filters/security.filter'
        ],
        security:{
            exceptions: ['*login','*logout','*public/*.css','*public/*.js','*public/*.html']
        }
    },
    view:{
        engine: 'handlebars',
        base:"view"
    },
    error: {
        engine: 'handlebars',
        "404": 'view/error/404.page.html'
    },
    websocket: {
        enabled:false
    }
};
var cfg = {};
config = Lodash.defaultsDeep({},cfg,config);

export class Configuration{
    public static instance:Configuration;
    private config:any;

    constructor(c:any){
        this.config = c;
    }
    public static getInstance():Configuration{
        if(!Configuration.instance){
            Configuration.instance = new Configuration(config);
        }
        return Configuration.instance;
    }
    public getConfig():any{
        return this.config;
    }
}
