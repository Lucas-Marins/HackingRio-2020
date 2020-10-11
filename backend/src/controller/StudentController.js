const connection = require('../database/connection')

module.exports = {
    async index(req,res){
        const results = await connection('students')

        return res.json(results)
 },

    async create(req,res){
        try {
           const {username, period,group} = req.body
           
            await connection('students').insert({
                username,
                period,
                group
           })
   
           return res.status(201).send()
        } catch (error) {
            console.log(error)
        }
    }
}