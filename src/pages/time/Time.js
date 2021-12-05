import React from "react";
import { useHistory } from "react-router-dom";
import "./time.css";

export default function Time() {
	const history = useHistory();
	const routeChange = () => {
		history.push("choosen");
	};
	return (
		<div class="time">
			<div class="container">
				<div class="welcome">
					<p>Time to Cast your Vote</p>
				</div>
				<div class="whatyou">
					<p>
						Choose a political candidate you’ll like to vote for, This voting
						<br />
						process will be confirmed with your Finger Print
					</p>
				</div>
				<div class="options">
					<div class="option1">
						<div class="check" id="option1" onClick={routeChange}>
							<img
								src="../images/african-man-beach-vacation-lifestyle-portrait-concept 1.png"
								alt=""
							/>
							<div class="p">
								<p>Atiku Abubakar</p>
								<p>Political Party:</p>
								<p>People Democratic Party</p>
							</div>
							<div class="pic">
								<img src="../images/image 3.png" alt="" />
							</div>
						</div>
						<div class="check" id="option1">
							<img src="../images/african man.png" alt="" />
							<div class="p">
								<p>Bola Tinubu</p>
								<p>Political Party:</p>
								<p>People Democratic Party</p>
							</div>
							<div class="pic">
								<img src="../images/image 4.png" alt="" />
							</div>
						</div>
					</div>
					<div class="option2">
						<div class="check">
							<img src="../images/sowore.png" alt="" />
							<div class="p">
								<p>Omoyele Sowore</p>
								<p>Political Party:</p>
								<p>People Democratic Party</p>
							</div>
							<div class="pic">
								<img src="../images/image 7.png" alt="" />
							</div>
						</div>
						<div class="check">
							<img src="../images/sani.png" alt="" />
							<div class="p">
								<p>Yabayi V. Sani</p>
								<p>Political Party:</p>
								<p>People Democratic Party</p>
							</div>
							<div class="pic">
								<img src="../images/image 8.png" alt="" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
