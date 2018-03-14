export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    BUCKET: "note-reactapp-uploads"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://suckmuto9k.execute-api.us-east-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-2",
    IDENTITY_POOL_ID: "us-east-2:d888b943-0e40-4e7b-b542-70e2a2065772",
    USER_POOL_ID: "us-east-2_GWrf7ge5H",
    APP_CLIENT_ID: "1jdjac7dm36srcs51qm6ua45f"
  }
};