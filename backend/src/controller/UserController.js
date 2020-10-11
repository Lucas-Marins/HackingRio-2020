const connection = require('../database/connection')

module.exports = {
    async index(req,res){
        const results = await connection('users')

        return res.json(results)
 },

    async create(req,res){
        try {
           const { bio} = req.body
           
           await connection('users').insert({
            bio,
        })
   
           return res.status(201).send()
        } catch (error) {
            console.log(error)
        }
    }
}