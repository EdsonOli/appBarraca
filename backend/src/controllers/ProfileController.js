const connection = require('../database/connection');

module.exports = {
    
    async index(request, response){
        const barraqueira_id = request.headers.authorization;
        const produtos = await connection('produto')
        .where('barraqueira_id', barraqueira_id)
        .select('*');
        return response.json(produtos);
    }
}