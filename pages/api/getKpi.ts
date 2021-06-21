// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import connectToDatabase from './mongodb'


type Data = {
  message?: string,
  result?: any
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    const db = await connectToDatabase(process.env.URI_DB ? process.env.URI_DB :  '');
    const collection = db.collection('kpi')
    
    collection.find({"time_unit" : req.body.time_unit, 'time_unit_count':req.body.time_unit_count }).toArray((err: any, result: any) => {
        if(err) {
            return res.status(400).send({  message: 'Could not find propertie'})
        }
        return res.status(200).send({ result })
    })
}
