import { SESClient } from "@aws-sdk/client-ses";

const { AWS_REGION, AWS_SECRET_ACCESS_KEY, AWS_ACCESS_KEY_ID } = process.env;

if (!AWS_REGION || !AWS_ACCESS_KEY_ID || !AWS_SECRET_ACCESS_KEY)
  throw new Error("AWS Credentials not set!");

export const sesClient = new SESClient({
  credentials: {
    accessKeyId: AWS_ACCESS_KEY_ID,
    secretAccessKey: AWS_SECRET_ACCESS_KEY,
  },
  region: AWS_REGION,
});
