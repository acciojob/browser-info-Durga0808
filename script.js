//your JS code here. If required.
window.onload=function() {
	let browserName=navigator.userAgent;
	let appname=navigator.appName;
	let appVersion=navigator.appVersion;
	let divelement=document.getElementById("browser-info");
	divelement.innerHTML=`<p>You are using ${browserName} version ${appVersion}</p>`
}