# React Tabs Challenge

## Overview

The **React Tabs Challenge** is a simple React application that fetches tab content from the [Loripsum REST API](https://loripsum.net/) and displays it in a tabbed interface. The application implements caching and state management using React Query, ensuring efficient data fetching and a smooth user experience.



## Features

- Fetches text content dynamically for each tab from the Loripsum API.
- Implements caching for faster subsequent loads.
- State management using React Query for handling loading, error, and success states.
- Responsive design to ensure usability across different devices.

## Installation

To run this project locally, follow these steps:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/Nrobke/react-tabs-challenge.git
    cd react-tabs-challenge
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Start the application**:
    ```bash
    npm start
    ```

4. Open your browser and navigate to `http://localhost:3000` to view the application.

## Usage

- Click on the tabs to load content dynamically from the Loripsum API.
- Each tab retrieves a different set of text based on the tab number.
- The content is cached for improved performance on subsequent loads.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **React Query**: Library for fetching, caching, and synchronizing server state in React applications.
- **Axios**: Promise-based HTTP client for making API requests.
- **CSS**: For styling the components and ensuring responsive design.

## API Reference

The application fetches data from the Loripsum API. The endpoint used is:

- `https://loripsum.net/api/1/short`

Where:
- '1' - is the number of paragraph to retrieve.
- 'short' - type of content.

## Contributing

Contributions are welcome! If you have suggestions for improvements or features, please create an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
