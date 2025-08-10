import styles from "./ImageButton.module.css"

export default function ImageButton(props) {
    const src = props.src;
    const sideLength = props.sideLength;
    const onClick = props.onClick;

    return (
        <button
            className={styles.button}
            styles={{
                width: {sideLength},
                height: {sideLength}
            }}
            onClick={onClick}
        >
            <img
                className={styles.image}
                alt="src"
                src={src}
            />
        </button>
    )
}