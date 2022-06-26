import Gallery from 'react-grid-gallery';

const Generator = (props) => {

    const images = props.images.map((image) => {
        return ({
            src: image.src.portrait,
            thumbnail: image.src.medium,
            thumbnailWidth: image.width,
            thumbnailHeight: image.height,
            caption: "Photo from Pexels"
        });
    })
    
    return (
        <Gallery images={images} />
    );

}

export default Generator;