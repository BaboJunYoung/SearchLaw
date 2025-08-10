import styles from "./AuthInput.module.css"


export default function AuthInput(props) {
    const text = props.text;
    const type = props.type; // text / password
    const placeholder = props.placeholder;
    const changeFunction = props.onChange;

    return (
        <div className={styles.mainContainer}>
            <div className={styles.text}>{text}</div>
            <div className={styles.inputContainer}>
                <input
                    className={styles.input}
                    type={type}
                    placeholder={placeholder}
                    onChange={changeFunction}
                />
            </div>
        </div>
    )
}