const dev_config = {
    app: {
        port: process.env.PORT || 8080

    },
    db: {
        mongo_db_url: process.env.MONGO_DB_URL || 'mongodb://localhost:27017/ecommerce_dev_db'
    },
    jwt: {
        jwt_secret: process.env.JWT || 'secret',
        jwt_expire: process.env.JWT_EXPIRE || '1d'
    }
}

const prod_config = {
    app: {
        port: process.env.PORT || 8080
    },
    db: {
        mongo_db_url: process.env.MONGO_DB_URL || 'mongodb://localhost:27017/ecommerce_prod_db'
    },
    jwt: {
        jwt_secret: process.env.JWT || 'secret',
        jwt_expire: process.env.JWT_EXPIRE || '1d'
    }
}

const config = { dev: 'dev', prod: 'prod' }

const env = process.env.NODE_ENV || 'dev'


export class GlobalConstant {
    static readonly MONGO_DB_URL = process.env.MONGO_DB_URL??'mongodb://localhost:27017/basic_blog'
    static readonly JWT_SECRET = process.env.JWT??'secret'
    static readonly JWT_EXPIRE = process.env.JWT_EXPIRE??'1d'
}