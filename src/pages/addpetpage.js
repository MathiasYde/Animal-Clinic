import NavBar from "../components/navbar"

import firebase from "firebase/app";
import UserContext from "../datamodels/usercontext";

import { useContext } from "react"
import swal from "sweetalert";

export default function AddPetPage() {
	const firestore = firebase.firestore();

	const { account } = useContext(UserContext);

	const addPet = () => {
		const name = document.getElementById("name-field").value;
		const specie = document.getElementById("specie-field").value;



		firestore.collection("pets").add({
			name: name,
			specie: specie,
			status: null,
			owners: [account.uid]
		}).then((doc) => {
			account.pets.push(doc.id);
			firestore.collection("accounts").doc(account.uid).update({
				pets: account.pets
			});
		}).catch((error) => {
			swal(error.code, error.message, "error");
		})
	}

	return (
		<div className="flex flex-col flex-1">
			<NavBar />
			To get started, add a pet.
			<div>
				<form className="flex flex-col justify-center flex-1 w-64 mx-auto">
					<label htmlFor="name">Name</label>
					<input id="name-field" type="text" name="name" placeholder="name" />

					<label htmlFor="name">Specie</label>
					<select name="specie" id="specie-field">
						<option value="dog">Dog</option>
						<option value="cat">Cat</option>
						<option value="bunny">Bunny</option>
						<option value="chicken">Chicken</option>
						<option value="spider">Spider</option>
						<option value="snake">Snake</option>
						<option value="snail">Snail</option>
					</select>
				</form>
				<button onClick={addPet}>Add Pet</button>
			</div>
		</div>
	);
}