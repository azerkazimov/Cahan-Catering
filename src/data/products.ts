export const products = [
    {
        id: "1",
        name: "Complete Catering Set",
        price: 500,
        imageUrl: "https://images.unsplash.com/photo-1633424414664-c24a6d28086b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        path: "/products/complete-catering-set",
        description: "A complete catering set ready for any event.",
        stockCount: 20,
        category: "Catering Sets",
        rating: 5,
        quantity: 1,
        subProducts: [
            { id: "1-1", name: "Catering Table", price: 200 },
            { id: "1-2", name: "Catering Chairs", price: 150 },
            { id: "1-3", name: "Catering Utensils", price: 100 }
        ]
    },
    {
        id: "2",
        name: "Catering Table",
        price: 200,
        imageUrl: "https://images.unsplash.com/photo-1601313054727-931178d78629?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        path: "/products/catering-table",
        description: "A high-quality catering table.",
        stockCount: 30,
        category: "Furniture",
        rating: 4,
        quantity: 1,
        subProducts: [
            { id: "2-1", name: "Table Cloth", price: 20 },
            { id: "2-2", name: "Table Centerpiece", price: 50 },
            { id: "2-3", name: "Table Napkins", price: 10 }
        ]
    },
    {
        id: "3",
        name: "Catering Chairs",
        price: 150,
        imageUrl: "https://plus.unsplash.com/premium_photo-1668031802460-89952ecb00f7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        path: "/products/catering-chairs",
        description: "Comfortable catering chairs for your guests.",
        stockCount: 50,
        category: "Furniture",
        rating: 4,
        quantity: 1,
        subProducts: [
            { id: "3-1", name: "Chair Covers", price: 30 },
            { id: "3-2", name: "Chair Cushions", price: 20 },
            { id: "3-3", name: "Chair Sashes", price: 10 }
        ]
    },
    {
        id: "4",
        name: "Catering Utensils",
        price: 100,
        imageUrl: "https://plus.unsplash.com/premium_photo-1689596509761-992d9cd41915?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        path: "/products/catering-utensils",
        description: "A set of high-quality catering utensils.",
        stockCount: 100,
        category: "Utensils",
        rating: 5,
        quantity: 1,
        subProducts: [
            { id: "4-1", name: "Forks", price: 30 },
            { id: "4-2", name: "Knives", price: 30 },
            { id: "4-3", name: "Spoons", price: 30 }
        ]
    },
    {
        id: "5",
        name: "Table Cloth",
        price: 20,
        imageUrl: "https://plus.unsplash.com/premium_photo-1690214492005-7609f008a287?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        path: "/products/table-cloth",
        description: "Elegant table cloth for catering events.",
        stockCount: 200,
        category: "Linens",
        rating: 4,
        quantity: 1,
        subProducts: [
            { id: "5-1", name: "Table Runner", price: 10 },
            { id: "5-2", name: "Table Napkins", price: 10 },
            { id: "5-3", name: "Table Skirt", price: 20 }
        ]
    },
    {
        id: "6",
        name: "Table Centerpiece",
        price: 50,
        imageUrl: "https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        path: "/products/table-centerpiece",
        description: "Beautiful centerpiece for catering tables.",
        stockCount: 50,
        category: "Decor",
        rating: 5,
        quantity: 1,
        subProducts: [
            { id: "6-1", name: "Candles", price: 10 },
            { id: "6-2", name: "Flowers", price: 30 },
            { id: "6-3", name: "Vases", price: 20 }
        ]
    },
    {
        id: "7",
        name: "Catering Tent",
        price: 300,
        imageUrl: "https://images.unsplash.com/photo-1565898094840-7e408a6f361d?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        path: "/products/catering-tent",
        description: "A large tent for outdoor catering events.",
        stockCount: 10,
        category: "Tents",
        rating: 5,
        quantity: 1,
        subProducts: [
            { id: "7-1", name: "Tent Poles", price: 100 },
            { id: "7-2", name: "Tent Fabric", price: 150 },
            { id: "7-3", name: "Tent Stakes", price: 50 }
        ]
    },
    {
        id: "8",
        name: "Catering Lights",
        price: 150,
        imageUrl: "https://images.unsplash.com/photo-1518619745898-93e765966dcd?q=80&w=2134&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        path: "/products/catering-lights",
        description: "Elegant lighting for catering events.",
        stockCount: 40,
        category: "Lighting",
        rating: 4,
        quantity: 1,
        subProducts: [
            { id: "8-1", name: "String Lights", price: 50 },
            { id: "8-2", name: "Lanterns", price: 50 },
            { id: "8-3", name: "Spotlights", price: 50 }
        ]
    },
];