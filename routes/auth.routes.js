const {Router} = require('express');
const bcrypt = require('bcryptjs')
const {check, validationResult} = require('express-validator')
const User = require('../models/User')
const router =  Router();

// /api/auth/register
router.post(
    '/register',
    [//перевірка чи відправлено норм пошта і пароль не пустий і т.д.
        check('email', 'Uncorrect email').isEmail(),
        check('password', 'Min length password has been: 6').isLength({min: 6})
    ],
 async (req, res) => {
 try {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array(), message:'Uncorrected input...'})
    }

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