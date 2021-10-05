import React from "react";
import "../assets/css/styles.css";
import logo from "../assets/images/main/logo.svg";
import footerLogo from "../assets/images/main/footer.svg";
import image from "../assets/images/Basic/header-background.jpg";

class Template extends React.Component {
	selectTemplate = (index) => {
		window.location.href = `/fillDetail`;
	};

	render() {
		return (
			<div className="flex flex-col items-center justify-center">
				<header className="w-9/12 py-8 flex items-center justify-start">
					<img src={logo} alt="Logo" style={{ width: "250px" }} />
				</header>

				<section className="w-full flex">
					<section className="w-3/12 p-8 flex flex-col text-left bg-blue-100">
						<span className="font-medium">Choose a template</span>
						<span className="mt-4 font-medium text-gray-600">
							You have to select one the the following templates.
						</span>
					</section>

					<section className="w-9/12 px-12 py-8">
						<div className="flex flex-col">
							<span className="text-3xl font-bold">Most Popular</span>
							<div className="flex flex-wrap">
								<div
									className="my-8 p-4 flex flex-col items-start justify-center cursor-pointer hover:shadow-lg transform duration-300 hover:scale-105"
									onClick={() => this.selectTemplate(1)}
								>
									<img src={image} alt="Template" style={{ width: "200px" }} />
									<span className="mt-2 font-medium">Black Mountain</span>
									<span className="text-sm">4/5 Stars</span>
								</div>
							</div>
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

export default Template;
