# Multer-Cloudinary Image Upload

This is a NodeJS/Express web application that allows users to upload images using Multer and store them on Cloudinary servers. The application also uses MongoDB to store data related to the uploaded images.

## Technologies Used

- Node.js
- Express.js
- Multer
- Cloudinary
- EJS
- MongoDB
- CSS

## Installation

To use this application, you will need to have Node.js and MongoDB installed on your machine. Once you have these dependencies installed, follow these steps:

1. Clone the repository to your local machine.
2. Run `npm install` in the project directory to install the necessary dependencies.
3. Set up a Cloudinary account and obtain your API key, API secret, and cloud name.
4. Create a `.env` file in the root directory of the project and add the following information:

``
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
``
5. Start the server by running `npm start` in the project directory.
6. Open your web browser and navigate to `http://localhost:3000` to use the application.

## Usage

The application allows users to upload images to the server using Multer, which stores the image files locally. Once the files are uploaded, they are automatically uploaded to Cloudinary servers and the links to the images are saved in a MongoDB database. Users can view a gallery of all the uploaded images, as well as individual pages for each image that display the image and its details.

## Screenshots

![image](https://github.com/user-attachments/assets/2e02504b-3b85-43f3-950b-2f3a75e64ce9)

![image](https://github.com/user-attachments/assets/5f6df2f4-e4cc-4ce9-b2c8-0a5d9828167d)

![image](https://github.com/user-attachments/assets/5dd7e770-22cf-4546-89fd-61d37f980155)

## Contribution

If you want to contribute to this project, you can do so by following these steps:

1. Fork this repository
2. Clone the forked repository to your local machine
3. Create a new branch for your changes: `git checkout -b my-new-branch`
4. Make changes and commit them: `git commit -m "Add some feature"`
5. Push to the branch: `git push origin my-new-branch`
6. Create a new Pull Request
