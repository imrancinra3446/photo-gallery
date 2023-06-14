import React from 'react'
import dateFormat from 'dateformat';
import { Card, CardBody, CardHeader } from 'reactstrap';

const DisplayComments = (props) => {
    let comment = props.comments.map(comment => {
        return (
            <div key={comment.id}>
                <Card
                    className="my-2"
                    color="info"
                    outline
                    style={{
                        width: '18rem'
                    }}
                >
                    <CardHeader tag="h5">
                        {comment.author}
                    </CardHeader>
                    <CardBody>
                        <h5>Rating: {comment.rating}</h5>
                        <p>{comment.comment}</p>
                        <code>{dateFormat(comment.date, " ddd, dS, mmmm, yyyy, h:MM:ss")} </code>
                    </CardBody>
                </Card>
            </div>
        )
    })
    return (
        <div>
            {comment}
        </div>
    )
}

export default DisplayComments
