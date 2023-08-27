import React from 'react';
import { Carousel, Row, Col, Card, Container } from 'react-bootstrap';
import './FlashCards.css';
import { useLocation } from 'react-router-dom';

interface Dataset {
    id: number;
    word: string;
    marathiMeaning: string;
    englishMeaning: string; 
    sampleSentence: string;
}

const FlashCardsPage: React.FC = () => {
    const location = useLocation();
    const data: Dataset[] = location.state;


    return (
        <Container>
            <h1>FlashCards</h1>
            <Row>
                <Col>
                    <Carousel interval={null}>
                        {data.map((flashcard) => (
                            <Carousel.Item key={flashcard.id}>
                                <Card className='flashcard'>
                                    <Card.Body>
                                        <Card.Title><h2>Word:</h2></Card.Title>
                                        <Card.Text>
                                            <h4>{flashcard.id}) {flashcard.word}</h4>
                                        </Card.Text>
                                        <Card.Title><h2>Meaning and Example:</h2></Card.Title>
                                        <Card.Text>
                                            <h4>Marathi Meaning: {flashcard.marathiMeaning}</h4>
                                            <h4>English Meaning: {flashcard.englishMeaning}</h4>
                                            <h4>Sample Sentence: {flashcard.sampleSentence}</h4>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </Col>
            </Row>
            <Row>
                {data.map((flashcards) => (
                    <Col key={flashcards.id} sm="2">
                        <Card className='wordCard'>
                            <Card.Title>{flashcards.id}: {flashcards.word}</Card.Title>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};


export default FlashCardsPage;
