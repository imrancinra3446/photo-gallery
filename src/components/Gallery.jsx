import React, { useState } from 'react'
import { Card, CardBody, CardColumns, CardImg } from 'reactstrap';
import DisplayImage from './DisplayImage';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        imagesData: state.imagesData,
        comments: state.comments
    }
}

const Gallery = props => {
    const [selectedImg, setSelectedImg] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [filterBy, setFilterBy] = useState('');
    const [filterComments, setFilterComments] = useState([])

    const handleSelectImg = (imgId) => {
        let img = props.imagesData.filter((img) => {
            return img.id === imgId
        })
        setSelectedImg(img);
        setIsModalOpen(true);
        let filterComments = props.comments.filter(comment => comment.imgId === imgId);
        setFilterComments(filterComments);
    }

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    }

    const filterItem = categoryItem => {
        setFilterBy(categoryItem);
    }

    const filteredItems = filterBy ? props.imagesData.filter(image => image.category === filterBy) : props.imagesData;

    let images = filteredItems.map(
        image =>
            <CardColumns key={image.id} className='col-lg-4 col-md-6 col-sm-10'>
                <Card style={{ marginBottom: 10, cursor: "pointer" }} onClick={() => handleSelectImg(image.id)}>
                    <CardBody>
                        <CardImg style={{ width: '100%', aspectRatio: '4 / 3', objectFit: 'cover' }} src={image.img} alt={image.title} />
                    </CardBody>
                </Card>
            </CardColumns>
    )
    return (
        <div className="container">
            <h1 className='text-center'>Photo Gallery Using React JS</h1>
            <div className="row">
                <div className='d-flex flex-wrap justify-content-between mb-3'>
                    <button className='btn btn-info' onClick={() => filterItem("nature")}>Nature</button>
                    <button className='btn btn-info' onClick={() => filterItem("animals")}>Animals</button>
                    <button className='btn btn-info' onClick={() => filterItem("ocean")}>Ocean</button>
                    <button className='btn btn-info' onClick={() => filterItem("desert")}>Desert</button>
                    <button className='btn btn-info' onClick={() => filterItem("random")}>Random</button>
                    <button className='btn btn-success' onClick={() => setFilterBy('')}>All</button>
                </div>
                <hr />
                <div className="row">
                    {images}
                </div>
                {selectedImg && <DisplayImage image={selectedImg} isModalOpen={isModalOpen} toggleModal={toggleModal} comments={filterComments} />}
            </div>
        </div>
    )
}

export default connect(mapStateToProps)(Gallery);