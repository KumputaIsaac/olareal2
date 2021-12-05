import "./choosen.css";
import Back from "../../component/back/Back";
import Result from "../../component/result/Result";

export default function Choosen() {
	const showresult = () => {
		let cover = document.querySelector(".cover");
		cover.classList.remove("none");
	};
	return (
		<div className="choosen">
			<Back />
			<div className="last">
				<p>This is your choosen Candidate</p>
				<p>You have choosen Atiku Abubakar as your candidate. Please Confirm</p>
			</div>

			<div className="candidate">
				<div class="theimg" id="">
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
			</div>
			<div className="confirm" onClick={showresult}>
				Confirm
			</div>

			<Result choosen />
		</div>
	);
}
