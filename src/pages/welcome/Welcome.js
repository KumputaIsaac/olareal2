import React from "react";
import { Link } from "react-router-dom";
import "./welcome.css";

export default function Welcome() {
	return (
		<div>
			<div class="container">
				<div class="welcome">
					<p>
						Welcome to the Web Based <br />
						Voter’s Registration System
					</p>
				</div>
				<div class="whatyou">
					<p className="red">
						<Link to="/hiola">
							Kindly insert your Voter’s Card to start your voting process
						</Link>
					</p>
				</div>
			</div>
			<div class="message">
				<h1>
					Kindly use a larger screen device to access this web application
				</h1>
			</div>
		</div>
	);
}
