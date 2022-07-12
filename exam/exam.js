let c=0
function validate(){
	let u=document.getElementById("u_n").value
	pat_u=/^F[A-Z]+/
	if(u.length>=4 & u.length<=9){
		// console.log("length")
		if(!(pat_u.test(u))){
			document.getElementById("u_n").style.border="1px solid red"
			c++
		}
	}
	else{
		document.getElementById("u_n").style.border="1px solid red"
		c++
	}
	let em=document.getElementById("e_m").value
	let pat_e=/^[a-z][a-z 0-9 \.?]+@(.com)|(.in)|(.net)|(.edu)$/i
	if(!(pat_e.test(em))){
		document.getElementById("e_m").style.border="1px solid red"
		c++
	}
	pat_n1=/^977\d{7}$/
	pat_n2=/\d{4}-\d{4}-\d{4}-\d{4}$/
	let n=document.getElementById("num").value
	if(!(pat_n1.test(n) || pat_n2.test(n))){
		document.getElementById("num").style.border="1px solid red"
		c++
	}
	
	let pay_1=/^SBIN\d{8}$/
	let pay_2=/^\d{11}$/
	let pay_data=document.getElementById("pay_d").value
	if(document.getElementById("pay_t").value=='AccountNumber'){
		if(!(pay_2.test(pay_data))){
			document.getElementById("pay_d").style.border="1px solid red"
			c++
		}
	}
	else{
		// alert("h")
		if(!(pay_1.test(pay_data))){
			document.getElementById("pay_d").style.border="1px solid red"
			c++
		}
	}
	if(document.getElementById("s_n").value==''){
		document.getElementById("s_n").style.border="1px solid red"
	}
	setTimeout(border,5000)
	if(c==0){
		return true
	}
	else{
		return false
	}
}
let name=document.getElementById("u_n")
let day=document.getElementById("s_n")
name.addEventListener('keyup',upper)
day.addEventListener('keyup',display)
let img_a=["d.jpg","i.jpg","i3.jpg","i4.jpg"]
let i=0
function backgroundchanger(){
	// alert("h")
	if(i>3){
		i=0
	}
	document.body.style.backgroundImage="url("+img_a[i]+")"
	i++
	setTimeout(backgroundchanger,5000)
}
function upper(){
	document.getElementById("u_n").value=document.getElementById("u_n").value.toUpperCase()
}


function display(){
	
	if(document.getElementById("nzd").checked ||document.getElementById("kdp").checked){
		document.getElementById("r_display").innerText=document.getElementById("s_n").value*2000
	}
	else if(document.getElementById("sklm").checked ||document.getElementById("ong").checked){
		document.getElementById("r_display").innerText=document.getElementById("s_n").value*3000
	}
}
function border(){
	document.getElementById("u_n").style.border="1px solid black"
	document.getElementById("u_n").style.border="1px solid black"
	document.getElementById("e_m").style.border="1px solid black"
	document.getElementById("num").style.border="1px solid black"
	document.getElementById("pay_d").style.border="1px solid black"
	document.getElementById("s_n").style.border="1px solid black"
}
function beer(){
	let cou_1=document.getElementById("cou").value
	if(cou_1=='America' || cou_1=='England' || cou_1=='Germany'){
		let beer=prompt("Do you want Beer")
	}
}
function headchange(){
	document.getElementById("h").style.backgroundColor="green"
	document.getElementById("h_1").style.color="yellow"
	document.getElementById("h_2").style.color="yellow"
}
function headchange1(){
	document.getElementById("h").style.backgroundColor="blue"
	document.getElementById("h_1").style.color="white"
	document.getElementById("h_2").style.color="red"
}