export function getUsers() {
	if (localStorage.getItem("users") === null) {
		return [];
	} else {
		return JSON.parse(localStorage.getItem("users"));
	}
}

export function setUser(newUser) {
	let allUsers = getUsers();

	if (allUsers.some((user) => user.email === newUser.email)) {
		return { result: "fail", message: "Email already registered" };

	} else if (allUsers.some((user) => user.username === newUser.username)) {
		return { result: "fail", message: "Username already registered" };
        
	} else {
		allUsers.push(newUser);

		localStorage.setItem("users", JSON.stringify(allUsers));

		return { result: "success", message: "Successfully registered" };
	}
}

export function verifyUserExists(userVerify) {
	let allUsers = getUsers();

	if (
		allUsers.some(
			(user) =>
				user.username === userVerify.username &&
				user.password === userVerify.password
		)
	) {
		return { result: "success", message: "Successfully logged in" };
	} else {
		return { result: "fail", message: "User not found or wrong credentials" };
	}
}
