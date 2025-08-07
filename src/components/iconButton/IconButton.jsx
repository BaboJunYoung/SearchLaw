import styles from "./IconButton.module.css"

export default function IconButton(props) {
    const sideLength = props.sideLength;
    const address = props.address;
    const srcName = props.src;

    const sizeStyle = {
        width: sideLength,
        height: sideLength
    }

    return (
        <button
            className={styles.button}
        >
            <img 
                src={`/assets/icons/${srcName}`}
                style={sizeStyle}
            />
        </button>
    )
}