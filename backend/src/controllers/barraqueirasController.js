const connection = require('../database/connection')
const crypto = require('crypto');
module.exports = {
    
    async index(request, response) {
        const barraqueiras = await connection('barraqueiras').select('*');
        return response.json(barraqueiras);
    },

    async create(request, response) {
        const {name, email, whatsapp, city, uf} = request.body;

        const id = crypto.randomBytes(4).toString('HEX');
        await connection('barraqueiras').insert({
          id,
          name,
          email,
          whatsapp,
          city,
          uf,
        })
      
          return response.json({id})
    } 
};