export function getConfirmationEmail(productName: string, details: string) {
  const subject = `Your request for the ${productName} package - MMDEV Studio`;

  const textContent = `
Hi there,

Thank you for reaching out to MMDEV Studio!

We have successfully received your request for our "${productName}" package.

Here are the details you provided:
"${details}"

Our team is reviewing your project requirements and will get back to you shortly to discuss the next steps.

Best regards,
The MMDEV Studio Team
`.trim();

  const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Request Confirmation - MMDEV Studio</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      line-height: 1.6;
      color: #333333;
      margin: 0;
      padding: 0;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      padding: 32px 20px;
    }
    .header {
      margin-bottom: 32px;
      padding-bottom: 16px;
      border-bottom: 1px solid #eaeaea;
    }
    .header h1 {
      font-size: 24px;
      margin: 0;
      color: #111111;
    }
    .content {
      font-size: 16px;
    }
    .details-box {
      background-color: #f9f9f9;
      border-left: 4px solid #333;
      padding: 16px;
      margin: 24px 0;
      border-radius: 4px;
      white-space: pre-wrap;
    }
    .footer {
      margin-top: 48px;
      padding-top: 16px;
      border-top: 1px solid #eaeaea;
      font-size: 14px;
      color: #666666;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>MMDEV Studio</h1>
    </div>

    <div class="content">
      <p>Hi there,</p>

      <p>Thank you for reaching out to us! We have successfully received your request for our <strong>${productName}</strong> package.</p>

      <p>Here are the details you provided:</p>

      <div class="details-box">${details}</div>

      <p>Our team is currently reviewing your project requirements. We will get back to you shortly to discuss the next steps and how we can bring your vision to life.</p>

      <p>Best regards,<br>
      <strong>The MMDEV Studio Team</strong></p>
    </div>

    <div class="footer">
      <p>This is an automated confirmation email. You can reply to this email if you need to add any more details to your request.</p>
    </div>
  </div>
</body>
</html>
`.trim();

  return { subject, textContent, htmlContent };
}
