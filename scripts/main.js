const userAction = async () => {
  const response = await fetch('https://34.125.76.7:3000/ping');
  const myJson = await response.json(); //extract JSON from the http response
  // do something with myJson
  console.log(myJson);
  document.getElementById("test-label").innerHTML = myJson.greeting;
}

userAction();