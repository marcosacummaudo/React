  // const products = [
  //   { id: "1", name: "Adidas Copa", marca: "Adidas", category: "f11", description: "Negros con blanco y rosado", stock: 4, precio: 70000, img: "/img/Img-Botines/Adidas-Copa-Negro.jpg"},
  //   { id: "2", name: "Adidas Messi 2023", marca: "Adidas", category: "f11", description: "Blancos con celeste y dorado", stock: 8, precio: 150000, img: "/img/Img-Botines/Adidas-Messi-BlancoCeleste.jpg"},
  //   { id: "3", name: "Adidas Messi 2022", marca: "Adidas", category: "f11", description: "Dorados con blanco y celeste", stock: 5, precio: 145000, img: "/img/Img-Botines/Adidas-Messi-Dorados.jpg"},
  //   { id: "4", name: "Adidas Predator Alto", marca: "Adidas", category: "f11", description: "Altos en blanco y rojo", stock: 14, precio: 80000, img: "/img/Img-Botines/Adidas-PredatorAlto-BlancoRojo.jpg"},
  //   { id: "5", name: "Adidas Predator", marca: "Adidas", category: "f11", description: "Blancos con gris y rojo", stock: 12, precio: 80000, img: "/img/Img-Botines/Adidas-Predator-BlancoGris.jpg"},
  //   { id: "6", name: "Adidas X", marca: "Adidas", category: "f11", description: "Blanco con verde", stock: 7, precio: 100000, img: "/img/Img-Botines/Adidas-X-BlancoVerde.jpg"},
  //   { id: "7", name: "Adidas X", marca: "Adidas", category: "f11", description: "Verdes con negro", stock: 4, precio: 45000, img: "/img/Img-Botines/Adidas-X-Verde.jpg"},
  //   { id: "8", name: "Nike Air", marca: "Nike", category: "f11", description: "Blancos con naranja", stock: 5, precio: 85000, img: "/img/Img-Botines/Nike-Air-BlancoNaranja.jpg"},
  //   { id: "9", name: "Nike Mercurial", marca: "Nike", category: "f11", description: "Todo negro", stock: 8, precio: 90000, img: "/img/Img-Botines/Nike-Mercurial-Negro.jpg"},
  //   { id: "10", name: "Nike Phantom II", marca: "Nike", category: "f11", description: "Blanco con celeste", stock: 9, precio: 120000, img: "/img/Img-Botines/Nike-Phantom-BlancoCeleste.jpg"},
  //   { id: "11", name: "Nike Phantom I", marca: "Nike", category: "f11", description: "Negros con dorado", stock: 5, precio: 78000, img: "/img/Img-Botines/Nike-Phantom-NegroDorado.jpg"},
  //   { id: "12", name: "Nike Tiempo", marca: "Nike", category: "f11", description: "Blancos con celeste y amarillo", stock: 7, precio: 84000, img: "/img/Img-Botines/Nike-Tiempo-BlancoCelesteAmarillo.jpg"},
  //   { id: "13", name: "Nike Vapor", marca: "Nike", category: "f11", description: "Amarillos", stock: 10, precio: 74000, img: "/img/Img-Botines/Nike-Vapor-Amarillo.jpg"},
  //   { id: "14", name: "Puma Future", marca: "Puma", category: "f11", description: "Blanco con rojo", stock: 4, precio: 100000, img: "/img/Img-Botines/Puma-Future-BlancoRojo.jpg"},
  //   { id: "15", name: "Puma Future", marca: "Puma", category: "f11", description: "Verde", stock: 8, precio: 100000, img: "/img/Img-Botines/Puma-Future-Verde.jpg"},
  //   { id: "16", name: "Adidas Predator F5", marca: "Adidas", category: "f5", description: "Blancos", stock: 18, precio: 120000, img: "/img/Img-Botines/Adidas-Predator-F5.jpg"},
  //   { id: "17", name: "Adidas Predator Futsal", marca: "Adidas", category: "futsal", description: "Blancos con rojo", stock: 5, precio: 120000, img: "/img/Img-Botines/Adidas-Predator-Futsal.jpg"},
  //   { id: "18", name: "Adidas-VerdeAgua", marca: "Adidas", category: "futsal", description: "Verde Agua", stock: 22, precio: 130000, img: "/img/Img-Botines/Adidas-VerdeAgua.jpg"},
  //   { id: "19", name: "Adidas Copa F5", marca: "Adidas", category: "f5", description: "Negro", stock: 14, precio: 140000, img: "/img/Img-Botines/AdidasF5.jpg"},
  //   { id: "20", name: "Nike-Futsal-Negro", marca: "Nike", category: "futsal", description: "Negro", stock: 4, precio: 90000, img: "/img/Img-Botines/Nike-Futsal-Negro.jpg"},
  //   { id: "21", name: "Nike-Tiempo-F5", marca: "Nike", category: "f5", description: "Blanco con gris", stock: 12, precio: 80000, img: "/img/Img-Botines/Nike-Tiempo-F5.jpg"},
  //   { id: "22", name: "Puma-F5", marca: "Puma", category: "f5", description: "Verde agua", stock: 10, precio: 85000, img: "/img/Img-Botines/Puma-F5.jpg"},
  //   { id: "23", name: "Puma-Future-Futsal", marca: "Puma", category: "futsal", description: "Blanco y rojo", stock: 22, precio: 120000, img: "/img/Img-Botines/Puma-Futsal.jpg"},
  //   { id: "24", name: "Umbro Futsal", marca: "Umbro", category: "futsal", description: "Negro con blanco y rojo", stock: 11, precio: 78000, img: "/img/Img-Botines/Umbro-Futsal.jpg"},
  // ];
    
  //   export const getProducts = () => {
  //     return new Promise((resolve, reject) => {
        
  //       if (products.length > 0) {
  //         setTimeout(() => {
  //           resolve(products);
  //         }, 2000);
  //       } else {
  //         reject("No se encontraron productos");
  //       }
  //     });
  //   };
  
  //   export const getProductById = (id) => {
  //     return new Promise((resolve, reject) => {
        
  //       if (products.length > 0) {
  //         const product = products.find( p => p.id === id);
  //         setTimeout(() => {
  //           if(!product) {
  //             reject(`No se encuentra el productos con el id ${id}`)
  //           }
  //           resolve(product);
  //         }, 2000);
  //       } else {
  //         reject("No hay productos");
  //       }
  //     });
  //   };