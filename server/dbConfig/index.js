import mongoose from "mongoose";

const dbConnection = async () => {
  try {
    const connection = await mongoose.connect(
      "mongodb+srv://roshansaiketham67:Naaistam@94@customers.fiscmt5.mongodb.net/?retryWrites=true&w=majority&appName=Customers",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );

    console.log("DB Connected Successfully");
  } catch (error) {
    console.log("DB Error: " + error);
  }
};

export default dbConnection;
