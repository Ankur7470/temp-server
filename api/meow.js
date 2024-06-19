// import { createBot } from 'whatsapp-cloud-api';
// or if using require:
const { createBot } = require('whatsapp-cloud-api');

(async () => {
  try {
    // replace the values below
    const from = '107776902222383';
    const token = 'EAANJCjZCLBW0BO94uLrikZAHtjZBkuj3019rDuoU0PznUkzBQY7fW7ZB4l2Xk8VY51nVVHZAMidHUcgCLVRFT5IaqPOpqr8trXW1O6rg2XaBETkPZCtKdyOWTpgBZAZAStbCeGPmpVJN5p20K0ZA2WtCldRjWWWYwhdnZB5owFHHgeOAcirCFxqZBNL6KPF7Sd5ZCPlky3yGafgKiY2PXiq1IVVW6QZDZD';
    const to = '919993600135';
    const webhookVerifyToken = 'YOUR_WEBHOOK_VERIFICATION_TOKEN';

    // Create a bot that can send messages
    const bot = createBot(from, token);

    // Send text message
    console.log(process.argv);
    var msgt = `*New Enquiry*\n\nFrom: ${process.argv[2]}\nTo: ${process.argv[3]}\nCar-Type: ${process.argv[4]}\nPhone: ${process.argv[5]}\nCar: ${process.argv[6]}`;
    const result = await bot.sendText(to, msgt);

    // Start express server to listen for incoming messages
    // NOTE: See below under `Documentation/Tutorial` to learn how
    // you can verify the webhook URL and make the server publicly available
 

    // Listen to ALL incoming messages
    // NOTE: remember to always run: await bot.startExpressServer() first

  } catch (err) {
    console.log(err);
  }
})();