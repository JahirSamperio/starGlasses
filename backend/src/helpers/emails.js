import nodemailer from 'nodemailer';
import {config} from 'dotenv';
// Ejecuta la función config() para cargar las variables de entorno desde el archivo .env
config();

const emailRegistro = async (datos) => { 
    const transport = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASSWORD
        }
    });
    const { nombre, email, token } = datos;

    //enviar email
    
    await transport.sendMail({
        from: 'StarGlasses.com',
        to: email,
        subject: 'Confirma tu cuenta en StarGlasses.com',
        text: 'Confirma tu cuenta en StarGlasses.com',
        html: `
            <h2>Hola ${nombre}, ¡Le damos la bienvenida a StarGlasses.com!</h2>
            <p>Para completar tu registro, por favor confirma tu cuenta haciendo clic en el siguiente enlace:</p>
            <p><a href="${process.env.FRONTEND_URL}:${process.env.FRONTEND_PORT ?? 5173}/account/confirmation/${token}" style="background-color: #007bff; color: #fff; padding: 10px 20px; text-decoration: none; border-radius: 5px;">Confirmar cuenta</a></p>
            <p>Si no te registraste en StarGlasses.com, puedes ignorar este correo electrónico.</p>
            <p>Gracias,<br>El equipo de StarGlasses.com</p>
        `
    })
}

const emailResetPassword = async (datos) => { 
    const transport = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASSWORD
        }
    });
    const {email, token, nombre } = datos;

    //enviar email
    
    await transport.sendMail({
        from: 'StarGlasses.com',
        to: email,
        subject: 'Restablecer contraseña en StarGlasses.com',
        text: 'Restablecer contraseña en StarGlasses.com',
        html: `
            <h2>Restablecer contraseña</h2>
            <p>Recibiste este correo porque solicitaste restablecer tu contraseña en StarGlasses.com.</p>
            <p>Hola ${nombre}</p>
            <p>Por favor, haz clic en el siguiente enlace para restablecer tu contraseña:</p>
            <p><a href="${process.env.FRONTEND_URL}:${process.env.FRONTEND_PORT ?? 5173}/login/olvide-password/${token}" style="background-color: #007bff; color: #fff; padding: 10px 20px; text-decoration: none; border-radius: 5px;">Restablecer contraseña</a></p>
            <p>Si no solicitaste restablecer tu contraseña, puedes ignorar este correo electrónico.</p>
            <p>Gracias,<br>El equipo de StarGlasses.com</p>
        `
    })
}

export {
    emailRegistro,
    emailResetPassword
}