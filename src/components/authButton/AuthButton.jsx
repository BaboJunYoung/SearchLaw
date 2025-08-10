import styles from "./AuthButton.module.css"

export default function AuthButton(props) {
    const buttonText = props.text;
    const clickFuntion = props.onClick;

    return (
        <button
            className={styles.button}
            onClick={clickFuntion}
        >{buttonText}</button>
    )
}