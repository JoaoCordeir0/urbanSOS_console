const logModel = require('../models/logModel')
const jwt = require("jsonwebtoken");

// Função que retorna as informações de um usuário especifico
const logErrors = (request, response) => {
    logModel.findAll({
        raw: true, where: { type: 'Err' }
    }).then(log => {
        if (Array.isArray(log)) {
            const data = Array()
            log.forEach(item => {
                data.push({
                    log_type: item.type,
                    log_name: item.name,
                    log_description: decodeToken(item.description),
                    log_date: item.createdAt,
                })
            })
            return response.status(200).json(data)
        }
        return response.status(200).json({
            log_type: log.type,
            log_name: log.name,
            log_description: decodeToken(log.token),
            log_date: log.createdAt,
        })
    }).catch((err) => {
        response.status(500).json({ message: 'Internal error!', err: err });
    })
}

// Função que retorna as informações de um usuário especifico
const logAccess = (request, response) => {
    logModel.findAll({
        raw: true, where: { type: 'Access' }
    }).then(log => {
        if (Array.isArray(log)) {
            const data = Array()
            log.forEach(item => {
                data.push({
                    log_type: item.type,
                    log_name: item.name,
                    log_description: decodeToken(item.description),
                    log_date: item.createdAt,
                })
            })
            return response.status(200).json(data)
        }
        return response.status(200).json({
            log_type: log.type,
            log_name: log.name,
            log_description: decodeToken(log.description),
            log_date: log.createdAt,
        })
    }).catch((err) => {
        response.status(500).json({ message: 'Internal error!' });
    })
}

const decodeToken = (token) => {
    try {
        const decoded = jwt.decode(token, process.env.TOKEN_KEY)
        
        if (decoded == undefined) {
            throw new Error()
        }

        return decoded
    } catch (e) {
        return token
    }
}

module.exports = {
    logErrors,
    logAccess,
}