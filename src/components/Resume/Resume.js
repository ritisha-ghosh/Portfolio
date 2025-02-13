import React from "react";
import './Resume.css'; // Import the CSS file for animations

// Commented out the existing code
/*
import React, { useState } from "react";
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import HackerRankPDF from '../../Assets/Certificates/HackerRank.pdf'; // Ensure the path is correct

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function Resume() {
  const [numPages, setNumPages] = useState(null);
  const [isZoomed, setIsZoomed] = useState(false);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const handleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  return (
    <div className="resume-container">
      <h1>Ritisha's Resume</h1>
      <div className={`pdf-container ${isZoomed ? 'zoomed' : ''}`} onClick={handleZoom}>
        <Document
          file={HackerRankPDF}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          {numPages && Array.from(
            new Array(numPages),
            (el, index) => (
              <Page
                key={`page_${index + 1}`}
                pageNumber={index + 1}
                scale={isZoomed ? 1.5 : 1} // Adjust the scale based on zoom state
              />
            ),
          )}
        </Document>
      </div>
    </div>
  );
}
*/

function Resume() {
  return (
    <div className="coming-soon-container">
      <h1>Coming Soon</h1>
      <p>Please check back later.</p>
    </div>
  );
}

export default Resume;