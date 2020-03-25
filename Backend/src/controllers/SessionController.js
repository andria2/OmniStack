//Conexão com o banco de dados
const connection = require('../database/connection');
//Exportador de módulos
module.exports = {
    /**
     * Retorna uma sessão de usuário
     * @param {*} request 
     * @param {*} response 
     */
    async create(request, response){
        const { id } = request.body;

        const ong = await connection('ongs')
        .where('id', id)
        .select('name')
        .first();

        if(!ong){
            return response.status(400).json({ error: 'No ONG found with this ID.00'});
        }

        return response.json(ong);
    }
}