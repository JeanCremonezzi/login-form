import { useEffect, useRef, useState } from "react";

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
		isValid: true,
	});

	const [passwordState, setPasswordState] = useState({
		value: "",
		isValid: true,
	});

	const inputUsername = useRef();
	const inputPassword = useRef();

	const handleUsernameChange = (event) => {
		if (!usernameState.isValid) {
			const check = checkInput(event.target.value);

			setUsernameState({
				value: event.target.value,
				isValid: check.valid,
				message: `Username ${check.message}`,
			});
		} else {
			setUsernameState((prevState) => {
				return {
					value: event.target.value,
					isValid: prevState.isValid,
				};
			});
		}
	};

	const handlePasswordChange = (event) => {
		if (!passwordState.isValid) {
			const check = checkInput(event.target.value);

			setPasswordState({
				value: event.target.value,
				isValid: check.valid,
				message: `Password ${check.message}`,
			});
		} else {
			setPasswordState((prevState) => {
				return {
					value: event.target.value,
					isValid: prevState.isValid,
				};
			});
		}
	};

	const handleSubmitButton = (event) => {
		event.preventDefault();

		let notificationData = {
			isOpen: true,
			message: "",
			background: "",
		};

		const usernameCheck = checkInput(usernameState.value);
		const passwordCheck = checkInput(passwordState.value);

		if (!usernameCheck.valid) {
			notificationData.message = `Username ${usernameCheck.message}`;
			notificationData.background = "fail";

			setUsernameState((prevState) => {
				return {
					value: prevState.value,
					isValid: false,
				};
			});

			inputUsername.current.focus();
		} else if (!passwordCheck.valid) {
			notificationData.message = `Password ${passwordCheck.message}`;
			notificationData.background = "fail";

			setPasswordState((prevState) => {
				return {
					value: prevState.value,
					isValid: false,
				};
			});
		} else {
			notificationData.message = "Successfully logged in";
			notificationData.background = "success";
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

	const checkInput = (username) => {
		if (username.trim() === "") {
			return {
				valid: false,
				message: "must be filled",
			};
		} else if (username.includes(" ")) {
			return {
				valid: false,
				message: "cannot contain white spaces",
			};
		} else if (username.trim().length <= 7) {
			return {
				valid: false,
				message: "must be at least 8 characters long",
			};
		} else {
			return {
				valid: true,
				message: "",
			};
		}
	};

	useEffect(() => {
		document.title = "Sign In";
	}, []);

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
						ref={inputUsername}
					/>

					<Input
						label="Password"
						type="password"
						name="input-signin-password"
						placeholder="Password"
						value={passwordState.value}
						onchange={handlePasswordChange}
						isValid={passwordState.isValid}
						ref={inputPassword}
					/>
				</Form>
			</SectionForm>
		</>
	);
}
