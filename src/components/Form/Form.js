import styles from "./Form.module.css";

export default function Form(props) {
	return (
		<form className={styles.form}>
			<h1>{props.title}</h1>
			{props.children}
		</form>
	);
}
