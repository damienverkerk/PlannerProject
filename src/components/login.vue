<template>
	<div id="login">
		<transition name="fade">
			<div v-if="performingRequest" class="loading">
				<p>Loading...</p>
			</div>
		</transition>
		<div
			class="flex mb-4"
			:class="{ 'signup-form': !showLoginForm && !showForgotPassword }"
		>
			<div class="w-full max-w-xs">
				<form
					v-if="showLoginForm"
					@submit.prevent
					class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
				>
					<div class="mb-4">
						<label
							class="block text-gray-700 text-sm font-bold mb-2"
							for="email"
						>
							Email
						</label>
						<input
							v-model.trim="loginForm.email"
							class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							id="email"
							type="text"
							placeholder="email"
						/>
					</div>
					<div class="mb-6">
						<label
							class="block text-gray-700 text-sm font-bold mb-2"
							for="password"
						>
							Password
						</label>
						<input
							v-model.trim="loginForm.password"
							class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
							id="password"
							type="password"
							placeholder="******************"
						/>
						<p class="text-red-500 text-xs italic">
							Please choose a password.
						</p>
					</div>
					<div class="flex items-center justify-between">
						<button
							class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
							type="button"
							@click="login"
						>
							Sign In
						</button>
						<a @click="togglePasswordReset">Forgot Password</a>
						<a @click="toggleForm"> Create an account</a>
					</div>
				</form>
				<form v-else @submit.prevent>
					<h1>Get started</h1>
					<label for="name">Name</label>
					<input
						v-model.trim="signupForm.name"
						type="text"
						placeholder="savvyy apps"
						id="name"
					/>

					<label for="title">Title</label>
					<input
						v-model.trim="signupForm.title"
						type="text"
						placeholder="Company"
						id="title"
					/>

					<label for="email2">Email</label>
					<input
						v-model.trim="signupForm.email"
						type="text"
						placeholder="you@email.com"
						id="email2"
					/>

					<label for="password2">Password</label>
					<input
						v-model.trim="signupForm.password"
						type="password"
						placeholder="min 6 characters"
						id="password"
					/>
					<button @click="signup" class="button">Sign Up</button>

					<div class="extras">
						<a>Back to Log In</a>
					</div>
				</form>
				<form
					v-if="showForgotPassword"
					@submit.prevent
					class="password-reset"
				>
					<div v-if="!passwordResetSuccess">
						<h1>Reset Password</h1>
						<p>We will send you an email to reset your password</p>

						<label for="email3">Email</label>
						<input
							v.model.trim="passwordForm.email"
							type="text"
							placeholder="you@email.com"
							id="email3"
						/>

						<button @click="resetPassword" class="button">
							Submit
						</button>

						<div class="extras">
							<a @click="togglePasswordReset">Back to Log In</a>
						</div>
					</div>
					<div v-else>
						<h1>Email Sent</h1>
						<p>
							check your email for a link to reset your password
						</p>
						<button @click="togglePasswordReset" class="button">
							back to login
						</button>
					</div>
				</form>
				<transition name="fade">
					<div v-if="errorMsg !== ''" class="error-msg">
						<p>{{ errorMsg }}</p>
					</div>
				</transition>
			</div>
		</div>
	</div>
</template>

<script>
const fb = require("../firebaseConfig.js");
export default {
	name: "Login",
	state: {
		currentUser: null,
		userProfile: {}
	},
	data: function() {
		return {
			loginForm: {
				email: "",
				password: ""
			},
			signupForm: {
				name: "",
				title: "",
				email: "",
				password: ""
			},
			passwordForm: {
				email: ""
			},
			showLoginForm: true,
			showForgotPassword: false,
			passwordResetSuccess: false,
			performingRequest: false,
			errorMsg: ""
		};
	},
	methods: {
		togglePasswordReset() {
			if (this.showForgotPassword) {
				this.showLoginForm = true;
				this.showForgotPassword = false;
				this.passwordResetSuccess = false;
			} else {
				this.loginForm = false;
				this.showForgotPassword = true;
			}
		},
		toggleForm() {
			this.errorMsg = "";
			this.showLoginForm = !this.showLoginForm;
		},
		login() {
			this.performingRequest = true;

			fb.auth
				.signInWithEmailAndPassword(
					this.loginForm.email,
					this.loginForm.password
				)
				.then(user => {
					this.$store.commit("setCurrentUser", user.user);
					this.$store.dispatch("fetchUserProfile");
					this.performingRequest = false;
					this.$router.push("/dashboard");
				})
				.catch(err => {
					this.performingRequest = false;
					this.errorMsg = err.message;
				});
		},
		signup() {
			this.performingRequest = true;

			fb.auth
				.createUserWithEmailAndPassword(
					this.signupForm.email,
					this.signupForm.password
				)
				.then(user => {
					this.$store.commit("setCurrentUser", user.user);

					// create user obj
					fb.usersCollection
						.doc(user.user.uid)
						.set({
							name: this.signupForm.name,
							title: this.signupForm.title
						})
						.then(() => {
							this.$store.dispatch("fetchUserProfile");
							this.performingRequest = false;
							this.$router.push("/dashboard");
						})
						.catch(err => {
							console.log(err);
							this.performingRequest = false;
						});
				})
				.catch(err => {
					console.log(err);
				});
		},
		resetPassword() {
			this.performingRequest = true;

			fb.auth
				.sendPasswordResetEmail(this.passwordForm.email)
				.then(() => {
					this.performingRequest = false;
					this.passwordResetSuccess = true;
					this.passwordForm.email = "";
				})
				.catch(err => {
					console.log(err);
					this.performingRequest = false;
					this.errorMsg = err.message;
				});
		}
	}
};
</script>

<style></style>
