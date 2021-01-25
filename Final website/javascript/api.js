const getURL = "http://174.138.35.211:8081/details";
const postURL = "http://174.138.35.211:8081/details";


loginApi = () => {


    fetch(getURL).then(response => response.json()).then(sendInfo => checkLogInInfo(sendInfo));

}


sendData = (data) => {

    fetch(postURL, {
        method: "post",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(res => res.json()).then(res2 => console.log(res2)).catch(error => { console.log(error); })
}


accessData = () => {

    fetch(getURL).then(response => response.json()).then(userData => display(userData)).catch(error => console.log(error));

}