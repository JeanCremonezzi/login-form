import { useEffect, useState } from "react";

import SectionForm from "../SectionForm/SectionForm";
import Form from "../Form/Form";
import Input from "../Input/Input";
import Notification from "../Notification/Notification";

export default function SignIn(props) {
	const [notification, setNotification] = useState({
		isOpen: false,
		message: "",
		background: "",
	});

	const [usernameState, setUsernameState] = useState({
		value: "",
		isValid: null,
	});

	const [passwordState, setPasswordState] = useState({
		value: "",
		isValid: null,
	});

	const handleUsernameChange = (event) => {
		setUsernameState({
			value: event.target.value,
			isValid: event.target.value.length >= 8,
		});

		notification.isOpen && handleNotificationClose();
	};

	const handlePasswordChange = (event) => {
		setPasswordState({
			value: event.target.value,
			isValid: event.target.value.length >= 8,
		});

		notification.isOpen && handleNotificationClose();
	};

	const handleSubmitButton = (event) => {
		event.preventDefault();

		let notificationData = {
			isOpen: true,
			message: "",
			background: "",
		};

		if (usernameState.isValid && passwordState.isValid) {
			notificationData.message = "Valid";
			notificationData.background = "success";
		} else {
			notificationData.message = "Invalid Credentials";
			notificationData.background = "fail";
		}

		setNotification(notificationData);
	};

	const handleNotificationClose = () => {
		setNotification({
			isOpen: false,
			message: "",
			background: "",
		});
	};

	useEffect(() => {
		document.title = "Sign In"
	});

	return (
		<>
			{notification.isOpen && (
				<Notification
					message={notification.message}
					className={notification.background}
					onClick={handleNotificationClose}
				/>
			)}

			<SectionForm>
				<Form title="Sign in" onSubmit={handleSubmitButton}>
					<Input
						label="Username"
						type="text"
						name="input-signin-username"
						placeholder="Username"
						value={usernameState.value}
						onchange={handleUsernameChange}
						isValid={usernameState.isValid}
					/>

					<Input
						label="Password"
						type="password"
						name="input-signin-password"
						placeholder="Password"
						value={passwordState.value}
						onchange={handlePasswordChange}
						isValid={passwordState.isValid}
					/>
				</Form>
			</SectionForm>
		</>
	);
}
