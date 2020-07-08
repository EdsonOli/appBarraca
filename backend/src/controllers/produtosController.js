const connection = require('../database/connection');
const { count } = require('../database/connection');

module.exports = {
   
    async index(request, response) {

        const {page = 1} = request.query;
        const [count] = await connection('produto').count();
        const produtos = await connection('produto')
            .join('barraqueiras', 'barraqueiras.id', '=', 'produto.barraqueira_id')
            .limit(5)
            .offset((page - 1) * 5)
            .select([
                'produto.*',
                'barraqueiras.name', 
                'barraqueiras.email', 
                'barraqueiras.whatsapp', 
                'barraqueiras.city', 
                'barraqueiras.uf' ]);

        response.header('X-Total-Count', count['count(*)']);
        return response.json(produtos);
    },

    async create(request, response) {
        const {name, description, price, main_ingredient} = request.body;
        const barraqueira_id = request.headers.authorization;

        const [id] = await connection('produto').insert({
            name,
            description,
            price,
            barraqueira_id,
            main_ingredient,

        });

        return response.json({id});
    },
    async delete(request, response) {
        const { id } = request.params;
        const barraqueira_id = request.headers.authorization;
        const protuto = await connection('produto')
        .where('id', id)
        .select('barraqueira_id')
        .first();
        if(protuto.barraqueira_id != barraqueira_id){
            return response.status(401).json({error: 'operation not permitted.'});
        }

        await connection('produto').where('id', id).delete();
        return response.status(204).send();
    }
}