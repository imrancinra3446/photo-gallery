import React, { useState } from 'react'
import { connect } from 'react-redux';
import { Col, Form, FormGroup, Input, Label } from 'reactstrap';

const CommentForm = (props) => {
    const [author, setAuthor] = useState('')
    const [rating, setRating] = useState(1)
    const [comment, setComment] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();

        props.dispatch({
            type: 'ADD_COMMENT',
            payload: {
                author: author,
                rating: rating,
                comment: comment,
                imgId: props.imgId,
            }
        })

        setAuthor('');
        setRating('');
        setComment('');
    }

    return (
        <div>
            <button className='btn btn-primary' onClick={() => {
                document.getElementById('comment').classList.toggle('fade')
            }}>Comment Here 💬</button>
            <div id='comment' >
                <Form onSubmit={handleSubmit} style={{ border: '1px solid grey', borderRadius: 10, padding: 20, marginTop: 10 }}>
                    <FormGroup row>
                        <Label md={2} htmlFor='name'>Name</Label>
                        <Col md={10}>
                            <Input type='text' name='name' placeholder='Your Name' value={author} required onChange={(e) => {
                                setAuthor(e.target.value);
                            }} />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label md={2} htmlFor='rating'>Rating</Label>
                        <Col md={10}>
                            <FormGroup>
                                <select name="rating" value={rating} onChange={(e) => {
                                    setRating(e.target.value);
                                }}>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </FormGroup>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label md={2} htmlFor='comment'>Comment</Label>
                        <Col md={10}>
                            <Input type='textarea' name='name' placeholder='Your Comment' value={comment} onChange={(e) => {
                                setComment(e.target.value);
                            }} />
                        </Col>
                    </FormGroup>
                    <button className='btn btn-primary' type='submit'>➤</button>
                </Form>
            </div>
        </div>
    )
}

export default connect()(CommentForm);
