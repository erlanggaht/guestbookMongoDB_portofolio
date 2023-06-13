import guestbook from "../models/user.mjs"



class GeustBookControllers {
    
    static async create (req,res) {
        const newData = {
            name : req.body.name,
            pesan : req.body.pesan,
            limitComment : req.body.limitComment
        }

              
        // Validasi Limit
       const dataByName = await guestbook.findOne({name : req.body.name})
        if(dataByName) { 


            const getLimitComment = dataByName.limitComment
            if(getLimitComment === 5) {
                return res.json('sorry comments are limited to 5 comments :)')
            }
            
        } 


    //   Validasi Create And Update
       if(dataByName) {
         await guestbook.create(newData)
         await guestbook.updateMany({name : dataByName.name},{
            limitComment : dataByName.limitComment + 1
         }).then(() => {
            res.status(200)
         })
         
       } else {
           const createData = await guestbook.create(newData)
           if(createData) res.status(201).json({
            messages : "Thanks for comment :)",
            response : createData
           })
       }
    }

    static async get (req,res,next) {
        const getData = await guestbook.find()
        if(getData) res.status(200).json({
            messages : "berhasil mendapatkan data",
            response : {data:getData} 
        })
    }

    static async getByName (req,res) {
        const getDataByName = await guestbook.findOne({name : req.params.name})
        if(getDataByName) { res.status(200).json({
            messages : "berhasil mendapatkan data berdasarkan nama",
            response : {data:getDataByName}
        }) 
    } else {
            res.status(400).json({
                messages : `tidak ada data dengan nama ${req.params.name}` 
            })
        }
    }
}

export default GeustBookControllers