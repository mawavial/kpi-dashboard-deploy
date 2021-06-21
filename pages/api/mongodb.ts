
import { MongoClient, Db, ObjectID} from 'mongodb'
import url from 'url'

let cachedDB: Db | null= null

export default async function connectToDatabase(uri: string) {
    try {
        if (cachedDB) {
            return cachedDB
        }
        const client = await MongoClient.connect(uri, {
            useNewUrlParser: true, 
            useUnifiedTopology: true 
        })
    
        const dbName = url.parse(uri).pathname.substr(1)
        const db = client.db(dbName)
    
        cachedDB = db
    
        return db
    }
    catch(err ){
        throw err;
    }
    
}