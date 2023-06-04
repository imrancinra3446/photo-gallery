import React, { useState } from 'react'
import DATA from '../data/data'
import { Card, CardBody, CardColumns, CardImg} from 'reactstrap';
import DisplayImage from './DisplayImage';

const Gallery = () => {
    const [selectedImg, setSelectedImg] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [items, setItems ] = useState(DATA);

    const handleSelectImg = (imgId) => {
        let img = DATA.filter((img) => {
            return img.id === imgId
        })
        setSelectedImg(img);
        setIsModalOpen(true);
    }

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    }

    const filterItem = categoryItem => {
        let updateItems = items.filter((item) => {
            return item.category === categoryItem
        })
        setItems(updateItems);
        console.log(updateItems);
    }

    let images = items.map((image) => {
        return (
            <CardColumns style={{ width: "33%" }} key={image.id}>
                <Card style={{ marginBottom: 10, }} onClick={() => handleSelectImg(image.id)}>
                    <CardBody>
                        <CardImg src={image.img} alt={image.title} />
                    </CardBody>
                </Card>
            </CardColumns>
        )
    })
    return (
        <div className="container">
            <hr />
            <div className='d-flex justify-content-around'>
                <button className='btn btn-info' onClick={()=> filterItem("nature")}>Nature</button>
                <button className='btn btn-info' onClick={()=> filterItem("animals")}>Animals</button>
                <button className='btn btn-info' onClick={()=> filterItem("ocean")}>Ocean</button>
                <button className='btn btn-info' onClick={()=> filterItem("desert")}>Desert</button>
                <button className='btn btn-info' onClick={()=> filterItem("random")}>Random</button>
                <button className='btn btn-success' onClick={()=> setItems(DATA)}>All</button>
            </div>
            <hr />
            <br />
            <div className="row">
                {images}
            </div>
            {selectedImg && <DisplayImage image={selectedImg} isModalOpen={isModalOpen} toggleModal={toggleModal} />}
        </div>
    )
}

export default Gallery


