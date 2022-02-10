const {Router} = require('express');
const bcrypt = require('bcryptjs')
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
        const hashedPassword = await bcrypt.hash(password, 12);//щоб зашифрувати пароль
        const user = new User({ email: hashedPassword });
        await user.save()//чекаємо поки користувач збереже 
        res.status(201).json({ message: 'Account has been created.' })

 }catch (e) {
     res.status(500).json({message: 'Error, try again!'});
 }
})

// /api/auth/login
router.post('/login', async (req, res) => {

})

module.exports = router
//32-40