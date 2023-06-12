import React from 'react'
import { Col, Form, FormGroup, Input, Label } from 'reactstrap';

const CommentForm = () => {
    
    return (
        <div>
            <button className='btn btn-primary' onClick={() => {
                document.getElementById('comment').classList.toggle('fade')
            }}>Comment Here 💬</button>
            <div id='comment' >
                <Form style={{border: '1px solid grey', borderRadius: 10, padding: 20, marginTop: 10}}>
                    <FormGroup row>
                        <Label md={2} htmlFor='name'>Name</Label>
                        <Col md={10}>
                            <Input type='text' name='name' placeholder='Your Name' />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label md={2} htmlFor='comment'>Comment</Label>
                        <Col md={10}>
                            <Input type='textarea' name='name' placeholder='Your Comment' />
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        </div>
    )
}

export default CommentForm;
