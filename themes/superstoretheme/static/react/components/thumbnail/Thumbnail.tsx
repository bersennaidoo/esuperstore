import React from "react";

type TThumbnailProps = {
    image: string
    title: string
}

const Thumbnail = (props: TThumbnailProps) => {
    const { image, title } = props

    return (
        <a 
          href="#todo"
          className="d-flex flex-column text-decoration-none"
        >
            <div className="d-flex justify-content-center align-items-center">
                <img className="img-fluid" src={image} alt={title} />
            </div>
            <p className="d-flex justify-content-center align-items-center text-center">{title}</p>
        </a>
    )
}

export default Thumbnail;