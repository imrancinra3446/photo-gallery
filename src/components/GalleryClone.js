//This is my work...
import React, { useState } from 'react'
import DATA from '../data/data'
import { Card, CardBody, CardColumns, CardImg } from 'reactstrap';
import DisplayImage from './DisplayImage';
import { useEffect } from 'react';

const Gallery = () => {
    const [selectedImg, setSelectedImg] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [updateItems, setUpdateItems] = useState([]);

    const handleSelectImg = (imgId) => {
        let img = DATA.filter((img) => {
            return img.id === imgId
        })
        setSelectedImg(img);
        setIsModalOpen(true);
    }
    useEffect(() => {
        return () => setUpdateItems(DATA)
    }, []);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    }

    const filterItem = categoryItem => {
        let updateItems = DATA.filter((image) => {
            return image.category === categoryItem
        })
        setUpdateItems(updateItems);
        console.log(updateItems);
    };

    let images = updateItems.map((image) => {
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
                <button className='btn btn-info' onClick={() => filterItem("nature")}>Nature</button>
                <button className='btn btn-info' onClick={() => filterItem("animals")}>Animals</button>
                <button className='btn btn-info' onClick={() => filterItem("ocean")}>Ocean</button>
                <button className='btn btn-info' onClick={() => filterItem("desert")}>Desert</button>
                <button className='btn btn-info' onClick={() => filterItem("random")}>Random</button>
                <button className='btn btn-success' onClick={() => setUpdateItems(DATA)}>All</button>
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

// export default Gallery


