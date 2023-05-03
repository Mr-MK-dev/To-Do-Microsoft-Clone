const List = require('../../models/Lists');

exports.ظcreateList = async (req, res) => {
    try {
        const the_list = req.body;
        const new_list = await List.create(the_list);
        console.log(new_list);
        res.json({
            status: 'success',
            list: new_list,
        });
    } catch (error) {
        res.json({
            err_msg: error,
        });
    }
};
exports.getLists = async (req, res) => {
    try {
        const new_list = await List.findAll();
        res.json({
            status: 'success',
            list: new_list,
        });
    } catch (error) {
        res.json({
            err_msg: error,
        });
    }
};

exports.deleteList = async (req, res) => {
    try {
        const the_id = req.params.id * 1;
        const new_list = await List.findByPk(the_id);
        new_list.destroy();
        res.json({
            status: 'success',
            msg: 'Deleted',
        });
    } catch (error) {
        res.json({
            err_msg: error,
        });
    }
};
exports.updateList = async (req, res) => {
    try {
        const the_id = req.params.id * 1;
        const new_list = await List.findByPk(the_id);
        new_list.update(req.body);
        res.json({
            status: 'success',
            msg: 'Updated',
        });
    } catch (error) {
        res.json({
            err_msg: error,
        });
    }
};

exports.getlist = async (req, res) => {
    try {
        const the_id = req.params.id * 1;
        const new_list = await List.findByPk(the_id);

        res.json({
            status: 'success',
            msg: new_list,
        });
    } catch (error) {
        res.json({
            err_msg: error,
        });
    }
};
