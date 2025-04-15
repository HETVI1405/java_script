// // const input=document.getElementById("input");
// // const btn=document.getElementById("search");
// // const img=document.getElementById("img");
// // const name=document.getElementById("name");
// // const actor=document.getElementById("actor");
// // const director=document.getElementById("director");

// // function movie(t)
// // {
// //     const api=http://www.omdbapi.com/?i=tt3896198&apikey=36f2fe8a
// //     fetch()
// //     .then((response) => response.json()) 
// //     .then((data) => {
// //       img.src = data.message; 
// //     });

// // }


// // btn.addEventListener("click",movie());
// // const input = document.getElementById("input");
// // const btn = document.getElementById("search");
// // const img = document.getElementById("img");
// // const name = document.getElementById("name");
// // const actor = document.getElementById("actor");
// // const director = document.getElementById("director");

// // function movie() {
// //     const api = "http://www.omdbapi.com/?t="+ input.value+"&apikey=36f2fe8a";

// //     fetch(api)
// //         .then((response) => response.json())
// //         .then((data) => {
// //             img.src = data.Poster;
// //             name.textContent = data.Title;
// //             actor.textContent = data.Actors;
// //             director.textContent = data.Director;
// //         })
   
// // }
// // btn.addEventListener("click", movie);

// const input = document.getElementById("input");
// const btn = document.getElementById("search");
// const img = document.getElementById("img");
// const name = document.getElementById("name");
// const actor = document.getElementById("actor");
// const director = document.getElementById("director");

// function movie() {
//     const api = "http://www.omdbapi.com/?t=" + input.value + "&apikey=36f2fe8a";

//     fetch(api)
//         .then((response) => response.json())
//         .then((data) => {
//             if (data.Response === "True") {
//                 img.src = data.Poster;
//                 name.textContent = data.Title;
//                 actor.textContent = data.Actors;
//                 director.textContent = data.Director;
//             } else {
//                 name.textContent = "Movie not found!";
//                 img.src = "";
//                 actor.textContent = "";
//                 director.textContent = "";
//             }
//         })
       
// }

// btn.addEventListener("click", movie);

const input = document.getElementById("input");
const btn = document.getElementById("search");
const img = document.getElementById("img");
const name = document.getElementById("name");
const actor = document.getElementById("actor");
const director = document.getElementById("director");
const des = document.getElementById("desc");


function movie() {
    const api = "https://www.omdbapi.com?t="+input.value+"&apikey=36f2fe8a";

    fetch(api)
        .then((response) => response.json())
        .then((data) => {
          
                img.src = data.Poster;
                name.textContent = data.Title;
                actor.textContent = data.Actors;
                director.textContent = data.Director;
                desc.textContent = data.Plot;
            
        })
    }

btn.addEventListener("click", movie);
