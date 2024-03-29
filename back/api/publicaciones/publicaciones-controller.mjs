
import { initModels } from '../../models/init-models.mjs';
import { dbSequelize } from '../../database/config.mjs';

const { publicaciones } = initModels(dbSequelize);

export const publicacionesController = {
    post: async(req, res) => {
        try {
            const data = await publicaciones.create({
                ...req.body,
            });
            res.json(data);
        } catch (error) {
            console.log(error);
            return res.status(500).json(error);
        }
    },
    get: async(req, res) => {
        try {
            const data = await publicaciones.findByPk(req.params.id);
            res.json(data);
        } catch (error) {
            console.log(error);
            return res.status(500).json(error);
        }
    },
    gets: async(req, res) => {
        try {
            const { perPage = 5 } = req.query;
            if(!req.query.page || req.query.page == '0') return res.status(400).json({error: `parametro page mayor a 0 obligatorio`})
    
            const {count:total, rows: data} = await publicaciones.findAndCountAll({
                
                limit: Number(perPage),
                offset: ( Number(req.query.page) - 1 ) * Number(perPage),
                order: [ ['id', 'DESC'] ]
            })
            res.json({ total, pages: Math.ceil( total / perPage ), data });
        } catch (error) {
            console.log(error);
            return res.status(500).json(error);
        }
    },

    update: async(req, res) => {
        try {
            const {body} = req
            const data = await publicaciones.findByPk(req.params.id);
            //tu logica
            //await data.save();
            res.json(data);
        } catch (error) {
            console.log(error);
            return res.status(500).json(error);
        }
    },
    
    delete: async(req, res) => {
        try {
            const data = await publicaciones.destroy({
                where: {id: req.params.id}
            });
            res.json(data)
        } catch (error) {
            console.log(error);
            return res.status(500).json(error);
        }
    },

    search: async(req, res) => {
        try {
            
            const { perPage = 5 } = req.query;
            if(!req.query.page || req.query.page == '0') return res.status(400).json({error: `parametro page mayor a 0 obligatorio`})
            
            const whereDinamico = {}
            whereDinamico[req.query.campo] = req.query.valor
    
            const {count:total, rows: data} = await publicaciones.findAndCountAll({
                where: whereDinamico,
                limit: Number(perPage),
                offset: ( Number(req.query.page) - 1 ) * Number(perPage),
                order: [ ['id', 'DESC'] ]
            })
            res.json({ total, pages: Math.ceil( total / perPage ), data });
            
        } catch (error) {
            console.log(error);
            return res.status(500).json(error);
        }
    }
}
    