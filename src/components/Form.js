import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../assets/css/styles.css";

let userData = {};
let socialProfile = [];
let educationProfile = [];
let skills = [];

class Form extends Component {
	state = {
		quesNum: 0,
		Name: "",
		Role: "",
		RoleDecription: "",
		About: "",
		Profile: [],
		Education: [],
		skillDesc: "",
		skill: [],
	};

	nextQues = () => {
		this.setState({ quesNum: this.state.quesNum + 1 });
	};

	prevQues = () => {
		this.setState({ quesNum: this.state.quesNum - 1 });
	};

	removeProfile = (id) => {
		socialProfile = socialProfile.filter((item) => item.id != id);
		this.setState({ Profile: socialProfile });
		this.refreshSocial();
	};

	removeEducation = (id) => {
		educationProfile = educationProfile.filter((item) => item.id != id);
		this.setState({ Education: educationProfile });
		this.refreshEducation();
	};

	removeSkill = (id) => {
		skills = skills.filter((item) => item.id != id);
		this.setState({ skill: skills });
		this.refreshSkill();
	};

	refreshSocial = () => {
		return (
			<tbody>
				{socialProfile.map((row) => (
					<tr key={row.id}>
						<td>{row.name}</td>
						<td>{row.url}</td>
						<td>
							<button
								className="border-2 border-red-500 text-red-500"
								value={row.id}
								onClick={(e) => this.removeProfile(e.target.value)}
							>
								Delete
							</button>
						</td>
					</tr>
				))}
			</tbody>
		);
	};

	refreshEducation = () => {
		return (
			<tbody>
				{educationProfile.map((row) => (
					<tr key={row.id}>
						<td>{row.UniversityName}</td>
						<td>{row.specialization}</td>
						<td>{row.MonthOfPassing}</td>
						<td>{row.YearOfPassing}</td>
						<td>{row.Achievements}</td>
						<td>
							<button
								className="border-2 border-red-500 text-red-500"
								value={row.id}
								onClick={(e) => this.removeEducation(e.target.value)}
							>
								Delete
							</button>
						</td>
					</tr>
				))}
			</tbody>
		);
	};
	refreshSkill = () => {
		return (
			<tbody>
				{skills.map((row) => (
					<tr key={row.id}>
						<td>{row.skillname}</td>
						<td>
							<button
								className="border-2 border-red-500 text-red-500"
								value={row.id}
								onClick={(e) => this.removeSkill(e.target.value)}
							>
								Delete
							</button>
						</td>
					</tr>
				))}
			</tbody>
		);
	};

	getQues = () => {
		switch (this.state.quesNum) {
			case 0:
				return (
					<section
						className="animated fadeInUp flex flex-col items-center justify-center p-2 "
						id="questions"
					>
						<h1 className="text-2xl m-2 text-white">What is your full name ?</h1>
						<input
							type="text"
							className="border border-black focus:outline-none"
							id="name"
							defaultValue={this.state.Name}
						/>
						<button
							className="mr-2 px-4 py-2 bg-blue-200 text-blue-500 rounded focus:outline-none"
							onClick={() => {
								if (document.getElementById("name").value !== "") {
									this.setState({
										Name: document.getElementById("name").value,
									});
									userData.name = document.getElementById("name").value;
									document.getElementById("name").classList.add("border-green-500");
									var ID = setInterval(() => {
										this.nextQues();
										clearInterval(ID);
									}, 1000);
								} else {
									alert("No field can remain empty!");
								}
							}}
						>
							OK
						</button>
					</section>
				);

			case 1:
				return (
					<section
						className="animated fadeInUp flex flex-col items-center justify-center p-2 "
						id="questions"
					>
						<h1 className="text-2xl m-2 text-white">What is your role ?</h1>
						<input
							type="text"
							className="border border-black focus:outline-none"
							id="role"
							defaultValue={this.state.Role}
						/>
						<button
							className="mr-2 px-4 py-2 bg-blue-200 text-blue-500 rounded focus:outline-none"
							onClick={() => {
								if (document.getElementById("role").value !== "") {
									this.setState({
										Role: document.getElementById("role").value,
									});
									userData.role = document.getElementById("role").value;
									this.nextQues();
								} else {
									alert("No field can remain empty!");
								}
							}}
						>
							OK
						</button>
					</section>
				);

			case 2:
				return (
					<section
						className="animated fadeInUp flex flex-col items-center justify-center p-2 "
						id="questions"
					>
						<h1 className="text-2xl m-2 text-white">Tell something about your role.</h1>
						<textarea
							type="text"
							rows="5"
							cols="50"
							className="border border-black focus:outline-none"
							id="desc"
							defaultValue={this.state.RoleDecription}
						/>
						<button
							className="mr-2 px-4 py-2 bg-blue-200 text-blue-500 rounded focus:outline-none"
							onClick={() => {
								if (document.getElementById("desc").value !== "") {
									this.setState({
										RoleDecription: document.getElementById("desc").value,
									});
									userData.roleDescription = document.getElementById("desc").value;
									this.nextQues();
								} else {
									alert("No field can remain empty!");
								}
							}}
						>
							OK
						</button>
					</section>
				);

			case 3:
				return (
					<section
						className="animated fadeInUp flex flex-col items-center justify-center p-2 "
						id="questions"
					>
						<h1 className="text-2xl m-2 text-white">Write something about yourself .</h1>
						<textarea
							type="text"
							rows="5"
							cols="50"
							className="focus:outline-none"
							id="about"
							defaultValue={this.state.About}
						/>
						<button
							className="mr-2 px-4 py-2 bg-blue-200 text-blue-500 rounded focus:outline-none"
							onClick={() => {
								if (document.getElementById("about").value !== "") {
									this.setState({
										About: document.getElementById("about").value,
									});
									userData.aboutme = document.getElementById("about").value;
									this.nextQues();
								} else {
									alert("No field can remain empty!");
								}
							}}
						>
							OK
						</button>
					</section>
				);

			case 4:
				return (
					<section
						className="animated fadeInUp flex flex-col items-center justify-center p-2 "
						id="questions"
					>
						<h1 className="text-2xl m-2 text-white">Attach some of you social profiles.</h1>
						<div className="flex">
							<select id="social" defaultValue="DEFAULT">
								<option value="DEFAULT" disabled>
									--Select--
								</option>
								<option value="Linkdin">Linkdin</option>
								<option value="Github">Github</option>
								<option value="Skype">Skype</option>
							</select>
							<input type="url" name="" id="socialUrl" />
							<button
								onClick={() => {
									if (
										document.querySelector("select").value !== "DEFAULT" &&
										document.getElementById("socialUrl").value !== ""
									) {
										socialProfile.push({
											id: new Date().getTime(),
											name: document.querySelector("select").value,
											url: document.getElementById("socialUrl").value,
										});
										this.setState({
											Profile: socialProfile,
										});
									} else {
										alert("No field can remain empty!");
									}
									this.refreshSocial();
								}}
							>
								Add
							</button>
						</div>
						<table border="1px">
							<thead>
								<tr>
									<th>Social Account</th>
									<th>URL</th>
									<th></th>
								</tr>
							</thead>
							{this.refreshSocial()}
						</table>
						<button
							className="mr-2 px-4 py-2 bg-blue-200 text-blue-500 rounded focus:outline-none"
							onClick={() => {
								if (this.state.Profile != null) {
									userData.socialLinks = this.state.Profile;
								} else {
									alert("No field can remain empty!");
								}
								this.nextQues();
							}}
						>
							OK
						</button>
					</section>
				);

			case 5:
				return (
					<section
						className="animated fadeInUp flex flex-col items-center justify-center p-2 "
						id="questions"
					>
						<h1 className="text-2xl m-2 text-white">Add your education profile.</h1>
						<div className="flex">
							<input type="text" id="university" placeholder="University Name" />
							<input type="text" id="specialization" placeholder="Specialization" />
							<input type="text" id="passingMonth" placeholder="Month of passing" />
							<input type="number" id="passingYear" placeholder="Year of passing" />
							<input type="text" id="achievements" placeholder="Achievements (If any)" />
							<button
								onClick={() => {
									if (
										document.getElementById("university").value !== "" &&
										document.getElementById("specialization").value !== "" &&
										document.getElementById("passingMonth").value !== "" &&
										document.getElementById("passingYear").value !== "" &&
										document.getElementById("achievements").value !== ""
									) {
										educationProfile.push({
											id: new Date().getTime(),
											UniversityName: document.getElementById("university").value,
											specialization: document.getElementById("specialization").value,
											MonthOfPassing: document.getElementById("passingMonth").value,
											YearOfPassing: document.getElementById("passingYear").value,
											Achievements: document.getElementById("achievements").value,
										});
										this.setState({
											Education: educationProfile,
										});
									} else {
										alert("No field can remain empty!");
									}
									this.refreshEducation();
								}}
							>
								Add
							</button>
						</div>
						<table border="1px">
							<thead>
								<tr>
									<th>University Name</th>
									<th>Specialization</th>
									<th>Month Passing</th>
									<th>Year Passing</th>
									<th>Achievements</th>
									<th></th>
								</tr>
							</thead>
							{this.refreshEducation()}
						</table>
						<button
							className="mr-2 px-4 py-2 bg-blue-200 text-blue-500 rounded focus:outline-none"
							onClick={() => {
								if (this.state.Education != null) {
									userData.education = this.state.Education;
								} else {
									alert("No field can remain empty!");
								}
								this.nextQues();
							}}
						>
							OK
						</button>
					</section>
				);

			case 6:
				return (
					<section
						className="animated fadeInUp flex flex-col items-center justify-center p-2 "
						id="questions"
					>
						<h1 className="text-2xl m-2 text-white">Write about your skill description.</h1>
						<textarea id="skillDesc" cols="30" rows="10"></textarea>
						<button
							className="mr-2 px-4 py-2 bg-blue-200 text-blue-500 rounded focus:outline-none"
							onClick={() => {
								if (document.getElementById("skillDesc").value !== "") {
									this.setState({
										skillDesc: document.getElementById("skillDesc").value,
									});
									userData.skillsDescription = document.getElementById("skillDesc").value;
									this.nextQues();
								} else {
									alert("No field can remain empty!");
								}
							}}
						>
							OK
						</button>
					</section>
				);

			case 7:
				return (
					<section
						className="animated fadeInUp flex flex-col items-center justify-center p-2 "
						id="questions"
					>
						<h1 className="text-2xl m-2 text-white">Add some of your skills.</h1>
						<div className="flex">
							<input type="text" id="skill" />
							<button
								onClick={() => {
									if (document.getElementById("skill").value !== "") {
										skills.push({
											id: new Date().getTime(),
											skillname: document.getElementById("skill").value,
										});
										this.setState({
											skill: skills,
										});
									} else {
										alert("No field can remain empty!");
									}
									this.refreshSocial();
								}}
							>
								Add
							</button>
						</div>
						<table border="1px">
							<thead>
								<tr>
									<th>Skills</th>
									<th></th>
								</tr>
							</thead>
							{this.refreshSkill()}
						</table>
						<button
							className="mr-2 px-4 py-2 bg-blue-200 text-blue-500 rounded focus:outline-none"
							onClick={() => {
								if (this.state.skill != null) {
									userData.skills = this.state.skill;
								} else {
									alert("No field can remain empty!");
								}
								this.nextQues();
							}}
						>
							OK
						</button>
					</section>
				);

			default:
				return (
					<section className="flex flex-col items-center justify-center p-2" id="final">
						<h1 className="text-2xl m-2 text-white">Have a look at your website.</h1>
						<Link
							className="mt-8 px-4 py-2 bg-blue-200 text-blue-500 rounded focus:outline-none"
							to="/portfolio"
							onClick={() => localStorage.setItem("userData", JSON.stringify(userData))}
						>
							View Website
						</Link>
					</section>
				);
		}
	};

	render() {
		return (
			<div className="flex flex-col items-center justify-center">
				<header className="bg-teal-500 w-full text-center">
					<h1 className="text-6xl text-white">Portfolio Builder</h1>
				</header>

				<section className="w-full text-center flex items-start justify-center m-8">
					<section className="w-3/12 flex flex-col items-center justify-center p-8">
						<h1 className="text-2xl">Step-2</h1>
						<span>Fill your details</span>
					</section>

					<section className="w-7/12 bg-blue-300 py-4">
						{this.getQues()}
						<div className="flex items-center justify-center mt-4">
							<button
								className="mr-2 bg-white rounded focus:outline-none"
								onClick={this.prevQues}
								id="backBtn"
								disabled={this.state.quesNum <= 0}
							>
								<img
									src="https://img.icons8.com/material-rounded/48/000000/back.png"
									alt=""
								/>
							</button>
							<button
								type="submit"
								className="ml-2 bg-white rounded focus:outline-none"
								onClick={this.nextQues}
								disabled={this.state.quesNum >= 7}
							>
								<img
									src="https://img.icons8.com/material-rounded/48/000000/forward.png"
									alt=""
								/>
							</button>
						</div>
					</section>
				</section>

				<footer className="bg-gray-500 w-full text-center h-24 flex items-center justify-center">
					<span className="text-white">Copyright &copy; 2020 &bull; Portfolio Builder</span>
				</footer>
			</div>
		);
	}
}

export default Form;
