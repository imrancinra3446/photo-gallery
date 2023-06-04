import React from 'react'
import { Card, CardHeader, CardImg, CardText, Modal, ModalBody } from "reactstrap"

const DisplayImage = props => {
    return (
        <div>
            <Modal isOpen={props.isModalOpen} fullscreen>
                <ModalBody>
                    <Card style={{padding: 20}}>
                        <CardHeader><button onClick={props.toggleModal} className='btn btn-close mb-1'></button> </CardHeader>
                        <CardImg style={{maxHeight: "50vh", maxWidth: "50vw"}} src={props.image[0].img} alt={props.image[0].title} />
                        <CardText>
                            <hr />
                            <h2> {props.image[0].title}</h2>
                            <p>{props.image[0].description}</p>
                        </CardText>
                    </Card>
                </ModalBody>
            </Modal>
        </div>
    )
}

export default DisplayImage
