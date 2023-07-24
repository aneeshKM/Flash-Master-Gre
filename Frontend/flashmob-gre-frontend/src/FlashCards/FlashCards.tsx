import React from 'react';
import { Carousel, Row, Col } from 'react-bootstrap';
import './FlashCards.css'; // Import the CSS file

const FlashCardsPage: React.FC = () => {
  const flashcards1 = [
    { id: 1, question: 'Question 1 for Carousel 1', answer: 'Answer 1 for Carousel 1' },
    { id: 2, question: 'Question 2 for Carousel 1', answer: 'Answer 2 for Carousel 1' },
    // Add more flashcard items as needed for Carousel 1
  ];

  const flashcards2 = [
    { id: 1, question: 'Question 1 for Carousel 2', answer: 'Answer 1 for Carousel 2' },
    { id: 2, question: 'Question 2 for Carousel 2', answer: 'Answer 2 for Carousel 2' },
    // Add more flashcard items as needed for Carousel 2
  ];

  return (
    <div className="flashcards-container">
      <h1>FlashCards</h1>
      <Row>
        <Col>
          <Carousel interval={null}>
            {flashcards1.map((flashcard) => (
              <Carousel.Item key={flashcard.id}>
                <div className="flashcard">
                  <h2>Question:</h2>
                  <p>{flashcard.question}</p>
                  <h2>Answer:</h2>
                  <p>{flashcard.answer}</p>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
      </Row>

      <Row>
        <Col>
          <Carousel interval={null}>
            {flashcards2.map((flashcard) => (
              <Carousel.Item key={flashcard.id}>
                <div className="flashcard">
                  <h2>Question:</h2>
                  <p>{flashcard.question}</p>
                  <h2>Answer:</h2>
                  <p>{flashcard.answer}</p>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
      </Row>
    </div>
  );
};

export default FlashCardsPage;
