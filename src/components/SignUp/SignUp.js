import { useEffect, useState, useRef } from "react";

import SectionForm from "../SectionForm/SectionForm";
import Form from "../Form/Form";
import Input from "../Input/Input";
import Notification from "../Notification/Notification";

export default function SignUp(props) {
	const [notification, setNotification] = useState({
		isOpen: false,
		message: "",
		background: "",
	});

	const [usernameState, setUsernameState] = useState({
		value: "",
		isValid: true,
	});

	const [emailState, setEmailState] = useState({
		value: "",
		isValid: true,
	});

	const [passwordState, setPasswordState] = useState({
		value: "",
		isValid: true,
	});

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

	const handleEmailChange = (event) => {
		if (!emailState.isValid) {
			const check = checkInput(event.target.value, "email");

			setEmailState({
				value: event.target.value,
				isValid: check.valid,
				message: `Email ${check.message}`,
			});
		} else {
			setEmailState((prevState) => {
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
		const emailCheck = checkInput(emailState.value, "email");
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
		} else if (!emailCheck.valid) {
			notificationData.message = `Email ${emailCheck.message}`;
			notificationData.background = "fail";

			setEmailState((prevState) => {
				return {
					value: prevState.value,
					isValid: false,
				};
			});

			inputEmail.current.focus();
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

	const checkInput = (value, field = "") => {
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
		} else if (field === "email" && !value.includes("@")) {
			return {
				valid: false,
				message: "must contain '@'",
			};
		} else {
			return {
				valid: true,
				message: "",
			};
		}
	};

	const inputUsername = useRef();
	const inputEmail = useRef();
	const inputPassword = useRef();

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
						name="input-signup-username"
						placeholder="Username"
						value={usernameState.value}
						onchange={handleUsernameChange}
						isValid={usernameState.isValid}
						ref={inputUsername}
					/>

					<Input
						label="Email"
						type="email"
						name="input-signup-email"
						placeholder="email@mail.com"
						value={emailState.value}
						onchange={handleEmailChange}
						isValid={emailState.isValid}
						ref={inputEmail}
					/>

					<Input
						label="Password"
						type="password"
						name="input-signup-password"
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
