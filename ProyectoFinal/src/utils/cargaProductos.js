import { addDoc, collection } from "firebase/firestore";
import { db } from "../config/firebaseConfig";

const products = [
    { name: "Adidas Copa", marca: "Adidas", category: "f11", description: "Negros con blanco y rosado", stock: 4, precio: 70000, img: "https://imgur.com/P51PRPe.jpeg"},
    { name: "Adidas Messi 2023", marca: "Adidas", category: "f11", description: "Blancos con celeste y dorado", stock: 8, precio: 150000, img: "https://imgur.com/Bjmbp7v.jpeg"},
    { name: "Adidas Messi 2022", marca: "Adidas", category: "f11", description: "Dorados con blanco y celeste", stock: 5, precio: 145000, img: "https://imgur.com/Tp6meyd.jpeg"},
    { name: "Adidas Predator Alto", marca: "Adidas", category: "f11", description: "Altos en blanco y rojo", stock: 14, precio: 80000, img: "https://imgur.com/VJmXUkC.jpeg"},
    { name: "Adidas Predator", marca: "Adidas", category: "f11", description: "Blancos con gris y rojo", stock: 12, precio: 80000, img: "https://imgur.com/TYUFHpX.jpeg"},
    { name: "Adidas X", marca: "Adidas", category: "f11", description: "Blanco con verde", stock: 7, precio: 100000, img: "https://imgur.com/5qQzSu2.jpeg"},
    { name: "Adidas X", marca: "Adidas", category: "f11", description: "Verdes con negro", stock: 4, precio: 45000, img: "https://imgur.com/wJ0yx6I.jpeg"},
    { name: "Nike Air", marca: "Nike", category: "f11", description: "Blancos con naranja", stock: 5, precio: 85000, img: "https://imgur.com/wu8mvVF.jpeg"},
    { name: "Nike Mercurial", marca: "Nike", category: "f11", description: "Todo negro", stock: 8, precio: 90000, img: "https://imgur.com/IbAKQP8.jpeg"},
    { name: "Nike Phantom II", marca: "Nike", category: "f11", description: "Blanco con celeste", stock: 9, precio: 120000, img: "https://imgur.com/F6Wdpqi.jpeg"},
    { name: "Nike Phantom I", marca: "Nike", category: "f11", description: "Negros con dorado", stock: 5, precio: 78000, img: "https://imgur.com/o3Z6qWE.jpeg"},
    { name: "Nike Tiempo", marca: "Nike", category: "f11", description: "Blancos con celeste y amarillo", stock: 7, precio: 84000, img: "https://imgur.com/rp2alyR.jpeg"},
    { name: "Nike Vapor", marca: "Nike", category: "f11", description: "Amarillos", stock: 10, precio: 74000, img: "https://imgur.com/fXKASB4.jpeg"},
    { name: "Puma Future", marca: "Puma", category: "f11", description: "Blanco con rojo", stock: 4, precio: 100000, img: "https://imgur.com/f7PKAXe.jpeg"},
    { name: "Puma Future", marca: "Puma", category: "f11", description: "Verde", stock: 8, precio: 100000, img: "https://imgur.com/k5ztMki.jpeg"},
    { name: "Adidas Predator F5", marca: "Adidas", category: "f5", description: "Blancos", stock: 18, precio: 120000, img: "https://imgur.com/VOIibek.jpeg"},
    { name: "Adidas Predator Futsal", marca: "Adidas", category: "futsal", description: "Blancos con rojo", stock: 5, precio: 120000, img: "https://imgur.com/NMYThuY.jpeg"},
    { name: "Adidas-VerdeAgua", marca: "Adidas", category: "futsal", description: "Verde Agua", stock: 22, precio: 130000, img: "https://imgur.com/XC8n18D.jpeg"},
    { name: "Adidas Copa F5", marca: "Adidas", category: "f5", description: "Negro", stock: 14, precio: 140000, img: "https://imgur.com/1uqerM3.jpeg"},
    { name: "Nike-Futsal-Negro", marca: "Nike", category: "futsal", description: "Negro", stock: 4, precio: 90000, img: "https://imgur.com/tZgX18n.jpeg"},
    { name: "Nike-Tiempo-F5", marca: "Nike", category: "f5", description: "Blanco con gris", stock: 12, precio: 80000, img: "https://imgur.com/LyM7YK2.jpeg"},
    { name: "Puma-F5", marca: "Puma", category: "f5", description: "Verde agua", stock: 10, precio: 85000, img: "https://imgur.com/tFhsCZr.jpeg"},
    { name: "Puma-Future-Futsal", marca: "Puma", category: "futsal", description: "Blanco y rojo", stock: 22, precio: 120000, img: "https://imgur.com/HRd9HcY.jpeg"},
    { name: "Umbro Futsal", marca: "Umbro", category: "futsal", description: "Negro con blanco y rojo", stock: 11, precio: 78000, img: "https://imgur.com/MT3OsMO.jpeg"},
  ];

export const cargaProductos = () => {
  products.forEach((product) => {
    addDoc(collection(db, "products"), product);
  });
};