const express = require('express');
app = express()
const cds = require('@sap/cds');
const { request } = require('hdb/lib/protocol');


class invoice extends cds.ApplicationService {

    async init() {
        const db = await cds.connect.to('db');

        const {invoice} = cds.entities ('cdb');

        this.on ('READ','readData', async (req) => {
            
                let results = await SELECT.from(invoice)
                console.log(JSON.stringify(results))
                return results;
            })
      
            this.on ('READ','writedata', async (req) => {
                // var { data } = req.data
                // let approvedata = JSON.parse(data)
                let approvedata = [
                    {
                        "id":43332,
                        "items":"Rice",
                        "description": "food",
                        "quantity": 5,
                        "amount": 140
                    },
                    {
                        "id":43333,
                        "items":"Wheat",
                        "description": "food",
                        "quantity": 10,
                        "amount": 150
                    },
                    {
                        "id":43334,
                        "items":"barley",
                        "description": "food",
                        "quantity":15,
                        "amount": 160
                    }
                    ]

                    for(var i=0;i<approvedata.length;i++){
        
                        
                        await INSERT.into(invoice).columns (
                            'id', 'items', 'description', 'quantity','amount'
                        ) .values (
                            approvedata[i]['id'], approvedata[i].items,approvedata[i]['description'],approvedata[i]['quantity'],approvedata[i]['amount']
                        ) ;
                        }

                        let results =  await SELECT.from(invoice);
                    return results
                })
                this.on('READ','deletedata',async(req)=>{
                    let del = await DELETE.from(invoice).where ({"id":3});
                    console.log("the delete id is: "+ del);//here del return us a number which tells how many records it is deleting
                    let results =  await SELECT.from(invoice);
                    return results;

                })

                await super.init();
     }
    }
    module.exports = {invoice};