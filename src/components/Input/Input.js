import styles from "./Input.module.css";

export default function Input(props) {
	return (
		<div className={styles.inputGroup}>
			<input
				className={styles.input}
				type={props.type}
				name={props.name}
				placeholder={props.placeholder}
			/>

			<label htmlFor={props.name}>{props.label}</label>
		</div>
	);
}
