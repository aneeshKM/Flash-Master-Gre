import React from 'react';
import { Carousel, Row, Col, Card, Container } from 'react-bootstrap';
import './FlashCards.css'; // Import the CSS file

const FlashCardsPage: React.FC = () => {
    const flashcards1 = [
        // { id: 1, question: 'Question 1 for Carousel 1', answer: 'Answer 1 for Carousel 1' },
        // { id: 2, question: 'Question 2 for Carousel 1', answer: 'Answer 2 for Carousel 1' },
        // { id: 3, question: 'Question 3 for Carousel 1', answer: 'Answer 3 for Carousel 1' },
        // { id: 4, question: 'Question 4 for Carousel 1', answer: 'Answer 4 for Carousel 1' },
        // { id: 5, question: 'Question 5 for Carousel 1', answer: 'Answer 5 for Carousel 1' },
        // { id: 6, question: 'Question 6 for Carousel 1', answer: 'Answer 6 for Carousel 1' },
        // Add more flashcard items as needed for Carousel 1
       {id:1, Word: "Intrigue","Marathi Meaning": "1. कुतूहल निर्माण करणे 2. गुप्त मसलत", "English Meaning":"1. To make someone interest a lot 2. To make secret plans to do illicit","Sample Sentence":"1. Throughout the history, people have been intrigued whether there is life somewhere else in the universe. 2. A tale of political intrigue"},
       {id:2, Word: "Intrigue","Marathi Meaning": "1. कुतूहल निर्माण करणे 2. गुप्त मसलत", "English Meaning":"1. To make someone interest a lot 2. To make secret plans to do illicit","Sample Sentence":"1. Throughout the history, people have been intrigued whether there is life somewhere else in the universe. 2. A tale of political intrigue"},
    ];

    return (
        <Container>
            <h1>FlashCards</h1>
            <Row>
                <Col>
                    <Carousel interval={null}>
                        {flashcards1.map((flashcard) => (
                            <Carousel.Item key={flashcard.id}>
                                <Card className='flashcard'>
                                    <Card.Body>
                                        <Card.Title><h2>Word:</h2></Card.Title>
                                        <Card.Text>
                                        <h4>{flashcard.Word}</h4>
                                        </Card.Text>
                                        <Card.Title><h2>Meaning and Example:</h2></Card.Title>
                                        <Card.Text>
                                        <h4>Marathi Meaning: {flashcard['Marathi Meaning']}</h4>
                                        <h4>English Meaning: {flashcard["English Meaning"]}</h4>
                                        <h4>Sample Sentence: {flashcard['Sample Sentence']}</h4>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </Col>
            </Row>
            <Row>
                {flashcards1.map((flashcards) => (
                    <Col key={flashcards.id} sm="2">
                        <Card className='wordCard'>
                            <Card.Title>{flashcards.id}: {flashcards.Word}</Card.Title>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default FlashCardsPage;
