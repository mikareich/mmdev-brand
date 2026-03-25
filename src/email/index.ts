import { SESClient } from "@aws-sdk/client-ses";

const { AWS_REGION, AWS_SECRET_KEY, AWS_ACCESS_KEY } = process.env;

if (!AWS_REGION || !AWS_ACCESS_KEY || !AWS_SECRET_KEY)
  throw new Error("AWS Credentials not set!");

export const sesClient = new SESClient({
  credentials: {
    accessKeyId: AWS_ACCESS_KEY,
    secretAccessKey: AWS_SECRET_KEY,
  },
  region: AWS_REGION,
});
