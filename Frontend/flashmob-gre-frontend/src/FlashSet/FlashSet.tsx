import React, { useEffect, useState } from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { getData } from '../Utils/api';
import "./FlashSet.css";

const FlashSet: React.FC = () => {

    const dataset = [
        { id: 1, name: "Set of All words", words: 100 },
        { id: 2, name: "Set 1", words: 30 },
        { id: 3, name: "Set 2", words: 30 },
        { id: 4, name: "Set 3", words: 30 },
        { id: 5, name: "Set 4", words: 30 },
    ];

    const navigate = useNavigate();

    const [data, setData] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchDataFromApi = async () => {
            try {
                const fetchedData = await getData();
                setData(fetchedData);
                setLoading(false);
            } catch (error) {
                setError("Error fetching data");
                setLoading(false);
            }
        };

        fetchDataFromApi();
    }, []);
    // console.log(data); 
    console.log(data[0]);
    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }


    const nextPage = (id: string) => {
        const midPointIndex = Math.ceil(data.length/2);
        if (id === '1') {
            navigate(`/set${id}`, { state: data });
        }
        else if (id === '2') {
            navigate(`/set${id}`, { state: data.reverse() });
        }
        else if (id === '3') {
            navigate(`/set${id}`, { state: data.slice(0,midPointIndex)});
        }
        else if (id === '4') {
            navigate(`/set${id}`, { state: data.slice(midPointIndex, data.length)});
        }
        else {
            navigate(`/set${id}`, { state: data });
        }
    }

    return (
        <Container fluid>
            <Row>
                <h1 className="custom-h1">Practice Sets</h1>
            </Row>
            <Row className="mb-3">
                <Col>
                    <Card onClick={() => nextPage('1')}>
                        <Card.Body className="custom-card">
                            <Card.Title>{dataset[0].name}</Card.Title>
                            <Card.Text>Total number of practice words are {dataset[0].words}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className="mb-3">
                <Col>
                    <Card onClick={() => nextPage('2')}>
                        <Card.Body className="custom-card">
                            <Card.Title>{dataset[1].name}</Card.Title>
                            <Card.Text>Total number of practice words are {dataset[0].words}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className="mb-3">
                <Col>
                    <Card onClick={() => nextPage('3')}>
                        <Card.Body className="custom-card">
                            <Card.Title>{dataset[2].name}</Card.Title>
                            <Card.Text>Total number of practice words are {dataset[0].words}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className="mb-3">
                <Col>
                    <Card onClick={() => nextPage('4')}>
                        <Card.Body className="custom-card">
                            <Card.Title>{dataset[3].name}</Card.Title>
                            <Card.Text>Total number of practice words are {dataset[0].words}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

        </Container>
    );

};

export default FlashSet;