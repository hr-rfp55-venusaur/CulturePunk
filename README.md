<div id="top"></div>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT LOGO -->
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
<br />
<div align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
  </a>

  <h3 align="center">CulturePunk</h3>

  <p align="center">
    A new kind of art access for a new world of virtual community.
    <br />
    <br />
    <a href="https://github.com/othneildrew/Best-README-Template">View Demo</a>
    ·
    <a href="https://github.com/othneildrew/Best-README-Template/issues">Report Bug</a>
    ·
    <a href="https://github.com/othneildrew/Best-README-Template/issues">Request Feature</a>
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
    <li><a href="#usage">Usage</a></li>
    <li>
      <a href="#components">Components</a>
      <ul>
        <li><a href="#events">Events</a></li>
      </ul>
    </li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

There are many great README templates available on GitHub; however, I didn't find one that really suited my needs so I created this enhanced one. I want to create a README template so amazing that it'll be the last one you ever need -- I think this is it.

Here's why:
* Your time should be focused on creating something amazing. A project that solves a problem and helps others
* You shouldn't be doing the same tasks over and over like creating a README from scratch
* You should implement DRY principles to the rest of your life :smile:

Of course, no one template will serve all projects since your needs may be different. So I'll be adding more in the near future. You may also suggest changes by forking this repo and creating a pull request or opening an issue. Thanks to all the people have contributed to expanding this template!

Use the `BLANK_README.md` to get started.

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With
* [React](https://reactjs.org/)
* [Node](https://nodejs.org/en/)
* [Material UI](https://mui.com/)
* [Three JS](https://threejs.org/)
* [Express](https://expressjs.com/http://expressjs.com/)
* [PostgreSQL](https://www.postgresql.org/)
* [Firebase](https://firebase.google.com/)
* [Vite](https://vitejs.dev/)
* [AWS](https://aws.amazon.com/)
* [React Router](https://reactrouter.com/)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started
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
## Components
## Events Calendar
![events.gif][events]
Events Calendar section displays a calendar list of product drops and auctions. Users can add and delete events. Product drops and auctions are retrieved from a PostgreSQL database.

* The event carousel elegantly displays 3D dynamic cards for each product drop and auction drop. A toggle switch open and closes the event carousel
* The text field and date picker are built with Material UI Library and the calendar was built with Big React Calendar

Add an Event
* Users can add an event by inputting an event title, start date and end date.
* Upon event submission, the event will populate on the calendar with the correct title, start and end date.

Delete an Event
* Events can be deleted by pressing on the event bar.
* Upon clicking the event, an alert will appear, alarming the user to confirm deleting the event. After confirmation, the event will be removed from the calendar.

Functionality
* The event calendar has CRUD functionality and is connected to a PostgreSQL database
* The event calendar can also be connected to a Firebase real time database for better integration and communication with other components that use Firebase.


<!-- CONTRIBUTORS -->
## Contributors

* [Cora Durham]() -
* [Bishal Gautam]() -
* [Caitlin Kinney]() -
* [Caleb Kim]() -
* [Ryan Rhoads]() -
* [Nan Jiang]() -
* John Fa - [https://www.linkedin.com/in/johnfa/](https://www.linkedin.com/in/johnfa/)
* [Iris Huang]() -
* [Derek Samms]() -

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
[events]: gifs/events.gif