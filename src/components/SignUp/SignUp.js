import { useEffect } from "react";

import SectionForm from "../SectionForm/SectionForm";
import Form from "../Form/Form";
import Input from "../Input/Input";

export default function SignUp(props) {
	useEffect(() => {
		document.title = "Sign Up";
	}, []);

	return (
		<>
			<SectionForm>
				<Form title={props.title}>
					<Input
						label="Username"
						type="text"
						name="input-signup-username"
						placeholder="Username"
					/>

					<Input
						label="Email"
						type="email"
						name="input-signup-email"
						placeholder="email@mail.com"
					/>

					<Input
						label="Password"
						type="password"
						name="input-signup-password"
						placeholder="Password"
					/>
				</Form>
			</SectionForm>
		</>
	);
}
