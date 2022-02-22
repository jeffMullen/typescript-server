import express from 'express';

const router = express.Router();

router.post('/', async (req, res) => {
    if (typeof req.body.number !== 'number') {
        res.status(500).json({
            error: 'MUST PROVIDE A NUMBER'
        });
    }

    let integer: number;

    integer = req.body.number;

    res.status(200).json({
        product: integer * 2,
        square: integer * integer,
        sum: integer + integer,
        difference: integer - integer
    });
});

export = router;
