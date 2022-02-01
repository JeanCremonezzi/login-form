import styles from "./Input.module.css";

export default function Input(props) {
	return (
		<div className={styles.inputGroup}>
			<input
				className={`${styles.input} ${props.isValid === false ? styles.invalid : styles.valid}`}
				type={props.type}
				name={props.name}
				placeholder={props.placeholder}
				autoComplete="off"
				value={props.value}
				onChange={props.onchange}
			/>

			<label htmlFor={props.name}>{props.label}</label>
		</div>
	);
}
