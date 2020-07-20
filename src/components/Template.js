import React from "react";
import "../assets/css/styles.css";

class Template extends React.Component {
	selectTemplate = (index) => {
		window.location.href = `/fillDetail`;
	};

	render() {
		return (
			<div className="flex flex-col items-center justify-center">
				<header className="bg-teal-500 w-full text-center">
					<h1 className="text-6xl text-white">Portfolio Builder</h1>
				</header>

				<section className="w-full text-center flex items-start justify-center m-8">
					<section className="w-3/12 flex flex-col items-center justify-center p-8">
						<h1 className="text-2xl">Step-1</h1>
						<span>Select you template</span>
					</section>

					<section className="w-7/12 flex flex-wrap">
						<div
							className="h-48 w-48 bg-blue-200 m-8 hover:bg-blue-500 transition duration-500 rounded-md"
							onClick={() => this.selectTemplate(1)}
						></div>
						<div
							className="h-48 w-48 bg-blue-200 m-8 hover:bg-blue-500 transition duration-500 rounded-md"
							onClick={() => this.selectTemplate(2)}
						></div>
						<div
							className="h-48 w-48 bg-blue-200 m-8 hover:bg-blue-500 transition duration-500 rounded-md"
							onClick={() => this.selectTemplate(3)}
						></div>
						<div
							className="h-48 w-48 bg-blue-200 m-8 hover:bg-blue-500 transition duration-500 rounded-md"
							onClick={() => this.selectTemplate(4)}
						></div>
					</section>
				</section>
				<footer className="bg-gray-500 w-full text-center h-24 flex items-center justify-center">
					<span className="text-white">Copyright &copy; 2020 &bull; Portfolio Builder</span>
				</footer>
			</div>
		);
	}
}

export default Template;
