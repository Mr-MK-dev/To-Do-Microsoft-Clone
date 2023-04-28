const Task = require('../../models/Posts');

exports.createtask = async (req, res) => {
    try {
        const the_task = req.body;
        const new_task = await Task.create(the_task);
        res.json({
            status: 'success',
            task: new_task,
        });
    } catch (error) {
        res.json({
            err_msg: error,
        });
    }
};
exports.gettasks = async (req, res) => {
    try {
        const new_task = await Task.findAll();
        res.json({
            status: 'success',
            task: new_task,
        });
    } catch (error) {
        res.json({
            err_msg: error,
        });
    }
};

exports.deletetask = async (req, res) => {
    try {
        const the_id = req.params.id * 1;
        const new_task = await Task.findByPk(the_id);
        new_task.destroy();
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
exports.updatetask = async (req, res) => {
    try {
        const the_id = req.params.id * 1;
        const new_task = await Task.findByPk(the_id);
        new_task.update(req.body);
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

exports.gettask = async (req, res) => {
    try {
        const the_id = req.params.id * 1;
        const new_task = await Task.findByPk(the_id);

        res.json({
            status: 'success',
            msg: new_task,
        });
    } catch (error) {
        res.json({
            err_msg: error,
        });
    }
};
