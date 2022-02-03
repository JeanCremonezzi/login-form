import React, { useImperativeHandle, useRef } from "react";

import styles from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
	const inputRef = useRef();

	useImperativeHandle(ref, () => {
		return {
			focus: () => {
				inputRef.current.focus();
			},
		};
	});

	return (
		<div className={styles.inputGroup}>
			<input
				className={`${styles.input} ${
					props.isValid === false ? styles.invalid : styles.valid
				}`}
				type={props.type}
				name={props.name}
				placeholder={props.placeholder}
				autoComplete="off"
				value={props.value}
				onChange={props.onchange}
				ref={inputRef}
			/>

			<label htmlFor={props.name}>{props.label}</label>
		</div>
	);
});

export default Input;
