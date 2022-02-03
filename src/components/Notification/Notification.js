import ReactDOM from "react-dom";

import styles from "./Notification.module.css";

export default function Notification(props) {
	return ReactDOM.createPortal(
		<div
			className={`${styles.notification} ${styles[props.className]}`}
			onClick={props.onClick}
		>
			<p>{props.message}</p>
			<small>click to close</small>
		</div>,
		document.getElementById("notification")
	);
}
