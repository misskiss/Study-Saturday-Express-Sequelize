const router = require('express').Router();
const Student = require('/db../models../student')



router.get('/students', async (req, res, next) => {
    try {
        const students = await Student.findAll();
        res.send()
    } catch (error) { next(error) }
});

router.get('/students', async (req, res, next) => {
    try {
        const students = await Student.findAll();
        res.send()
    } catch (error) { next(error) }
});

router.post('/students', async (req, res, next) => {
    try {
        const students = await Student.findAll();
        res.send()
    } catch (error) { next(error) }
});


router.put('/students', async (req, res, next) => {
    try {
        const students = await Student.findAll();
        res.send()
    } catch (error) { next(error) }
});

router.delete('/students', async (req, res, next) => {
    try {
        const students = await Student.findAll();
        res.send()
    } catch (error) { next(error) }
});

module.exports = router;
