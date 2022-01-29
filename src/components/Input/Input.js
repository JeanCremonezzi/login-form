import styles from "./Input.module.css";

export default function Input(props) {
	return (
		<input
			className={styles.input}
			type={props.type}
			name={props.name}
			placeholder={props.placeholder}
		/>
	);
}
