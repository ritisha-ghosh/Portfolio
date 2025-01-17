This project was built using these technologies.

- React.js
- Node.js
- Express.js
- CSS3
- VsCode
- Vercel

## Features

**📖 Multi-Page Layout**

**🎨 Styled with React-Bootstrap and Css with easy to customize colors**

**📱 Fully Responsive**

## Getting Started

Clone down this repository. You will need `node.js` and `git` installed globally on your machine.

## 🛠 Installation and Setup Instructions

1. Installation: `npm install`

2. In the project directory, you can run: `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
The page will reload if you make edits.




import React, { useState } from "react";

import oi1 from "../../Assets/certificates/OasisInfobyte/1.jpg";
import oi2 from "../../Assets/certificates/OasisInfobyte/2.jpg";
import oi3 from "../../Assets/certificates/OasisInfobyte/3.jpg";

import hr1 from "../../Assets/certificates/HackerRank/1.jpg";
import hr2 from "../../Assets/certificates/HackerRank/2.jpg";
import hr3 from "../../Assets/certificates/HackerRank/3.jpg";

import ibm1 from "../../Assets/certificates/IBM/1.jpg";

import fr1 from "../../Assets/certificates/Forage/1.jpg";
import fr2 from "../../Assets/certificates/Forage/2.jpg";
import fr3 from "../../Assets/certificates/Forage/3.jpg";

import lu1 from "../../Assets/certificates/LetsUpgrade/1.jpg";
import lu2 from "../../Assets/certificates/LetsUpgrade/2.jpg";
import lu3 from "../../Assets/certificates/LetsUpgrade/3.jpg";

import ex1 from "../../Assets/certificates/Extra/1.jpg";
import ex2 from "../../Assets/certificates/Extra/2.jpg";
import ex3 from "../../Assets/certificates/Extra/3.jpg";

const Certificates = () => {
  const [showExperience, setShowExperience] = useState(false);
  const [showOthers, setShowOthers] = useState({
    HackerRank: false,
    IBM: false,
    Forage: false,
    LetsUpgrade: false,
    Extra: false,
  });

  const toggleExperience = () => setShowExperience(!showExperience);

  const toggleOthers = (key) => {
    setShowOthers((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Experience Certificates</h1>
      <button onClick={toggleExperience} style={{ margin: "10px 0", padding: "10px", cursor: "pointer" }}>
        {showExperience ? "Hide" : "Show"} Oasis Infobyte Certificates
      </button>
      {showExperience && (
        <div>
          <img src={oi1} alt="Oasis 1" style={{ width: "300px", margin: "10px" }} />
          <img src={oi2} alt="Oasis 2" style={{ width: "300px", margin: "10px" }} />
          <img src={oi3} alt="Oasis 3" style={{ width: "300px", margin: "10px" }} />
        </div>
      )}

      <h1>Other Certificates</h1>

      {[
        { key: "HackerRank", images: [hr1, hr2, hr3] },
        { key: "IBM", images: [ibm1] },
        { key: "Forage", images: [fr1, fr2, fr3] },
        { key: "LetsUpgrade", images: [lu1, lu2, lu3] },
        { key: "Extra", images: [ex1, ex2, ex3] },
      ].map(({ key, images }) => (
        <div key={key} style={{ marginBottom: "20px" }}>
          <button
            onClick={() => toggleOthers(key)}
            style={{ margin: "10px 0", padding: "10px", cursor: "pointer" }}
          >
            {showOthers[key] ? "Hide" : "Show"} {key} Certificates
          </button>
          {showOthers[key] && (
            <div>
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`${key} ${index + 1}`}
                  style={{ width: "300px", margin: "10px" }}
                />
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Certificates;




import oi1 from "../../Assets/certificates/OasisInfobyte/1.jpg";
import oi2 from "../../Assets/certificates/OasisInfobyte/2.jpg";
import oi3 from "../../Assets/certificates/OasisInfobyte/3.jpg";

import hr1 from "../../Assets/certificates/HackerRank/1.jpg";
import hr2 from "../../Assets/certificates/HackerRank/2.jpg";
import hr3 from "../../Assets/certificates/HackerRank/3.jpg";

import ibm1 from "../../Assets/certificates/IBM/1.jpg";

import fr1 from "../../Assets/certificates/Forage/1.jpg";
import fr2 from "../../Assets/certificates/Forage/2.jpg";
import fr3 from "../../Assets/certificates/Forage/3.jpg";

import lu1 from "../../Assets/certificates/LetsUpgrade/1.jpg";
import lu2 from "../../Assets/certificates/LetsUpgrade/2.jpg";
import lu3 from "../../Assets/certificates/LetsUpgrade/3.jpg";

import ex1 from "../../Assets/certificates/Extra/1.jpg";
import ex2 from "../../Assets/certificates/Extra/2.jpg";
import ex3 from "../../Assets/certificates/Extra/3.jpg";