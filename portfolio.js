function buscadorDeData(data) {
    const contenedor = document.querySelector(".trabajos");
    const template = document.querySelector("#item");
    console.log(data);

    data.items.forEach((item) => {
        const infoItem = item.fields;

        
        const imagenId = infoItem.imagen.sys.id;
        const imagenObj = data.includes.Asset.find(asset => asset.sys.id === imagenId);
        const imagenUrl = imagenObj ? imagenObj.fields.file.url : '';

        const clone = document.importNode(template.content, true);
        clone.querySelector(".item__imagen").src = imagenUrl;
        clone.querySelector(".info-titulo").textContent = infoItem.titulo;
        clone.querySelector(".info-texto").textContent = infoItem.descripcion;

        contenedor.appendChild(clone);
    });
}


function main(){
    fetch('https://cdn.contentful.com/spaces/ndivfo8e3gyp/environments/master/entries?access_token=BLxeHhmz4Q9c5y0nLTQ23a5T3h2gpyJVcbxkIKIJEBk')
        .then((response) => response.json())
        .then((data) => buscadorDeData(data));
}

main();