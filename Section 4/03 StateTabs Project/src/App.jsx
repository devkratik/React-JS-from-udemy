// 1 - Create a state variable, isOpen, to control opening and closing the app. The interface is hidden when the close icon is clicked and shown when the Start button is pressed.
// 2 - Implement functionality to display cards based on the currently active tab. Tabs can be switched either by clicking the Prev and Next buttons or by clicking directly on the tab itself.

import { useState } from "react";

// Card data with details for each card
const cardData = [
  {
    title: "Mocha",
    description: "Developing a fintech product for the international market",
    date: "April 24, 2024",
    imageUrl: "/img-1.jpeg",
    tags: ["#fintech", "#international", "#market"],
    archived: false,
  },
  {
    title: "Money Forward",
    description: "Frontend and backend for a salary payout service on demand",
    date: "January 16, 2024",
    imageUrl: "/img-2.jpeg",
    tags: ["#finance", "#service", "#payouts"],
    archived: false,
  },
  {
    title: "ActivePlatform",
    description:
      "Adobe integration and platform development for comprehensive subscriptions",
    date: "November 10, 2022",
    imageUrl: "/img-4.jpeg",
    tags: ["#integration", "#platform", "#subscription"],
    archived: false,
  },
  {
    title: "START",
    description: "Developed an A/B testing platform for a streaming service",
    date: "September 22, 2022",
    imageUrl: "/img-5.jpeg",
    tags: ["#A/B testing", "#streaming", "#platform"],
    archived: false,
  },
  {
    title: "Mindbox",
    description: "Supporting the redesign of an automated marketing platform",
    date: "September 21, 2022",
    imageUrl: "/img-6.jpeg",
    tags: ["#marketing", "#redesign", "#automation"],
    archived: false,
  },
];

const tabData = [
  [cardData[0], cardData[1]],
  [cardData[2], cardData[3]],
  [cardData[4]],
];

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  function toggleIsOpen() {
    setIsOpen((prev) => !prev);
  }

  function handlePrevTab() {
    if (activeTab > 0) {
      setActiveTab((prev) => prev - 1);
    }
  }
  function handleNextTab() {
    if (activeTab < tabData.length - 1) {
      setActiveTab((prev) => prev + 1);
    }
  }

  return (
    <>
      {isOpen ? (
        ""
      ) : (
        <button onClick={toggleIsOpen} className="btn start-btn">
          Start
        </button>
      )}

      {isOpen && (
        <div className="app">
          <span onClick={toggleIsOpen} className="app__close">
            &times;
          </span>
          <h1 className="app__title">State Tabs Card Display</h1>

          <div className="app__tabs">
            <button
              onClick={() => setActiveTab(0)}
              className={`btn app__tabs-btn ${activeTab === 0 ? "active" : ""}`}
            >
              Tab 1
            </button>
            <button
              onClick={() => setActiveTab(1)}
              className={`btn app__tabs-btn ${activeTab === 1 ? "active" : ""}`}
            >
              Tab 2
            </button>
            <button
              onClick={() => setActiveTab(2)}
              className={`btn app__tabs-btn ${activeTab === 2 ? "active" : ""}`}
            >
              Tab 3
            </button>
          </div>

          <CardContainer cards={tabData[activeTab]} />

          <div className="app__navigations">
            <button
              onClick={handlePrevTab}
              disabled={activeTab === 0}
              className="btn app__navigations-btn"
            >
              &lt; Previous
            </button>
            <button
              onClick={handleNextTab}
              disabled={activeTab === tabData.length - 1}
              className="btn app__navigations-btn"
            >
              Next &gt;
            </button>
          </div>

          <Footer />
        </div>
      )}
    </>
  );
}

//CardContainer component:
function CardContainer(props) {
  console.log("props", props);
  return (
    <div className="cardsContainer">
      <Card cardObj={props.cards[0]} />
      {props.cards[1] && <Card cardObj={props.cards[1]} />}
    </div>
  );
}

//Individual Card Component
function Card({ cardObj }) {
  return (
    <div className="cardsContainer__card">
      <figure className="cardsContainer__card-image">
        <img
          className="cardsContainer__card-image-content"
          src={cardObj.imageUrl}
          alt={cardObj.title}
        />
      </figure>
      <div className="cardsContainer__card-info">
        <h2 className="cardsContainer__card-info-title">{cardObj.title}</h2>
        <p className="cardsContainer__card-info-description">
          {cardObj.description}
        </p>
        <p className="cardContainer__card-info-date">{cardObj.date}</p>

        <div className="cardsContainer__card-tags">
          <CardTags tags={cardObj.tags} />
        </div>
      </div>
    </div>
  );
}

//CardTag component:
function CardTags({ tags }) {
  return tags.map((tag) => {
    return <p className="cardsContainer__card-tags-item">{tag}</p>;
  });
}

//Footer component:
function Footer() {
  return (
    <>
      <footer className="app__footer">
        <p className="app__footer-content">
          <strong>Technologies used:</strong> React, JSX, useState, Conditional
          Rendering, CSS Modules, Event Handling.
        </p>
      </footer>
    </>
  );
}

export default App;
