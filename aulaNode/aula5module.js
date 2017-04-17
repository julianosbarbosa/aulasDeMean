console.log(global===this)
console.log(module===this)
console.log(module.exports===this)

this.digaOi = function(){ 
    console.log("Oi")
} //this é o module export podendo ser exportado conforme a necessidade