const connections = require('../database/connection')


module.exports = {
 async index(req,res){
        const results = await connections('pontuations')

        return res.json(results)
 },

 async create(req,res){
     try {
        const{insignes,students_id} = req.body
        
        await connection('pontuations').insert({
            insignes,
            students_id,
        })

        return res.status(201).send()
     } catch (error) {
         console.log(error)
     }
 }
}