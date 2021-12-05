import { useHistory } from "react-router-dom";
import "./result.css";

export default function Result() {
	const cancel = () => {
		let cover = document.querySelector(".cover");
		cover.classList.add("none");
	};

	const history = useHistory();
	const routeChange = () => {
		history.push("/");
	};

	return (
		<div>
			<div class="cover none" id="cover">
				<div class="content">
					<div id="cancel" onClick={cancel} class="cancel">
						<img src="./images/v5.png" alt="" />
					</div>
					<div class="change">
						<p>Please Confirm your Vote</p>
						<p>
							Kindly place your hand on the Finger print Scanner to Confirm your
							Vote
						</p>
						<img src="./images/Frame (1).png" alt="" />
						<div class="cancelcontinue">
							<div class="can">CANCEL</div>

							<div onClick={routeChange} class="can">
								CONTINUE
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
