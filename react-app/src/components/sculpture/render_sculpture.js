import { sculptures } from "./data";

export default function Gallery() {
    let index = 0;

    function onNextClick(){
        index = index + 1;
    }

    let sculpture = sculptures[index];
    return (
        <>
            <button onClick={onNextClick}>
                Next
            </button>
            <h2>
                <i>{sculpture.name}</i>
                by {sculpture.artist}
            </h2>
            <h3>
                ({index+1} of {sculptures.length})
            </h3>
            <img
                src={sculpture.url}
                alt={sculpture.alt}
            />
            <p>
                {sculpture.description}
            </p>
        </>
    );
}