const express = require('express');
app = express()
const cds = require('@sap/cds')


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
                        "id":3332,
                        "items":"Rice",
                        "description": "food",
                        "quantity": 5,
                        "amount": 140
                    },
                    {
                        "id":3333,
                        "items":"Wheat",
                        "description": "food",
                        "quantity": 10,
                        "amount": 150
                    },
                    {
                        "id":3334,
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

                await super.init();
     }
    }
    module.exports = {invoice};