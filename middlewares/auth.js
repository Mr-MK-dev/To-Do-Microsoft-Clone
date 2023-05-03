const jwt = require('jsonwebtoken');

const auth = (req, res, n) => {
    var token = req.headers['lol'];
    if (!token) {
        throw new Error('Token is required');
    }

    if (token.split(' ')[0] != 'monster') {
        console.log(`Fake Token`);
    }
    token = token.split(' ')[1];
    console.log(token);

    try {
        const decode = jwt.verify(token, process.env.JWT_KEY);
        req.lol = decode;
    } catch (err) {
        return res.status(401).send('Invalid Token');
    }

    return n();
};

module.exports = {
    auth,
};
