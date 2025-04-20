import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: {   
    type: String,
    required: true, 
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
});

const Product = mongoose.model('Product', productSchema);

export default Product;

//MONGO_URI=mongodb+srv://atlas-sample-dataset-load-6804f4bc4495e5761441f1be:IZ6PQIAZFOWtgPNk@cluster0.1zjvwga.mongodb.net/products?retryWrites=true&w=majority&appName=Cluster0
//IZ6PQIAZFOWtgPNk