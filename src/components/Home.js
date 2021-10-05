import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/styles.css";
import footerLogo from "../assets/images/main/footer.svg";
import logo from "../assets/images/main/logo.svg";
import down from "../assets/images/main/arrow.svg";
import img1 from "../assets/images/main/template.svg";
import img2 from "../assets/images/main/detail.svg";
import img3 from "../assets/images/main/hosting.svg";

class Home extends React.Component {
	render() {
		return (
			<div className="flex flex-col items-center justify-center">
				<div className="h-screen w-full flex flex-col items-center" id="main">
					<header className="w-9/12 py-8 flex items-center justify-between">
						<img src={logo} alt="Logo" style={{ width: "250px" }} />
						<div>
							<ul className="list-none inline-flex">
								<li className="mx-4 pb-1 font-medium hover:text-blue-500 border-b-2 border-transparent hover:border-blue-500 cursor-pointer">
									<a href="#main">Home</a>
								</li>
								<li className="mx-4 pb-1 font-medium hover:text-blue-500 border-b-2 border-transparent hover:border-blue-500 cursor-pointer">
									<a href="#howtouse">How to use</a>
								</li>
								<li className="mx-4 pb-1 font-medium hover:text-blue-500 border-b-2 border-transparent hover:border-blue-500 cursor-pointer">
									<a href="#about">About us</a>
								</li>
							</ul>
							<Link
								to="/template"
								className="ml-4 px-4 py-2 rounded-full font-medium bg-blue-500 hover:bg-blue-700 text-white"
							>
								Make Portfolio
							</Link>
						</div>
					</header>

					<section
						className="bg-blue-500 w-9/12 py-24 text-center flex flex-col items-center justify-center"
						style={{ borderRadius: "20px" }}
					>
						<h3 className="text-5xl font-bold text-white">Time to make your own portfolio</h3>
						<p className="w-5/12 mt-8 text-white">
							If you want to make your portfolio for free, then you came to right place. You can
							create your portfolio just in few steps.
						</p>
						<div className="flex items-center mt-16">
							<Link
								to="/template"
								className="px-8 py-2 mx-4 bg-white font-medium rounded-full text-blue-500 border-2 border-white"
							>
								Get Started
							</Link>
							<a
								href="#howtouse"
								className="px-8 py-2 mx-4 font-medium rounded-full text-white border-2 border-white"
							>
								How to use it
							</a>
						</div>
					</section>

					<a href="#howtouse" className="mt-16">
						<img src={down} alt="" />
					</a>
				</div>

				<section className="w-full py-8 flex items-center flex-col" id="howtouse">
					<h1 className="text-3xl font-bold text-center mb-2">How To Use</h1>
					<hr className="w-16 border-t-2 border-black" />
					<p className="my-8 font-medium">There are just few steps to create your own portfolio.</p>
					<div className="flex w-9/12 h-64 px-12 my-8 items-center justify-end">
						<div className="w-4/12 mr-24">
							<img src={img1} alt="" className="h-64" />
						</div>
						<div className="w-4/12 ml-24 p-8 bg-white rounded-lg shadow-xl">
							<span className="text-sm text-gray-600 block">Step 1</span>
							<span className="text-xl text-blue-500 font-medium">Choose a template</span>
							<p className="pt-4 text-gray-600 font-medium">
								There are many templates and designs from which you have to choose which suits
								best to you, as every design has its own significance.
							</p>
						</div>
					</div>
					<div className="flex w-9/12 h-64 mt-8 px-12 my-8 items-center justify-start">
						<div className="w-4/12 mr-24 p-8 bg-white rounded-lg shadow-xl">
							<span className="text-sm text-gray-600 block">Step 2</span>
							<span className="text-xl text-blue-500 font-medium">Fill your details</span>
							<p className="pt-4 text-gray-600 font-medium">
								There are many templates and designs from which you have to choose which suits
								best to you, as every design has its own significance.
							</p>
						</div>
						<div className="w-4/12 ml-24">
							<img src={img2} alt="" className="h-64" />
						</div>
					</div>
					<div className="flex w-9/12 h-64 mt-8 px-12 my-8 items-center justify-end">
						<div className="w-4/12 mr-24">
							<img src={img3} alt="" className="h-64" />
						</div>
						<div className="w-4/12 ml-24 p-8 bg-white rounded-lg shadow-xl">
							<span className="text-sm text-gray-600 block">Step 3</span>
							<span className="text-xl text-blue-500 font-medium">Preview and Host</span>
							<p className="pt-4 text-gray-600 font-medium">
								There are many templates and designs from which you have to choose which suits
								best to you, as every design has its own significance.
							</p>
						</div>
					</div>
				</section>

				<section className="w-9/12 py-24 flex flex-col items-center justify-center" id="about">
					<h1 className="text-3xl font-bold text-center mb-2">About Us</h1>
					<hr className="w-12 border-t-2 border-black" />
					<div className="w-10/12 mt-12 text-center font-medium">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat omnis minus debitis!
						Nemo velit repudiandae eligendi iusto corporis fuga, placeat tempora, nihil pariatur
						deserunt impedit. Repellendus eaque magnam earum? Et?
					</div>
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

export default Home;
