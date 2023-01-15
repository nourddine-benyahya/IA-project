const jwt = require('jsonwebtoken')

function verifyToken(req, res, next) {

    const authHeader = req.headers['authorization']; 
    const token = authHeader && authHeader.split(' ')[1];

    if(!token)
        return res.status(401).send('a token is required for authentication');

    const cle = process.env.SECRET_KEY; 

    jwt.verify(token, cle, (err, data) => {
        if(err)
            return res.sendStatus(403);
        
        req.username = data;
        next();
    });

}

module.exports = {
    verifyToken: verifyToken
}

