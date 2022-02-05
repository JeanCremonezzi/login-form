import { useEffect, useRef, useState } from "react";

import SectionForm from "../SectionForm/SectionForm";
import Form from "../Form/Form";
import Input from "../Input/Input";
import Notification from "../Notification/Notification";

import { verifyUserExists } from "../../tools/localStorage";

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
			inputPassword.current.focus();
		} else {
			const user = {
				username: usernameState.value,
				password: passwordState.value,
			};

			const response = verifyUserExists(user);

			notificationData.message = response.message;
			notificationData.background = response.result;

			setUsernameState({
				value: "",
				isValid: "",
			});

			setPasswordState({
				value: "",
				isValid: "",
			});
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

	const checkInput = (value) => {
		if (value.trim() === "") {
			return {
				valid: false,
				message: "must be filled",
			};
		} else if (value.includes(" ")) {
			return {
				valid: false,
				message: "cannot contain white spaces",
			};
		} else if (value.trim().length <= 7) {
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
		document.title = props.title;
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
				<Form title={props.title} onSubmit={handleSubmitButton}>
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
