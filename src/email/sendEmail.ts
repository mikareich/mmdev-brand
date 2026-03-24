import { SendEmailCommand } from "@aws-sdk/client-ses";
import { sesClient } from "./index";

export async function sendEmail(
  recipients: string[],
  subject: string,
  textContent: string,
  htmlContent: string,
  bccRecipients?: string[],
) {
  const command = new SendEmailCommand({
    Destination: {
      ToAddresses: recipients,
      BccAddresses: bccRecipients,
    },
    Message: {
      Body: {
        Html: {
          Charset: "utf-8",
          Data: htmlContent,
        },
        Text: {
          Charset: "utf-8",
          Data: textContent,
        },
      },
      Subject: {
        Charset: "utf-8",
        Data: subject,
      },
    },
    Source: `MMDEV Studio <contact@mmdev.studio>`,
    ReplyToAddresses: ["contact@mmdev.studio"],
  });

  try {
    const response = await sesClient.send(command);
    return { success: true, messageId: response.MessageId } as const;
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, error } as const;
  }
}
