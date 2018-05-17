'use strict';

const axios = require('axios');
const express = require('express');

const app = express();

{
    const router = express.Router();
    router.get('/', async (req, res, next) => {
        const url = req.query.script;
        if (url) {
            const { data } = await axios.get(url);
            res.status(200).json({
                url,
                data,
            });
            return;
        }
        res.status(404);
    });
    app.use(router);
}

app.listen(2333);