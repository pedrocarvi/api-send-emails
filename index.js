const express    = require('express');
const nodemailer = require('nodemailer');
const fs         = require('fs');
const path       = require('path');
require('dotenv').config();

const app = express();
app.use(express.json());

// Configuración envio 
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  }
});

// EP para enviar el mail - simplemente es hacer el post.
app.post('/send-email', async (req, res) => {
  try {
    // Carga email a enviar
    const templatePath = path.join(__dirname, 'templates', process.env.EMAIL_NOMBRE_ARCHIVO);
    let html = fs.readFileSync(templatePath, 'utf8');

    // Envia
    const info = await transporter.sendMail({
      from: process.env.FROM_EMAIL,
      to: process.env.TO_EMAIL,
      subject: 'Prueba envio mail por API',
      html
    });

    return res.json({ messageId: info.messageId });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`API corriendo en http://localhost:${PORT}`));
