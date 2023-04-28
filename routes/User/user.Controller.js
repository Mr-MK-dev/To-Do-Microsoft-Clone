const User = require('../../models/Users');

// function validateEmailAndPassword(req, res, n) {
//     const { email, password } = req.body;
//     if (!email || !password) {
//         throw new Error('Fill in your data. Please');
//     }
//     n();
// }
async function signup(req, res) {
    try {
        const new_User = {
            email: req.body.email,
            password: req.body.password,
            username: req.body.username,
            photo: req.body.photo,
            active: false,
        };
        if (await User.findOne({ where: { email: new_User.email } })) {
            throw new Error('Email is already used before');
        }

        const user = await User.create(new_User);

        res.json({
            status: 'success',
            data: user,
        });
    } catch (error) {
        res.json({ status: 'fail', msg: error.message });
    }
}

async function login(req, res) {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            throw new Error('Fill in your data. Please');
        }
        const the_email = await User.findOne({ where: { email } });
        if (!the_email) {
            throw new Error('This email not exists');
        }
        if (the_email.password != password) {
            throw new Error('Wrong password');
        }
        the_email.active = true;
        res.json({
            status: 'success',
            res: 'Done login',
        });
    } catch (error) {
        res.json({ status: 'fail', msg: error.message });
    }
}

module.exports = {
    signup,
    login,
};
