window.onload = efectoHoverTittle();

function efectoHoverTittle(){

    const el = document.getElementById("tittle-sl");
    const width = el.clientWidth;
    const height = el.clientHeight;
    
    el.addEventListener("mousemove", (evt) => {
        const { layerX, layerY } = evt;
        
        const yRotation = ((layerX - width / 2) / width) * 20;
        
        const xRotation = ((layerY - height / 2) / height) * 20;
        
        const string = `
        perspective(500px)
        scale(1.1)
        rotateX(${xRotation}deg)
        rotateY(${yRotation}deg)
        `;
        
        el.style.transform = string;
    });
    
    console.log("hola soy el efecto hover");
    el.addEventListener("mouseout", () => {
        el.style.transform = `
        perspective(500px)
        scale(1)
        rotateX(0)
        rotateY(0)
        `;
    });

}    

export default efectoHoverTittle;
