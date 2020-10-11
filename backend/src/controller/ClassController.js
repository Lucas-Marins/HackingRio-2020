const connection = require('../database/connection')

module.exports = {
    async index(req,res){
        try {
            const { user_id, page = 1 } = req.query;

            const query = connection('classes')
            .limit(5)
            .offset((page - 1) * 5)

            const countObj = connection('classes').count()

            
            if  (user_id) {
                query
                .where({ user_id })
                .join('users', 'users.id', '=', 'classes.user_id')
                .select('classes.*', 'users.username')
                .where('users.deleted_at', null)

                countObj
                .where({ user_id })                
            }

            const [count] = await countObj
            res.header('X-Total-Count', count["count"] )

            const results = await query
            
            return res.json(results)
        } catch (error) {
            next(error)
        }
    },

    async create(req,res){
        try{
            const {name,subject} = req.body
      
            await connection('classes').insert({
                name,
                subject,
            })

            

            return res.status(201).send()
        }catch(error){
            console.log(error)
        }
    }
}