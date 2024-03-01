const nodemailer = require('nodemailer')
const { configObject } = require('../config/config')

const transport = nodemailer.createTransport({
    service: 'gmail',
    port: 587,
    auth: {
        user: configObject.gmail_user_app,
        pass: configObject.gmail_password_app
    }
})

exports.sendMail = async () => {
    return await transport.sendMail({
        from: 'Este mail lo envia <melany.bolivar.f0@gmail.com>',
        to: 'melany.bolivar.f@gmail.com',
        subject: 'Mail de prueba',
        html: `<div>
                    <h1>Mail de prueba</h1>
                </div>`
    })
}