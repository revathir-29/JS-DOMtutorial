const clickme = document.querySelector('.clickme');
//event handler
/*
clickme.onclick = () => {
    alert("Button clicked!");
}
    */
//event listener
/*
clickme.addEventListener("click" , () =>{
    alert("Button clicked!");    
});
*/
//difference
//Event handler is overlap the events
/*
clickme.onclick = () => {
    console.log("First Event handler...")
}
clickme.onclick = () => {
    console.log("Second Event handler...")
}
clickme.onclick = () => {
    console.log("third Event handler...")
}
    */
clickme.addEventListener("click" , () =>{
    console.log("First Event handler...")  
});
clickme.addEventListener("click" , () =>{
    console.log("Second Event handler...")   
});
clickme.addEventListener("click" , () =>{
    console.log("third Event handler...")   
});