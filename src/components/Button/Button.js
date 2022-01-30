import styles from "./Button.module.css";

export default function Button(props) {
	const handleSubmit = (event) => {
		event.preventDefault();
	};

	return (
		<button className={styles.button} type={props.type} onClick={handleSubmit}>
			{props.text}
		</button>
	);
}
