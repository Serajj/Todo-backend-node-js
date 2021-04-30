const { validationResult, check } = require('express-validator');
const { TodoList } = require('../models/todoModel');

const router = require('express').Router();



router.get('/', (req, res) => {

    const body = req.body;
    res.status(200).json({
        status: true,
        message: body
    })
})

const checkCsrf = (req, res, next) => {
    next();

}

router.post('/add', [
    check('name').not().isEmpty().trim(),
    check('priority').not().isEmpty().trim(),
    check('dueDate').not().isEmpty().trim(),
    check('status').not().isEmpty().trim()],

    (req, res) => {

        const error = validationResult(req);
        if (!error.isEmpty()) {
            return res.status(422).json(error);
        }

        const body = req.body;

        TodoList.create({
            name: body.name,
            priority: body.priority,
            dueDate: body.dueDate,
            status: body.status

        }, (err, result) => {

            if (err) {
                res.status(422).json(err);
            }


            res.status(200).json({
                status: true,
                message: "created successfully",
                data: result
            });
        })


    })


router.get('/getTodoList', (req, res) => {

    TodoList.find((err, result) => {

        if (err) {
            res.status(422).json(err);
        }

        res.status(200).json({
            success: true,
            message: "data fetched successfully !!",
            data: result
        })


    });
})


router.post('/delete', (req, res) => {


    res.status(200).json({ sucess: true })

    // var id = req.body.id;



    // TodoList.findByIdAndDelete(id, function (err, docs) {
    //     if (err) {
    //         res.status(422).json({ success: false, message: "Failed to delete" });
    //     }
    //     else {
    //         res.status(200).json({ success: true, message: "Successfully Deleted" });
    //     }
    // });

})



router.post('/todoListRemove', (req, res) => {

    var myid = req.body.id;
    res.status(200).json({ sucess: true, id: myid })

    // var id = req.body.id;



    // TodoList.findByIdAndDelete(id, function (err, docs) {
    //     if (err) {
    //         res.status(422).json({ success: false, message: "Failed to delete" });
    //     }
    //     else {
    //         res.status(200).json({ success: true, message: "Successfully Deleted" });
    //     }
    // });

})


module.exports = { router }