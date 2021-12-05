import "./result2.css";
import { Link } from "react-router-dom";

export default function Result2() {
	const cancel = () => {
		let cover2 = document.querySelector(".cover2");
		cover2.classList.add("none");
	};
	return (
		<div>
			<div class="cover2 none passcode">
				<div class="content">
					<div onClick={cancel} class="cancel">
						<img src="../images/v5.png" alt="" />
					</div>
					<div class="change">
						<p>Polling Unit Changed Successfully</p>
						<p>You have successfully changed your polling unit</p>
						<img src="../images/Frame.png" alt="" />
						<div class="cancelcontinue">
							<div class="can">
								<Link to="/">CONTINUE</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
