const connection = require('../database/connection')

module.exports = {
    async create(request, response){
        const { id } = request.body;
        const barraqueira = await connection('barraqueiras').where('id', id).select('name').first();
        if(!barraqueira){
            return response.status(400).json({error: 'No barraqueira found with this ID'});
        }

        return response.json(barraqueira);
    }
}