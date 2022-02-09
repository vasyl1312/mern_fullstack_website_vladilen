const {Router} = require('express');
const User = require('../models/User')
const router =  Router();

// /api/auth/register
router.post('/register', async (req, res) => {
 try {
    const {email, password} = req.body
    const candidate = await User.findOne({ email})

    if(candidate){//перевірка чи існує вже акаунт на цій пошті, якщо ні то реєструємо
        return res.status(400).json({ message: 'This account already exists.' })
    }
    

 }catch (e) {
     res.status(500).json({message: 'Error, try again!'});
 }
})

// /api/auth/login
router.post('/login', async (req, res) => {

})

module.exports = router