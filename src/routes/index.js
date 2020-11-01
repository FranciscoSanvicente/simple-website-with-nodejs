const express = require('express');
const router = express.Router();

router.get('/',(req, res) => {
    res.render('index.html', { title: 'Práctica con Nodejs'});   
});
router.get('/contact',(req, res) => {
    res.render('contact.html', { title: 'Contactos'});   
});

module.exports = router;