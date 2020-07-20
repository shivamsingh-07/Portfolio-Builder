import React, { Component } from "react";

export class Preview extends Component {
	constructor(prop) {
		super(prop);
		this.state = {
			Name: "",
			Age: "",
			Address: "",
		};
	}

	render() {
		return (
			<div className="flex flex-col items-center justify-center">
				<header className="bg-teal-500 w-full text-center">
					<h1 className="text-6xl text-white">Portfolio Builder</h1>
				</header>

				<section className="w-full text-center flex items-start justify-center m-8">
					<section className="w-3/12 flex flex-col items-center justify-center p-8">
						<h1 className="text-2xl">Step-3</h1>
						<span>Preview and hosting</span>
					</section>

					<section className="w-7/12 flex flex-wrap">
						...
						<a
							className="border-0 bg-blue-500 text-blue-100 w-32 text-xl px-4 py-2 rounded-lg focus:outline-none hover:bg-blue-600"
							href="/portfolio"
						>
							Host
						</a>
					</section>
				</section>

				<footer className="bg-gray-500 w-full text-center h-24 flex items-center justify-center">
					<span className="text-white">Copyright &copy; 2020 &bull; Portfolio Builder</span>
				</footer>
			</div>
		);
	}
}

export default Preview;
