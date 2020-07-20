import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/styles.css";
import logo from "../assets/images/logo.PNG";
import img1 from "../assets/images/main/template.png";
import img2 from "../assets/images/main/details.png";
import img3 from "../assets/images/main/hosting.jpg";

class Home extends React.Component {
	render() {
		return (
			<div className="flex flex-col items-center justify-center">
				<header className="bg-teal-500 w-full text-center h-28">
					<h1 className="text-6xl text-white">Portfolio Builder</h1>
				</header>

				<section className="bg-teal-100 w-full text-center h-64 flex flex-col items-center justify-center">
					<h3 className="text-3xl">Create free portfolios with the click of a button.</h3>
					<Link to="/template" className="border border-black p-2 mt-8">
						Get Started
					</Link>
				</section>

				<section className="flex flex-col bg-red-100 w-full py-4">
					<h1 className="text-5xl text-center mb-8">How To Use ?</h1>
					<div className="flex h-64 items-center justify-center">
						<div className="w-4/12">
							<h3 className="text-3xl">Step-1</h3>
							<span>Choose your template</span>
						</div>
						<div className="w-4/12">
							<img src={img1} alt="" className="rounded-md h-64" />
						</div>
					</div>
					<div className="flex h-64 mt-8 items-center justify-center">
						<div className="w-4/12">
							<img src={img2} alt="" className="rounded-md h-64" />
						</div>
						<div className="w-4/12">
							<h3 className="text-3xl">Step-2</h3>
							<span>Fill your details</span>
						</div>
					</div>
					<div className="flex h-64 mt-8 items-center justify-center">
						<div className="w-4/12">
							<h3 className="text-3xl">Step-3</h3>
							<span>Preview and Host</span>
						</div>
						<div className="w-4/12">
							<img src={img3} alt="" className="rounded-md h-64" />
						</div>
					</div>
				</section>

				<section className="flex flex-col bg-green-100 w-full py-4 items-center justify-center">
					<h1 className="text-5xl text-center mb-8">About Us</h1>
					<div className="flex items-center justify-around">
						<div className="w-3/12 ">
							<img src={logo} alt="" />
						</div>
						<div className="w-5/12 ">
							<p>
								Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat omnis minus
								debitis! Nemo velit repudiandae eligendi iusto corporis fuga, placeat tempora,
								nihil pariatur deserunt impedit. Repellendus eaque magnam earum? Et?
							</p>
						</div>
					</div>
				</section>

				<section className="bg-blue-100 w-full py-4">
					<h1 className="text-5xl text-center mb-8">Contact Us</h1>
					<div className="flex flex-col items-center">
						<div className="flex items-center">
							<input
								type="text"
								className="w-64 border-b border-black focus:outline-none my-4 mx-2 p-1"
								placeholder="Name"
								required
							/>
							<input
								type="email"
								className="w-64 border-b border-black focus:outline-none my-4 mx-2 p-1"
								placeholder="Email"
								required
							/>
						</div>
						<textarea
							name=""
							id=""
							cols="70"
							rows="3"
							className="border-b border-black focus:outline-none mb-4 mx-2 p-1"
							placeholder="Message"
							required
						></textarea>
						<button
							type="submit"
							className="border-0 bg-blue-500 text-blue-100 w-32 text-xl px-4 py-2 rounded-lg focus:outline-none hover:bg-blue-600"
						>
							Send
						</button>
					</div>
				</section>

				<footer className="bg-gray-500 w-full text-center h-24 flex items-center justify-center">
					<span className="text-white">Copyright &copy; 2020 &bull; Portfolio Builder</span>
				</footer>
			</div>
		);
	}
}

export default Home;
