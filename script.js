

const body = document.getElementsByTagName('body')[0];
console.log(body)

const leftButton = document.createElement('button');
leftButton.innerHTML = "left";

const rightButton = document.createElement('button');
rightButton.innerHTML = "right";

const parentDiv = document.createElement('div');
parentDiv.appendChild(leftButton);
parentDiv.appendChild(rightButton);

parentDiv.style.position = "absolute";
parentDiv.style.bottom = "10px";
parentDiv.style.right = "20px";
parentDiv.style.backgroundColor = "red";
parentDiv.style.height = "100px";
parentDiv.style.width = "100px";


leftButton.addEventListener("click",()=>{
    const dModel = document.getElementById("model")
    const aEntity = document.getElementsByTagName("a-entity")[0]
    const model = document.createElement('a-gltf-model');
    model.id = "model";
    model.setAttribute('rotation', '0 0 0');
    model.setAttribute('position', '0.8 0.0 0');
    model.setAttribute('scale', '0.5 0.5 0.5');
    model.setAttribute('src', "./assets/stylized_coin/scene.gltf");
    model.setAttribute('animation', 'property: rotation; to: 0 360 0.1; dur: 3000; easing: easeInOutQuad; loop: true; dir: alternate');
    

    aEntity.appendChild(model); // Append without overwriting
    let pos = dModel.getAttribute("position")
    console.log(pos,pos.x)

    dModel.setAttribute('position', `${pos.x-0.1} 0 0`);
})


rightButton.addEventListener("click",()=>{
    const dModel = document.getElementById("model")
    let pos = dModel.getAttribute("position")
    console.log(pos,pos.x)

    dModel.setAttribute('position', `${pos.x+0.1} 0 0`);
})

body.appendChild(parentDiv);
