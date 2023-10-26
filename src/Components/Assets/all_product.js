import p1 from './p1.jpg';
import p2 from './p2.jpg';
import p3 from './p3.jpg';
import p4 from './p4.jpg';
import p5 from './p5.jpg';
import p6 from './p6.jpg';
import p7 from './p7.jpg';
import p8 from './p8.jpg';
import m1 from './m1.jpg';
import m2 from './m2.jpg';
import m3 from './m3.jpg';
import m4 from './m4.jpg';
import m9 from './m9.jpg';
import m6 from './m6.jpg';
import m7 from './m7.jpg';
import m8 from './m8.jpg';
import k1 from './k1.jpg';
import k2 from './k2.jpg';
import k3 from './k3.jpg';
import k4 from './k4.jpg';
import k5 from './k5.jpg';
import k6 from './k6.jpg';
import k7 from './k7.jpg';
import k8 from './k8.jpg';

let all_product = [
    {
        id: 1,
        name: "Striped Flutter Sleeve Overlap Collor Coat with Pent",
        category: "womens",
        image: p1,
        new_price: 1650.00,
        old_price: 2000.50,
    },
    {
        id: 2,
        name: "Striped Flutter Sleeve Overlap Collor Ladies Hand Bag",
        category: "womens",
        image: p2,
        new_price: 320.00,
        old_price: 700.50,
    },
    {
        id: 3,
        name: "Striped Flutter Sleeve Overlap Collor Red - Lehanga",
        category: "womens",
        image: p3,
        new_price: 3500.00,
        old_price: 5000.50,
    },
    {
        id: 4,
        name: "Striped Flutter Sleeve Overlap Collor Peplum Kurti",
        category: "womens",
        image: p4,
        new_price: 280.00,
        old_price: 350.50,
    },

    {
        id: 5,
        name: "Striped Flutter Sleeve Overlap Collor Peplum Hem Jeans",
        category: "mens",
        image: m1,
        new_price: 50.00,
        old_price: 80.50,
    },
    {
        id: 6,
        name: "Striped Flutter Sleeve Overlap Collor Peplum Hem Blezzer",
        category: "mens",
        image: m2,
        new_price: 170.00,
        old_price: 200.50,
    },
    {
        id: 7,
        name: "Striped Flutter Sleeve Overlap Collor Peplum Hem Jacket",
        category: "mens",
        image: m3,
        new_price: 150.00,
        old_price: 190.50,
    },
    {
        id: 8,
        name: "Striped Flutter Sleeve Overlap Collor Peplum Hem T-Shirt",
        category: "mens",
        image: m4,
        new_price: 120.00,
        old_price: 180.50,
    },
    {
        id: 1,
        name: "Striped Flutter Sleeve Overlap Collor Peplum Pent T-Shirt",
        category: "womens",
        image: p5,
        new_price: 760.00,
        old_price: 900.50,
    },
    {
        id: 10,
        name: "Striped Flutter Sleeve Overlap Collor Peplum Hem T-Shirt",
        category: "womens",
        image: p6,
        new_price: 120.00,
        old_price: 180.50,
    },
    {
        id: 11,
        name: "Striped Flutter Sleeve Overlap Collor Peplum Hem T-Shirt",
        category: "womens",
        image: p7,
        new_price: 120.00,
        old_price: 180.50,
    },
    {
        id: 4,
        name: "Striped Flutter Sleeve Overlap Collor Peplum Women Trousher",
        category: "womens",
        image: p8,
        new_price: 370.00,
        old_price: 450.50,
    },
    {
        id: 2,
        name: "Striped Flutter Sleeve Overlap Collor Peplum Men Red Shirt",
        category: "mens",
        image: m9,
        new_price: 400.00,
        old_price: 450.50,
    },
    {
        id: 14,
        name: "Striped Flutter Sleeve Overlap Collor Peplum Hem T-Shirt",
        category: "mens",
        image: m6,
        new_price: 120.00,
        old_price: 180.50,
    },
    {
        id: 15,
        name: "Striped Flutter Sleeve Overlap Collor Peplum Hem T-Shirt",
        category: "mens",
        image: m7,
        new_price: 120.00,
        old_price: 180.50,
    },
    {
        id: 16,
        name: "Striped Flutter Sleeve Overlap Collor Peplum Hem T-Shirt",
        category: "mens",
        image: m8,
        new_price: 120.00,
        old_price: 180.50,
    },

    {
        id: 17,
        name: "Striped Flutter Sleeve Overlap Collor Peplum Hem T-Shirt",
        category: "kid",
        image: k1,
        new_price: 120.00,
        old_price: 180.50,
    },
    {
        id: 18,
        name: "Striped Flutter Sleeve Overlap Collor Peplum Hem T-Shirt",
        category: "kid",
        image: k2,
        new_price: 120.00,
        old_price: 180.50,
    },
    {
        id: 19,
        name: "Striped Flutter Sleeve Overlap Collor Peplum Hem T-Shirt",
        category: "kid",
        image: k3,
        new_price: 120.00,
        old_price: 180.50,
    },
    {
        id: 20,
        name: "Striped Flutter Sleeve Overlap Collor Peplum Hem T-Shirt",
        category: "kid",
        image: k4,
        new_price: 120.00,
        old_price: 180.50,
    },
    {
        id: 3,
        name: "Striped Flutter Sleeve Overlap Collor Peplum Kids Frok",
        category: "kid",
        image: k5,
        new_price: 380.00,
        old_price: 420.50,
    },
    {
        id:22,
        name: "Striped Flutter Sleeve Overlap Collor Peplum Hem T-Shirt",
        category: "kid",
        image: k6,
        new_price: 120.00,
        old_price: 180.50,
    },
    {
        id:23,
        name: "Striped Flutter Sleeve Overlap Collor Peplum Hem T-Shirt",
        category: "kid",
        image: k7,
        new_price: 120.00,
        old_price: 180.50,
    },
    {
        id:24,
        name: "Striped Flutter Sleeve Overlap Collor Peplum Hem T-Shirt",
        category: "kid",
        image: k8,
        new_price: 120.00,
        old_price: 180.50,
    },
];

export default all_product;