import React from "react";
import MGPhoto from "../assets/images/mg 4.jpg";
import BMWPhoto from "../assets/images/bmw x5.jpg";
import AudiPhoto from "../assets/images/audi 6.jpg";
import KiaNiro from "../assets/images/lia niro.jpg";
import Sonata from "../assets/images/sonata.jpg";

import MyItem from "./item.js";


const MyList = [
  {
    nameOfCar: "MG",
    imageOfCar: MGPhoto,
    description:
      " The MG 4 is a compact car produced by the British automotive brand MG (Morris Garages). It is designed to offer a combination of style, affordability, and practicality to consumers. The MG 4 has a sleek and modern exterior design, with clean lines and a sporty appearance",
    price: 24500,
  },

  {
    nameOfCar: "BMW",
    imageOfCar: BMWPhoto,
    description:
      " The BMW X5 is a luxury mid-size SUV produced by the German automaker BMW. It is known for its combination of upscale features, powerful performance, and spacious interior. The X5 is designed to provide a comfortable and versatile driving experience for both urban and off-road environments.",
    price: 35000,
  },

  {
    nameOfCar: "Audi",
    imageOfCar: AudiPhoto,
    description:
      " The Audi A6 is a luxury mid-size sedan produced by the German automaker Audi. Known for its sophisticated design, advanced technology, and refined driving experience, the Audi A6 offers a combination of performance, comfort, and cutting-edge features.",
    price: 32000,
  },

  {
    nameOfCar: "KIA NIRO",
    imageOfCar: KiaNiro,
    description:
      " The Kia Niro is a compact hybrid crossover SUV produced by the South Korean automaker Kia. It is known for its fuel efficiency, practicality, and eco-friendly features. The Niro offers a stylish and versatile design, making it an attractive option for those seeking a compact SUV with hybrid technology.",
    price: 21000,
  },

  {
    nameOfCar: "Sonata",
    imageOfCar: Sonata,
    description:
      "The 2021 Hyundai Sonata is a mid-size sedan that offers a blend of style, comfort, and advanced features. It features a sleek and modern exterior design with a prominent front grille, sharp LED headlights, and sculpted body lines.",
    price: 22500,
  },
];

function MyUnorderList() {
  return (
    <div>
      <MyItem
        nameOfCar={MyList[0].nameOfCar}
        imageOfCar={MyList[0].imageOfCar}
        description={MyList[0].description}
        price={MyList[0].price}
      />

      <MyItem
        nameOfCar={MyList[1].nameOfCar}
        imageOfCar={MyList[1].imageOfCar}
        description={MyList[1].description}
        price={MyList[1].price}
      />

      <MyItem
        nameOfCar={MyList[2].nameOfCar}
        imageOfCar={MyList[2].imageOfCar}
        description={MyList[2].description}
        price={MyList[2].price}
      />

      <MyItem
        nameOfCar={MyList[3].nameOfCar}
        imageOfCar={MyList[3].imageOfCar}
        description={MyList[3].description}
        price={MyList[3].price}
      />

      <MyItem
        nameOfCar={MyList[4].nameOfCar}
        imageOfCar={MyList[4].imageOfCar}
        description={MyList[4].description}
        price={MyList[4].price}
      />
    </div>
  );
}
export default MyUnorderList;
