import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../assets/css/styles.css";
import "../assets/css/custom.css";
import logo from "../assets/images/main/logo.svg";
import front from "../assets/images/Form/front.svg";
import back from "../assets/images/Form/back.svg";
import add from "../assets/images/Form/add.svg";
import cross from "../assets/images/Form/cross.svg";
import footerLogo from "../assets/images/main/footer.svg";

let userData = {};
let socialProfile = [];
let educationProfile = [];
let skills = [];
let achievements = [];

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
		achievement: [],
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

	removeAchievement = (id) => {
		achievements = achievements.filter((item) => item.id != id);
		this.setState({ achievement: achievements });
		this.refreshAchievement();
	};

	refreshSocial = () => {
		return socialProfile.map((row) => (
			<div
				className="mb-1 flex items-center justify-between bg-blue-100 text-blue-500 rounded-full"
				key={row.id}
			>
				<span className="mx-8">{row.name}</span>
				<span className="mx-8">{row.url}</span>
				<img
					src={cross}
					role="button"
					className="m-1"
					id={row.id}
					onClick={(e) => this.removeProfile(e.target.id)}
				/>
			</div>
		));
	};

	refreshEducation = () => {
		return educationProfile.map((row) => (
			<div
				className="w-10/12 flex items-center justify-between bg-blue-100 text-blue-500 rounded-full"
				key={row.id}
			>
				<span className="mx-8">{row.UniversityName}</span>
				<span className="mx-8">{row.specialization}</span>
				<span className="mx-8">{row.YearOfPassing}</span>
				<span className="mx-8">{row.Score}</span>
				<img
					src={cross}
					role="button"
					className="m-1"
					id={row.id}
					onClick={(e) => this.removeEducation(e.target.id)}
				/>
			</div>
		));
	};
	refreshSkill = () => {
		return skills.map((row) => (
			<div
				className="m-1 flex items-center justify-between bg-blue-100 text-blue-500 rounded-full"
				key={row.id}
			>
				<span className="mx-4">{row.skillname}</span>
				<img
					src={cross}
					role="button"
					className="m-1"
					id={row.id}
					onClick={(e) => this.removeSkill(e.target.id)}
				/>
			</div>
		));
	};

	refreshAchievement = () => {
		return achievements.map((row) => (
			<div
				className="m-1 flex items-center justify-between bg-blue-100 text-blue-500 rounded-full"
				key={row.id}
			>
				<span className="mx-4">{row.achievements}</span>
				<img
					src={cross}
					role="button"
					className="m-1"
					id={row.id}
					onClick={(e) => this.removeAchievement(e.target.id)}
				/>
			</div>
		));
	};

	getQues = () => {
		switch (this.state.quesNum) {
			// Full Name
			case 0:
				return (
					<section
						className="mb-16 p-2 flex flex-col items-center justify-center fadeAnim"
						id="questions"
					>
						<span className="text-2xl m-2 font-medium">Enter Full Name</span>
						<span className="m-2 font-medium text-gray-600">
							Think of what name people would use to find you online.
						</span>
						<input
							type="text"
							className="w-4/12 mt-6 px-2 pt-2 pb-1 bg-blue-100 border-b-2 border-blue-500 focus:outline-none font-medium rounded-t-lg"
							id="name"
							defaultValue={this.state.Name}
							autoComplete="off"
						/>
						<button
							className="mt-8 px-4 py-2 text-blue-500 rounded-lg border-2 border-blue-500 font-medium focus:outline-none"
							onClick={() => {
								if (document.getElementById("name").value !== "") {
									this.setState({
										Name: document.getElementById("name").value,
									});
									userData.name = document.getElementById("name").value;
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
			// About Yourself
			case 1:
				return (
					<section
						className="mb-16 p-2 flex flex-col items-center justify-center fadeAnim"
						id="questions"
					>
						<span className="text-2xl m-2 font-medium">Tell us about yourself.</span>
						<span className="m-2 font-medium text-gray-600">
							This helps people to understand you as a person, this will increase their interest
							in you.
						</span>
						<textarea
							type="text"
							className="w-6/12 mt-6 px-2 pt-2 pb-1 bg-blue-100 border-b-2 border-blue-500 focus:outline-none font-medium rounded-t-lg"
							id="about"
							defaultValue={this.state.About}
						/>
						<button
							className="mt-8 px-4 py-2 text-blue-500 rounded-lg border-2 border-blue-500 font-medium focus:outline-none"
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
			// Your Profession
			case 2:
				return (
					<section
						className="mb-16 p-2 flex flex-col items-center justify-center fadeAnim"
						id="questions"
					>
						<span className="text-2xl m-2 font-medium">Write your profession</span>
						<span className="m-2 font-medium text-gray-600">
							This helps people to find you, who wants to hire.
						</span>
						<input
							type="text"
							className="w-4/12 mt-6 px-2 pt-2 pb-1 bg-blue-100 border-b-2 border-blue-500 focus:outline-none font-medium rounded-t-lg"
							id="role"
							autoComplete="off"
							defaultValue={this.state.Role}
						/>
						<span className="m-2 text-xs font-medium text-gray-600">
							For Example: Web Developer, Designer, Programmer
						</span>
						<button
							className="mt-8 px-4 py-2 text-blue-500 rounded-lg border-2 border-blue-500 font-medium focus:outline-none"
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

			// Profession Detail
			case 3:
				return (
					<section className="flex flex-col items-center justify-center p-2" id="questions">
						<span className="text-2xl m-2 font-medium">Describe your profession.</span>
						<span className="m-2 font-medium text-gray-600">
							This helps people to understand your capabilities.
						</span>
						<textarea
							type="text"
							className="w-6/12 mt-6 px-2 pt-2 pb-1 bg-blue-100 border-b-2 border-blue-500 focus:outline-none font-medium rounded-t-lg"
							id="desc"
							defaultValue={this.state.RoleDecription}
						/>
						<button
							className="mt-8 px-4 py-2 text-blue-500 rounded-lg border-2 border-blue-500 font-medium focus:outline-none"
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
			// Education
			case 4:
				return (
					<section className="flex flex-col items-center justify-center p-2" id="questions">
						<span className="text-2xl m-2 font-medium">Education Details</span>
						<div className="w-full mt-4 flex items-end justify-center">
							<table className="w-10/12 mx-2 table-auto text-center border-t-2 border-b-2 border-blue-500">
								<thead>
									<tr className="font-medium bg-blue-100">
										<td className="py-1 border-r border-blue-500">Institution Name</td>
										<td className="py-1 border-r border-blue-500">
											Qualification Gained
										</td>
										<td className="py-1 border-r border-blue-500">Year of Passing</td>
										<td className="py-1">Percentage</td>
									</tr>
								</thead>
								<tbody>
									<tr className="text-center">
										<td className="py-1 border-r-4 border-white">
											<input
												type="text"
												id="university"
												className="font-medium focus:outline-none text-center"
												autoComplete="off"
											/>
										</td>
										<td className="py-1 border-r-4 border-white">
											<input
												type="text"
												id="specialization"
												className="font-medium focus:outline-none text-center"
												autoComplete="off"
											/>
										</td>
										<td className="py-1 border-r-4 border-white">
											<input
												type="number"
												id="passingYear"
												className="font-medium focus:outline-none text-center"
												autoComplete="off"
											/>
										</td>
										<td className="py-1">
											<input
												type="number"
												id="score"
												className="font-medium focus:outline-none text-center"
												autoComplete="off"
											/>
										</td>
									</tr>
								</tbody>
							</table>
							<img
								src={add}
								role="button"
								className="mb-2"
								onClick={() => {
									if (
										document.getElementById("university").value !== "" &&
										document.getElementById("specialization").value !== "" &&
										document.getElementById("passingYear").value !== "" &&
										document.getElementById("score").value !== ""
									) {
										educationProfile.push({
											id: new Date().getTime(),
											UniversityName: document.getElementById("university").value,
											specialization: document.getElementById("specialization").value,
											YearOfPassing: document.getElementById("passingYear").value,
											Score: document.getElementById("score").value,
										});
										this.setState({
											Education: educationProfile,
										});
									} else {
										alert("No field can remain empty!");
									}
									this.refreshEducation();
									document.getElementById("university").value = "";
									document.getElementById("specialization").value = "";
									document.getElementById("passingYear").value = "";
									document.getElementById("score").value = "";
								}}
							/>
						</div>
						<div className="w-full mt-4 flex items-center justify-center">
							{this.refreshEducation()}
						</div>
						<button
							className="mt-8 px-4 py-2 text-blue-500 rounded-lg border-2 border-blue-500 font-medium focus:outline-none"
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

			// Extra Skills
			case 5:
				return (
					<section className="flex flex-col items-center justify-center p-2" id="questions">
						<span className="text-2xl m-2 font-medium">Write your skills.</span>
						<span className="m-2 font-medium text-gray-600">
							Skills are very helpful asset to seperate from the crowd and open new
							opportunities for you.
						</span>
						<div className="w-full mt-6 flex justify-center items-center">
							<input
								type="text"
								id="skill"
								autoComplete="off"
								className="w-4/12 mr-2 px-2 pt-2 pb-1 bg-blue-100 border-b-2 border-blue-500 focus:outline-none font-medium rounded-t-lg"
							/>
							<img
								src={add}
								role="button"
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
									this.refreshSkill();
									document.querySelector("input").value = "";
								}}
							/>
						</div>
						<div className="w-5/12 mt-4 flex flex-wrap">{this.refreshSkill()}</div>
						<button
							className="mt-8 ml-2 px-4 py-2 text-blue-500 rounded-lg border-2 border-blue-500 font-medium focus:outline-none"
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

			// Social Links
			case 6:
				return (
					<section className="flex flex-col items-center justify-center p-2" id="questions">
						<span className="text-2xl m-2 font-medium">Social Links</span>
						<span className="m-2 font-medium text-gray-600">
							They help others to see your work.
						</span>
						<div className="mt-6 w-full flex items-center justify-center">
							<select
								id="social"
								defaultValue="DEFAULT"
								className="w-2/12 mr-1 px-2 pt-2 pb-1 text-blue-500 border-b-2 border-blue-500 focus:outline-none font-medium rounded-t-lg"
								style={{ textAlignLast: "center" }}
							>
								<option value="DEFAULT" disabled>
									Select
								</option>
								<option value="Linkdin">Linkdin</option>
								<option value="Github">Github</option>
								<option value="Skype">Skype</option>
							</select>
							<input
								type="url"
								id="socialUrl"
								className="w-4/12 ml-1 mr-2 px-2 pt-2 pb-1 bg-blue-100 border-b-2 border-blue-500 focus:outline-none font-medium rounded-t-lg"
								autoComplete="off"
							/>
							<img
								src={add}
								role="button"
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
									document.querySelector("select").value = "DEFAULT";
									document.getElementById("socialUrl").value = "";
								}}
							/>
						</div>
						<div className="w-10/12 mt-4 flex flex-col items-center justify-center">
							{this.refreshSocial()}
						</div>
						<button
							className="mt-8 ml-2 px-4 py-2 text-blue-500 rounded-lg border-2 border-blue-500 font-medium focus:outline-none"
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

			// Achievements
			case 7:
				return (
					<section
						className="animated fadeInUp flex flex-col items-center justify-center p-2 "
						id="questions"
					>
						<span className="text-2xl m-2 font-medium">Achievements</span>
						<span className="m-2 font-medium text-gray-600">
							They help to enhance your portfolio and put a good impression on others.
						</span>
						<div className="w-full mt-6 flex justify-center items-center">
							<input
								type="text"
								id="achieve"
								autoComplete="off"
								className="w-4/12 mr-2 px-2 pt-2 pb-1 bg-blue-100 border-b-2 border-blue-500 focus:outline-none font-medium rounded-t-lg"
							/>
							<img
								src={add}
								role="button"
								onClick={() => {
									if (document.getElementById("achieve").value !== "") {
										achievements.push({
											id: new Date().getTime(),
											achievements: document.getElementById("achieve").value,
										});
										this.setState({
											achievement: achievements,
										});
									} else {
										alert("No field can remain empty!");
									}
									this.refreshAchievement();
									document.querySelector("input").value = "";
								}}
							/>
						</div>
						<div className="w-5/12 mt-4 flex flex-col items-center justify-center">
							{this.refreshAchievement()}
						</div>
						<button
							className="mt-8 ml-2 px-4 py-2 text-blue-500 rounded-lg border-2 border-blue-500 font-medium focus:outline-none"
							onClick={() => {
								if (this.state.achievement != null) {
									userData.achievement = this.state.achievement;
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

			// Finish Message
			case 8:
				return (
					<section className="p-2 flex flex-col items-center justify-center" id="final">
						<span className="text-2xl m-2 font-medium">All caught up!</span>
						<span className="w-8/12 m-2 font-medium text-gray-600 text-center">
							We have saved all the details given by you. Now, you can either continue to
							proceed or edit any details if you want.
						</span>
						<Link
							className="mt-8 ml-2 px-4 py-2 text-blue-500 rounded-lg border-2 border-blue-500 font-medium focus:outline-none"
							to="/preview"
							onClick={() => localStorage.setItem("userData", JSON.stringify(userData))}
						>
							Continue
						</Link>
					</section>
				);
		}
	};

	render() {
		return (
			<div className="flex flex-col items-center justify-center">
				<header className="w-9/12 py-8 flex items-center justify-start">
					<img src={logo} alt="Logo" style={{ width: "250px" }} />
				</header>

				<section className="w-full flex bg-blue-100">
					<section className="w-3/12 p-8 mx-auto flex flex-col text-left">
						<span className="font-medium">Fill your details</span>
						<div className="wrapper mt-6 text-sm font-medium text-gray-600">
							<ul id="progress">
								<li>
									<div className="node complete"></div>
									<p>Enter Your Name</p>
								</li>
								<li>
									<div className="divider blue"></div>
								</li>
								<li>
									<div className="node activated"></div>
									<p>About Yourself</p>
								</li>
								<li>
									<div className="divider grey"></div>
								</li>
								<li>
									<div className="node incomplete"></div>
									<p>Education Details</p>
								</li>
								<li>
									<div className="divider grey"></div>
								</li>
								<li>
									<div className="node incomplete"></div>
									<p>Your Profession</p>
								</li>
								<li>
									<div className="divider grey"></div>
								</li>
								<li>
									<div className="node incomplete"></div>
									<p>Your Skills</p>
								</li>
								<li>
									<div className="divider grey"></div>
								</li>
								<li>
									<div className="node incomplete"></div>
									<p>Achievements</p>
								</li>
								<li>
									<div className="divider grey"></div>
								</li>
								<li>
									<div className="node incomplete"></div>
									<p>Social Links</p>
								</li>
							</ul>
						</div>
					</section>

					<section
						className="w-7/12 my-12 mx-auto py-4 bg-white shadow-lg"
						style={{ borderRadius: "50px" }}
					>
						{this.getQues()}
						<div className="my-6 mx-12 flex items-center justify-between">
							<button
								className="px-4 py-1 text-blue-500 font-light focus:outline-none rounded-full flex items-center justify-center shadow-md is-disabled:opacity-0"
								onClick={this.prevQues}
								id="backBtn"
								disabled={this.state.quesNum <= 0}
							>
								<img src={back} alt="" className="mr-2" />
								Previous
							</button>
							<button
								type="submit"
								className="px-4 py-1 bg-blue-500 text-white font-light rounded-full focus:outline-none flex items-center justify-center shadow-md"
								onClick={this.nextQues}
								disabled={this.state.quesNum >= 8}
							>
								Continue
								<img src={front} alt="" className="ml-2" />
							</button>
						</div>
					</section>
				</section>

				<footer className="w-full py-8 text-center flex flex-col items-center justify-center bg-blue-500">
					<div className="w-9/12 mb-8 flex items-center justify-between">
						<img src={footerLogo} alt="" />
						<div>
							<span className="mb-2 text-center text-white font-medium">Tech Stack</span>
							<hr className="mb-4 border-t border-white" />
							<span className="text-left text-white block font-medium">Shivam Singh</span>
							<span className="text-left text-white block font-light">Developer</span>
							<span className="text-left text-white block font-medium">Shrey Jain</span>
							<span className="text-left text-white block font-light">Designer</span>
						</div>
					</div>
					<span className="text-white">Copyright &copy; 2020 &bull; Portfolio Builder</span>
				</footer>
			</div>
		);
	}
}

export default Form;
