import React, { Component } from "react";
import "../assets/css/styles.css";
import { Link } from "react-router-dom";
import preview from "../assets/images/Form/preview.svg";
import logo from "../assets/images/main/logo.svg";
import footerLogo from "../assets/images/main/footer.svg";

class Preview extends Component {
	render() {
		return (
			<div className="flex flex-col items-center justify-center">
				<header className="w-9/12 py-8 flex items-center justify-start">
					<img src={logo} alt="Logo" style={{ width: "250px" }} />
				</header>

				<section className="w-full flex">
					<section className="w-3/12 p-8 flex flex-col text-left bg-blue-100">
						<span className="font-medium">Preview and Host</span>
						<span className="mt-4 font-medium text-gray-600">
							This is the final step to complete you portfolio.
						</span>
					</section>

					<section className="m-12 p-2 flex items-center justify-center" id="final">
						<img src={preview} alt="" />
						<div className="px-12 flex flex-col items-center justify-center">
							<span className="text-2xl m-2 font-medium">Time to host your website.</span>
							<span className="m-2 font-medium text-gray-600 text-center">
								We have created your portfolio with the details you gave us and this is time
								to reveal the final product.
							</span>
							<div className="flex">
								<Link
									className="mt-8 mr-2 px-6 py-2 text-blue-500 rounded-full border-2 border-blue-500 font-medium focus:outline-none"
									to="/portfolio"
								>
									View Website
								</Link>
								<a
									href=""
									className="mt-8 ml-2 px-6 py-2 text-white bg-blue-500 rounded-full border-2 border-blue-500 font-medium focus:outline-none"
									style={{pointerEvents: "none"}}
								>
									Host Now
								</a>
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

export default Preview;
