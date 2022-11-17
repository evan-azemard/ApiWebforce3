// const restoList = document.getElementById("restoList");
// const btnLoadMore = document.getElementById("btnLoadMore")
//
// let start = 0;
// let rows = 2;
//
// function getDatas(start, rows) {
//     const url = `https://opendata.lillemetropole.fr/api/records/1.0/search/?
// dataset=ensemble-des-lieux-de-restauration-des-crous&q=&start=${start}&rows=${rows}&facet=type&facet=zone`;
// //fetch fonctionne avec un systéme de "promesse"
//     fetch (url)
//         .then (res => res.json ())
//         .then (res => {
// //données récupérer depuis la requette http
//             const datas = res.records;
//
//
// //on utilise une boucle pour traiter l'enssemble des données
//             for (let resto of datas) {
//                 //ajout des restos dans la list
//                 restoList.innerHTML += renderRestoHtml(resto.fields)
//             }
//
//             //supprime le button quand on a tout affiché
//             if (restoList.children.length === res.nhits){
//                 btnLoadMore.disabled = true;
//                 btnLoadMore.innerText = "tout les résultats sont chargé !"
//             }
//
//         })
//         .catch (err => console.log ("erreur: " + err));
// }
//
// function renderRestoHtml(data){
//     return`
//         <div class="resto" id="${data.id}">
//             <div>
//                 <img src="${data.photo}" alt="${data.short_desc}">
//             </div>
//             <div class="text">
//                 <h2>${data.title}</h2>
//                 <p>${data.infos}</p>
//                 <hr>
//                 <button>Ajouter au favoris</button>
//             </div>
//         </div>`
// }
//
//
// //lorsdu chargement du script
// getDatas(start, rows);
//
// //events
// btnLoadMore.onclick = function (){
//     getDatas((start +=rows), rows)
// }