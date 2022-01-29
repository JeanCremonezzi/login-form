import styles from "./SectionForm.module.css";

export default function SectionForm(props) {
	return (
		<section className={styles.sectionForm}>
			{props.children}
		</section>
	);
}
