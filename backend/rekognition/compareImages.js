const { RekognitionClient, CompareFacesCommand } = require("@aws-sdk/client-rekognition");
const dotenv = require("dotenv");
dotenv.config();

const rekognitionClient = new RekognitionClient({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

const compareImages = async (sourceImageBytes, targetImageS3) => {
  const params = {
    SourceImage: { Bytes: sourceImageBytes },
    TargetImage: {
      S3Object: {
        Bucket: process.env.S3_BUCKET_NAME,
        Name: targetImageS3,
      },
    },
    SimilarityThreshold: 70,
  };

  const command = new CompareFacesCommand(params);
  const response = await rekognitionClient.send(command);
  return response;
};

module.exports = compareImages;
