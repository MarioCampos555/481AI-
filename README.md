# AI Image Generator
The AI Image Generator is a React application designed to generate images based on user-provided text input and style preferences. Users can select different artistic styles, and the application will fetch an image from an API that matches the description and style specified.

Project Structure

ImageGenerator.js: This is the main React component that renders the user interface for the image generation. It handles state management, user input, and communication with the image generation API.
ImageGenerator.css: Contains the CSS styles for the ImageGenerator component, ensuring that the layout and visual presentation of the application are appealing and functional.

To use the AI Image Generator, follow these steps:

Download the application from github: You can either git clone or download the files zip file
Install the dependencies: If you have npm installed you can type in npm install to the terminal and it will download all the node_modules.

Insert API key: We were not allowed to publish our API key on this repository so you must supply your own OPENAI API key and you can insert that in the ImageGenerator.js file right after it says Bearer.

Start the application: To run our project we use npm run start

Enter a prompt: Click on the text box under "SEARCH HERE!" and type in a description of the image you want to generate.

Select a style: Choose an artistic style from the dropdown menu next to the input field. Options include "Random," "Cartoon," "Anime," and "Realistic."

Generate the image: Click on the "Generate" button to start the image generation process. The application will communicate with the backend API, sending the prompt and selected style, and then display the generated image.
