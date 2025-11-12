# Awesome Portfolio Website

Welcome to my **Awesome Portfolio Website**! This portfolio showcases my skills, projects, and achievements, built using Kotlin, Jetpack Compose, and the Kobweb framework.

## Live Demo

Check out the live demo of my portfolio at: [https://mohamedelgohary.dev/](https://mohamedelgohary.dev)

## Project Overview

This portfolio website is designed to highlight my work and expertise in software development. It features:

- **Modern UI**: A clean and responsive design built with Jetpack Compose.
- **Kotlin Backend**: Robust backend functionality using Kotlin and the Kobweb framework.
- **Showcase of Projects**: A detailed presentation of my past projects and contributions.
- **Contact Information**: Easy access to contact me for opportunities and collaborations.


## Technologies Used

- **Kotlin**: The primary programming language for both frontend and backend development.
- **Jetpack Compose**: For building a dynamic and responsive user interface.
- **Kobweb Framework**: For backend development and server-side logic.

## Features

- **Responsive Design**: Optimized for various devices and screen sizes.
- **Interactive Elements**: Engaging user interactions and animations.
- **Project Showcase**: A section dedicated to displaying my projects with descriptions and links.
- **Contact Form**: A simple contact form to get in touch with me.

## Getting Started

To run this project locally, follow these steps:

1. **Clone the Repository**:

    ```bash
    git clone https://github.com/MohamedElgohary88/My-Portfolio.git
    cd My-Portfolio
    ```

2. **Install Dependencies**:

    Ensure you have the required dependencies installed for both Kotlin and Jetpack Compose. Refer to the [Kobweb documentation](https://kobweb.io/docs/) for setup instructions.

3. **Run the Application**:

    Start the development server using the Gradle wrapper:

    ```bash
    ./gradlew :site:kobwebStart
    ```

4. **Stop the Application**:

    To stop the development server, run the following command:

    ```bash
    ./gradlew :site:kobwebStop
    ```

5. **View Locally**:

    Open your browser and navigate to `http://localhost:8080` to view the portfolio.

## Export and Deploy

This project uses Kobweb's static export for deployment. The exported site is generated under `site/.kobweb/site`.

- **Export the site**:

    ```bash
    ./gradlew :site:kobwebExport --warning-mode all
    ```

- **Commit the exported files** (required for platforms like Render when building locally):

    ```bash
    git add -A site/.kobweb/site
    git commit -m "Update exported site"
    git push
    ```

- **Render (Static Site) settings**:
  - Publish directory: `site/.kobweb/site`
  - Build command: none (prebuilt export pushed from local)

Note: The root `.gitignore` is configured to allow committing the exported site. If you change ignore rules, ensure `site/.kobweb/site` is not ignored.

## Contributing

Contributions are welcome! If you would like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to the branch (`git push origin feature/YourFeature`).
6. Create a new Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

Feel free to reach out to me via:

- **Email**: mohamed.abdelazim.elgohary@gmail.com
- **LinkedIn**: [LinkedIn Profile](https://www.linkedin.com/in/mohamed-elgohary8)
- **GitHub**: [GitHub Profile](https://github.com/MohamedElgohary88)

Thank you for visiting my portfolio!