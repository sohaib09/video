const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();

// Set up storage for uploaded videos
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, 'uploads/')); // Use the absolute path to the 'uploads/' folder
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

// Create an instance of Multer with the storage options
const upload = multer({ storage: storage });

// Handle video upload
app.post('/uploads', upload.single('video'), (req, res) => {
  // File upload handling code (unchanged)
});

// Serve static files from the 'uploads' folder
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
