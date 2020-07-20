import React, { Component } from "react";
import "../assets/css/styles.css";

const Ques = ["What is your Full Name ?", "What is your Age ?", "What is your Address ?"];
const Ans = ["", "", ""];

export class Form extends Component {
	state = {
		quesNum: 0,
	};

	nextQues = () => {
		Ans[this.state.quesNum] = document.getElementById("content").value;
		document.getElementById("content").value = "";

		if (this.state.quesNum < 2) {
			this.setState({ quesNum: this.state.quesNum + 1 });
		} else {
			document.getElementById("final").classList.remove("hidden");
			document.getElementById("questions").classList.add("hidden");
		}
	};

	prevQues = () => {
		if (this.state.quesNum > 1) {
			this.setState({ quesNum: this.state.quesNum - 1 });
			document.getElementById("backBtn").classList.remove("hidden");
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

					<section className="w-7/12 bg-blue-300">
						<section
							className="animated fadeInUp flex flex-col items-center justify-center p-2 "
							id="questions"
						>
							<h1 className="text-2xl m-2 text-white">
								{this.state.quesNum + 1 + "- " + Ques[this.state.quesNum]}
							</h1>
							<input
								type="text"
								className="border border-black focus:outline-none"
								id="content"
								defaultValue={Ans[this.state.quesNum]}
							/>
							<div className="flex">
								<button
									className="mr-2 mt-8 px-4 py-2 bg-blue-200 text-blue-500 rounded focus:outline-none"
									onClick={this.nextQues}
								>
									Next
								</button>
								<button
									className="ml-2 mt-8 px-4 py-2 bg-blue-200 text-blue-500 rounded focus:outline-none"
									onClick={this.prevQues}
									id="backBtn"
								>
									Back
								</button>
							</div>
						</section>
						<section className="flex flex-col items-center justify-center p-2 hidden" id="final">
							<h1 className="text-2xl m-2 text-white">Have a look at your website.</h1>
							<a
								className="mt-8 px-4 py-2 bg-blue-200 text-blue-500 rounded focus:outline-none"
								href="/preview"
							>
								View Website
							</a>
						</section>
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
