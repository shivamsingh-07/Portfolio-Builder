import React, { Component } from "react";
import "../../assets/css/styles.css";
import image from "../../assets/images/Basic/header-background.jpg";

class Basic extends Component {
	render() {
		let resumeData = this.props.resumeData;
		return (
			<div className="flex flex-col justify-center items-center">
				<header
					id="home"
					className="w-screen h-screen text-center"
					style={{
						backgroundImage: `url(${image})`,
						backgroundPosition: "center",
						backgroundSize: "cover",
						backgroundRepeat: "no-repeat",
					}}
				>
					<nav>
						{/* <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
							Show navigation
						</a>
						<a className="mobile-btn" href="#" title="Hide navigation">
							Hide navigation
						</a> */}
						<ul
							id="nav"
							className="h-16 w-full inline-flex items-center justify-center text-white"
						>
							<li className="mx-4">
								<a href="#home">HOME</a>
							</li>
							<li className="mx-4">
								<a href="#about">ABOUT</a>
							</li>
							<li className="mx-4">
								<a href="#resume">RESUME</a>
							</li>
							<li className="mx-4">
								<a href="#portfolio">WORKS</a>
							</li>
						</ul>
					</nav>

					<div className="flex flex-col w-6/12 h-auto justify-between items-center mx-auto">
						<h1 className="mt-32 mb-16 text-white font-black" style={{ fontSize: "85px" }}>
							I am {resumeData.name}.
						</h1>
						<h3 className="text-xl text-white mb-16" style={{ fontFamily: "arial " }}>
							I am a {resumeData.role}.{resumeData.roleDescription}
						</h3>
						<hr className="border-t-2 border-black" />
						<ul className="social">
							{resumeData.socialLinks &&
								resumeData.socialLinks.map((item) => {
									return (
										<li key={item.name}>
											<a href={item.url} target="_blank">
												<i className={item.className}></i>
											</a>
										</li>
									);
								})}
						</ul>
					</div>

					<a href="#about">
						<div className="w-8 h-8 mx-auto border-4 border-t-0 border-l-0 text-white mt-24 transform rotate-45"></div>
					</a>
				</header>

				{/* About Section */}

				<section id="about">
					<div
						className="flex w-full items-center justify-center py-16 flex-col xl:flex-row"
						style={{ backgroundColor: "rgba(0,0,0,0.8)" }}
					>
						<div className="w-2/12 h-64 mr-8">
							<div className="w-32 h-32 bg-white rounded-full"></div>
							{/* <img className="profile-pic" src="images/profilepic.jpg" alt="Profile Pic" /> */}
						</div>

						<div className="w-6/12 ml-8">
							<h2 className="text-3xl text-white">About Me</h2>
							<p className="text-justify text-gray-500">{resumeData.aboutme}</p>

							<div className="mt-8">
								<h2 className="text-3xl text-white">Contact Details</h2>
								<p className="text-justify text-gray-500">
									<span>{resumeData.name}</span>
									<br></br>
									<span>{resumeData.address}</span>
									<br></br>
									<span>{resumeData.website}</span>
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* Education Section */}

				<section id="resume">
					<div className="flex flex-col w-screen py-8">
						<div className="flex flex-col items-center justify-center xl:flex-row">
							<div className="flex w-2/12 items-center justify-center">
								<span className="text-xl border-b-2 border-blue-400">EDUCATION</span>
							</div>
							<div className="flex flex-col w-6/12 justify-center p-4">
								{resumeData.education &&
									resumeData.education.map((item) => {
										return (
											<div className="my-4">
												<h3 className="text-2xl font-bold text-gray-800">
													{item.UniversityName}
												</h3>
												<p className="text-xl">
													{item.specialization} <span>&bull;</span>{" "}
													<em>
														{item.MonthOfPassing} {item.YearOfPassing}
													</em>
												</p>
												<p className="pt-2">{item.Achievements}</p>
											</div>
										);
									})}
							</div>
						</div>
						<div className="flex flex-col items-center justify-center xl:flex-row">
							<div className="flex w-2/12 items-center justify-center">
								<span className="text-xl border-b-2 border-blue-400">WORK</span>
							</div>

							<div className="flex flex-col w-6/12 justify-center p-4">
								{resumeData.work &&
									resumeData.work.map((item) => {
										return (
											<div className="my-4">
												<h3 className="text-2xl font-bold text-gray-800">
													{item.CompanyName}
												</h3>
												<p className="text-xl">
													{item.specialization}
													<span>&bull;</span>{" "}
													<em className="date">
														{item.MonthOfLeaving} {item.YearOfLeaving}
													</em>
												</p>
												<p className="pt-2">{item.Achievements}</p>
											</div>
										);
									})}
							</div>
						</div>

						<div className="flex flex-col items-center justify-center xl:flex-row">
							<div className="flex w-2/12 items-center justify-center">
								<span className="text-xl border-b-2 border-blue-400">SKILLS</span>
							</div>

							<div className="flex flex-col w-6/12 justify-center p-4">
								<p>{resumeData.skillsDescription}</p>

								<div className="bars">
									<ul className="skills">
										{resumeData.skills &&
											resumeData.skills.map((item) => {
												return (
													<li>
														<span
															className={`bar-expand ${item.skillname.toLowerCase()}`}
														></span>
														<em className="text-gray-800 mt-8">
															{item.skillname}
														</em>
													</li>
												);
											})}
									</ul>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Work Section */}

				<section id="portfolio">
					<div className="flex flex-col w-screen bg-gray-300 items-center justify-center py-8">
						<h1 className="text-2xl">Check Out Some of My Works.</h1>
						<div
							id="portfolio-wrapper"
							className="flex items-center justify-center mt-12 w-full "
						>
							{resumeData.portfolio &&
								resumeData.portfolio.map((item) => {
									return (
										<div className="flex items-center justify-center w-2/12 h-32 mx-4 bg-white hover:bg-black hover:opacity-75 hover:text-white">
											<a href="#modal-01" className="w-full h-full text-center">
												{/* <img src={`${item.imgurl}`} className="item-img" /> */}
												<div className="">
													<h5>{item.name}</h5>
													<p>{item.description}</p>
												</div>
											</a>
										</div>
									);
								})}
						</div>
					</div>
				</section>

				{/* Footer Section */}

				<footer>
					<div className="flex flex-col w-screen">
						<div className="twelve columns">
							<ul className="social-links">
								{resumeData.socialLinks &&
									resumeData.socialLinks.map((item) => {
										return (
											<li>
												<a href={item.url}>
													<i className={item.className} />
												</a>
											</li>
										);
									})}
							</ul>
						</div>
						<div id="go-top">
							<a className="smoothscroll" title="Back to Top" href="#home">
								<i className="icon-up-open" />
							</a>
						</div>
					</div>
				</footer>
			</div>
		);
	}
}

export default Basic;
