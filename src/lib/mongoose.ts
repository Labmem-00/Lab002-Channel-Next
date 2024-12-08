import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI as string;
let isConnected = false;

export const mongoDB = async () => {
  if (isConnected) {
    return;
  }

  if (!MONGODB_URI) {
    throw new Error('MongoDB URI Undifined');
  }

  try {
    await mongoose.connect(MONGODB_URI);  // 不需要额外的 options
    isConnected = true;
  } catch (error) {
    throw new Error('DB connect error!');
  }
};
