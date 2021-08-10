const express = require('express')
const app = express()

app.get('/', (req, res) => {
    return res.json(
        [
            {
                beers: {
                    0 :{
                        name: 'Skol 300ml',
                        image: 'https://courier-images-prod.imgix.net/produc_variant/00008725_c431fbf8-5f01-4a90-aaa1-a06cff9306e8.jpg?auto=compress,format&fit=max&w=undefined&h=undefined&dpr=2',
                        price: 2.49,
                        liters : 0.3,
                        id: 'b0',
                        quantity: 0
                    },
                    1 :{
                        name: 'Skol 269ml',
                        image: 'https://courier-images-prod.imgix.net/produc_variant/00008502_8df6cda6-722b-4523-9afd-bb518ec1efb1.jpg?auto=compress,format&fit=max&w=undefined&h=undefined&dpr=2',
                        price: 2.19,
                        liters : 0.269,
                        id: 'b1',
                        quantity: 0
                    },
                    3 :{
                        name: 'Skol 473ml',
                        image: 'https://courier-images-prod.imgix.net/produc_variant/00008508_6827c5ed-1390-4438-b43e-5f671ffa930c.jpg?auto=compress,format&fit=max&w=undefined&h=undefined&dpr=2',
                        price: 2.19,
                        liters : 0.473,
                        id: 'b3',
                        quantity: 0
                    },
                    4 :{
                        name: 'Skol Puro Malte 269ml',
                        image: 'https://courier-images-prod.imgix.net/produc_variant/00009466_08d9ac90-6106-465a-af06-10a465e255a9.jpg?auto=compress,format&fit=max&w=undefined&h=undefined&dpr=2',
                        price: 2.29,
                        liters : 0.269,
                        id: 'b4',
                        quantity: 0
                    },
                    5 :{
                        name: 'Budweiser 350ml',
                        image: 'https://courier-images-prod.imgix.net/produc_variant/00008579_dfcca1fc-3364-4927-bcd6-d514c73ce88b.jpg?auto=compress,format&fit=max&w=undefined&h=undefined&dpr=2',
                        price: 3.79,
                        liters : 0.350,
                        id: 'b5',
                        quantity: 0
                    }
                }
            },
        ])
})

app.listen(8000)