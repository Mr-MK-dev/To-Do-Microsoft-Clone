const User = require('../../models/Users');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const jwtToken = function (id, email, password) {
    jwt.sign({ id, email, password }, process.env.JWT_KEY, {
        expiresIn: '2h',
    });
};
// function validateEmailAndPassword(req, res, n) {
//     const { email, password } = req.body;
//     if (!email || !password) {
//         throw new Error('Fill in your data. Please');
//     }
//     n();
// }
async function signup(req, res) {
    try {
        const { email, password, username, photo, active } = {
            email: req.body.email,
            password: req.body.password,
            username: req.body.username,
            photo: req.body.photo,
            active: false,
        };
        console.log(`Method started`);
        if (!(email && password && username)) {
            res.status(400).send('All inputes are required');
        }
        console.log(`All data entered`);

        const oldUser = await User.findOne({
            where: { email },
        });

        if (oldUser) {
            throw new Error('Email is already used before');
        }
        console.log(`User checked`);

        if (typeof password * 1 == Number && password.length < 8) {
            res.status(400).send(
                'Password has to be complex and more than 7 chars'
            );
        }
        console.log(typeof password * 1);

        const encryptedPassword = await bcrypt.hash(password, 10);

        console.log(`Password checked`);

        const user = await User.create({
            email,
            password: encryptedPassword,
            username,
            photo,
            active: false,
        });

        const token = jwt.sign(
            { id: user.ID_KEY, email, username },
            process.env.JWT_KEY,
            {
                expiresIn: '2h',
            }
        );

        user['token'] = token;
        console.log(user);
        user.active = true;
        res.json({
            status: 'success',
            data: { user, token: user['tokens'] },
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
        const comperedPassword = await bcrypt.compare(
            password,
            the_email.password
        );
        if (!the_email && !comperedPassword) {
            throw new Error('This email not exists or Wrong password');
        }

        const token = jwt.sign({ email, password }, process.env.JWT_KEY, {
            expiresIn: '2h',
        });

        the_email.token = token;
        res.json({
            status: 'success',
            res: 'Done login',
            token: the_email.token,
        });
    } catch (error) {
        res.json({ status: 'fail', msg: error.message });
    }
}

const helloPage = (req, res) => {
    res.send('Hello Page');
};
module.exports = {
    signup,
    login,

    helloPage,
};
