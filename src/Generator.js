import Picture from "./Picture";

const Generator = (props) => {

    const images = props.images.map((image) => {
        return <Picture key={image.id} image={image}/>;
    })
    
    return <div className="Gallery">{images}</div>;

}

export default Generator;