import React, { useEffect, useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { SecondCounter } from "./SecondsCounter";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";


//create your first component
const Home = () => {

	const [timer, setTimer] = useState(0)
	const [active, setActive] = useState(false)
	const [isCountdown, setIsCountdown] = useState(false)
	const [alert, setAlert] = useState(0)

	useEffect(() => {
		if (timer == alert && alert != 0) window.alert("Time´s up!")

		if (active){
			setTimeout(()=>{
				setTimer(value=> value + 1)
			},1000)
		}
		if (isCountdown) {
			setTimeout(()=> {
				setTimer(value => value - 1)	
			},1000)
		}
	},[timer, active, isCountdown])

	const startStop = () => setActive(value => !value)
	const resetTimer = () => setTimer(value => value=0)
	const handleChange = e => setTimer(value => value = e.target.value)

	return (
		<main className="text-center">
			<section className="counter-holder">
				<SecondCounter number={<FontAwesomeIcon icon={faClock}/>}/>
				<SecondCounter number={Math.floor(timer/100000)%10}/>
				<SecondCounter number={Math.floor(timer/10000)%10}/>
				<SecondCounter number={Math.floor(timer/1000)%10}/>
				<SecondCounter number={Math.floor(timer/100)%10}/>
				<SecondCounter number={Math.floor(timer/10)%10}/>
				<SecondCounter number={Math.floor(timer%10)}/>
			</section>
			<section className="container text-center my-5">
			<h2>Counter Controller</h2>
				<div>
					<button 
					disabled={active}
					onClick={startStop} className="mx-1 btn btn-success">Start</button>
					<button 
					disabled={!active}
					onClick={startStop} className="mx-1 btn btn-secondary">Stop</button>
					<button onClick={resetTimer} className="mx-1 btn btn-danger">Reset</button>
				</div>
			</section>
			<section className="container text-center">
				<h2>Countdown</h2>
				<form 
					className="form-control"
					onSubmit={e => e.preventDefault()}>
					<label className="form-text">
					Ammount to start
						<input 
						className="form-control"
						type="number"
						value={timer}
						onChange={e => handleChange (e)}
						/>
					</label>
					<div>
						<input 
						disabled={isCountdown}
						onClick={()=>setIsCountdown (value => !value)}
						className="my-3 mx-1 btn btn-success" type="submit" value={"start"}/>
						<input
						disabled={!isCountdown}
						onClick={()=>setIsCountdown (value => !value)}
						className="my-3 mx-1 btn btn-secondary" type="submit" value={"stop"}/>
					</div>
				</form>
			</section>
			<section className="container text-center" my-5>
				<h2>Create Alert</h2>
				<form 
					className="form-control"
					onSubmit={e => e.preventDefault()}>
					<label className="form-text">
						Alert at
						<input 
						className="form-control"
						type="number"
						onChange={e => setAlert(value => value = e.target.value)}
						/>
					</label>
					<div>
						<input 
						onClick={()=>window.alert("Alert created")}
						className="my-3 mx-1 btn btn-success" type="submit" value={"Create!"} />
					</div>
				</form>

			</section>
		</main>
	);
};

export default Home;