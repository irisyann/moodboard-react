import Gallery from 'react-grid-gallery';

const Generator = (props) => {

    const images = props.images.map((image) => {
        console.log(image);
        return ({
            src: image.src.portrait,
            thumbnail: image.src.medium,
            thumbnailWidth: image.width,
            thumbnailHeight: image.height,
            caption: "Photo by " + image.photographer + " on Pexels"
        });
    })
    
    return (
        <Gallery images={images} />
    );

}

export default Generator;