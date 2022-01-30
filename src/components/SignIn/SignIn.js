import SectionForm from "../SectionForm/SectionForm";
import Form from "../Form/Form";
import Input from "../Input/Input";

export default function SignIn(props) {
	return (
		<>
			<SectionForm>
				<Form title="Sign in">
					<Input
						label="Username"
						type="text"
						name="input-signin-username"
						placeholder="Username"
					/>

					<Input
						label="Password"
						type="password"
						name="input-signin-password"
						placeholder="Password"
					/>
				</Form>
			</SectionForm>
		</>
	);
}
