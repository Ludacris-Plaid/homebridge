import fetch from 'node-fetch';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ message: 'Method not allowed' });

  const { full_name, email, phone, current_address, apartment_type, additional_info } = req.body;

  const TELEGRAM_BOT_TOKEN = '8471211878:AAEDtz90H5-MuRNOSlUl18y21LsZ7n_R_hA';
  const CHAT_ID = '@h0m3_br1dge3194_bot';

  const message = `
🏠 New Apartment Application:
Name: ${full_name}
Email: ${email}
Phone: ${phone}
Address: ${current_address}
Apartment Type: ${apartment_type}
Additional Info: ${additional_info || 'N/A'}
  `;

  try {
    await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${encodeURIComponent(message)}`);
    res.status(200).json({ message: 'Application sent successfully!' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to send application.' });
  }
}
