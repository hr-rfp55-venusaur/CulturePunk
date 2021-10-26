<div id="top"></div>

<!-- PROJECT SHIELDS -->
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Material UI](https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white)
![Three JS](https://img.shields.io/badge/ThreeJs-yellow?style=for-the-badge&logo=three.js&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![Firebase](https://img.shields.io/badge/firebase-ffca28?style=for-the-badge&logo=firebase&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![AWS](https://img.shields.io/badge/Amazon_AWS-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <h3 align="center">CulturePunk</h3>
  <p align="center">
    A new kind of art access for a new world of virtual community.
    <br />
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#sections">Sections</a></li>
    <li><a href="#contributors">Contributors</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

CulturePunk is the world’s most collaborative and dynamic marketplace for art acquisition. We empower our international community of collectors and newbies to discover, access, acquire, and consign digital art and crypto art assets. Inspired by our forward-thinking vision of innovation, we host live auctions and product drops at the intersection of art and technology.

By honoring our collective lived experiences in a virtual world, we re-imagine an art space that operates to serve and see everyone. *We are artists. We are you.*

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

* [React.js](https://reactjs.org/)
* [Vite](https://vitejs.dev/)
* [Firebase](https://firebase.google.com/)
* [Express.js](https://expressjs.com/)
* [Node](https://nodejs.org/en/)
* [Material UI](https://mui.com/)
* [Three JS](https://threejs.org/)
* [AWS](https://aws.amazon.com/)
* [React Router](https://reactrouter.com/)

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Install dependencies.
   ```sh
   npm install
   ```
2. Create a **config.js** file.

    * Copy the file named **config.example.js**.

    * Add your configurations as needed.

    * Rename your new file to **config.js**.

2. Run development.
   ```sh
   npm run dev:vite
   ```
   ```sh
   npm run dev:node
   ```

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- SECTIONS -->
## Sections

### Homepage

### Events Calendar

Events Calendar section displays a calendar list of product drops and auctions. Users can add and delete events. Product drops and auctions are retrieved from a PostgreSQL database.

* The event carousel elegantly displays 3D dynamic cards for each product drop and auction drop. A toggle switch opens and closes the event carousel
* The text field and date picker are built with Material UI Library and the calendar was built with Big React Calendar
* The event calendar has CRUD functionality and is connected to a PostgreSQL database
* The event calendar can also be connected to a Firebase real time database for better integration and communication with other components that use Firebase.

![events.gif][events]

### Livestream

### Gallery

In the NFT Art Gallery users can browse through selected works sourced from the OpenSea API. The work can be ordered by Last Sale, Token ID, or Number of Sales.

The page uses React Context to allow logged-in users to save their favorite pieces. When a user selects the favorite icon on an NFT card, identifying information for the art is stored in a Firebase database under their username. When the component renders, the token ID's pulled from OpenSea are checked agains the token IDs saved for the user in Firebase in order to determine which cards will appear with an active favorite icon.

![GalleryGif](/images/Gallery.gif)


### Chat & Auction
Chat and Auction section uses React Hooks and React Context to allow logged-in users to chat real-time and join the live auction. The UI design is implemented using Material UI. Live chat content and auction information are stored and retrieved using Google Firebase real-time database to ensure data persistence.

* Users can input chat content along with Emoji into the Live Chat section.
* Live auction system has CRUD functionalities and is displayed in a sorted descending order based on the bidding price.

![ChatBid.Gif][chatbid]

### Login

### Profile


<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTRIBUTORS -->
## Contributors

* [Caitlin Kinney](https://github.com/thecaitlinkinney) -
  * Product Manager
  * NFT Art Gallery
* [Cora Durham]() -
  * Tech Stack Architect
  * Livestream
* [Bishal Gautam]() -
  * UI Design Lead
  * Homepage
* [Caleb Kim]() -
  * Live Chat
  * Auction
* [Ryan Rhoads]() -
  * Homepage
  * Carousel Widget Integration
* [Nan Jiang]() -
  * User Login
* [John Fa](https://www.linkedin.com/in/johnfa/) -
  * Events Calendar
* [Iris Huang]() -
  * Live Chat
  * Auction
* [Derek Samms](https://www.linkedin.com/in/derek-samms/) - Derek.Samms@gmail.com
  * User Profile


Project Link: [https://github.com/hr-rfp55-venusaur/CulturePunk](https://github.com/hr-rfp55-venusaur/CulturePunk)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [Paloma Rincón](https://palomarincon.com/)

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.png
[events]: images/events.gif
[chatbid]: images/ChatBid.gif