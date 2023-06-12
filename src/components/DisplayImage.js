import React from 'react'
import { Card, CardHeader, CardImg, Modal, ModalBody } from "reactstrap"
import DisplayComments from './DisplayComments'
import CommentForm from './CommentForm'

const DisplayImage = props => {
    return (
        <div>
            <Modal isOpen={props.isModalOpen} fullscreen>
                <ModalBody>
                    <Card style={{ padding: 20 }}>
                        <CardHeader><button onClick={props.toggleModal} className='btn btn-close mb-1'></button> </CardHeader>
                        <CardImg style={{ maxWidth: "50vw", aspectRatio: '4 / 3' }} src={props.image[0].img} alt={props.image[0].title} />
                        <hr />
                        <div>
                            <h2> {props.image[0].title}</h2>
                            <p>{props.image[0].description}</p>
                            <DisplayComments comments={props.comments} />
                            <CommentForm />
                        </div>
                    </Card>
                </ModalBody>
            </Modal>
        </div>
    )
}

export default DisplayImage
