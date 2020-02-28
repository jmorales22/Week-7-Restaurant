const express = require('express'),
    router = express.Router();

router.get('/', (request, response) => {
    const snippet = `<h1>Hello World</h1>`;
    response.render('template', {
        locals: {
            title: 'HELLO WORLD'
        },
        partials: {
            partial: 'partial-index'
        }
    })
});

module.exports = router;