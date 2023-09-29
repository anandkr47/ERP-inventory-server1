const accountSid = 'ACfff0b83902cb05599600d3f6a3e9cbff';
const authToken = '2722f817e6dd73e31123e6c25aaffea4';
const client = require('twilio')(accountSid, authToken);

const sendOTP = async (phoneNumber, otp) => {
  try {
    const message = await client.messages.create({
      body: `Your OTP is: ${otp}`,
      from: '+13203838134',
      to: phoneNumber
    });
    console.log('OTP sent successfully:', message.sid);
  } catch (error) {
    console.error('Error sending OTP:', error);
  }
};

module.exports = {
  sendOTP
};
