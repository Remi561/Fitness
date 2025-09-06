import { delay } from "framer-motion";
import { view } from "framer-motion/client";
import { createContext, useContext } from "react";

export const ProductContext = createContext(null);


export const ProductProvider = ({ children }) => {
    const FadeInvariant = (index) => {
        const delay = index ? index * 0.1 : 0.3;
        const variant = {
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay } },
      
        }
        return variant
    }
    const buttonVariant = {
        
        hover: {
            scale: 1.05,
      
            transition: {
                yoyo: Infinity,
            
            }
        }
    }
    const equipment = [
        {
            name: "Treadmill",
            image: "https://images.unsplash.com/photo-1598970434795-0c54fe7c0642?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJlYWRtaWxsfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
            price: "$799",
            description: "High-quality treadmill for cardio workouts."
        },
        {
            name: "Dumbbell Set",
            image: "https://images.unsplash.com/photo-1598970434795-0c54fe7c0642?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHVtYmJlbGx8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
            price: "$199",
            description: "Adjustable dumbbell set for strength training."
        },
        {
            name: "Exercise Bike",
            image: "https://images.unsplash.com/photo-1598970434795-0c54fe7c0642?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZXhlcmNpc2UlMjBiaWtlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
            price: "$499",
            description: "Stationary exercise bike for home workouts."
        },
        {
            name: "Yoga Mat",
            image: "https://images.unsplash.com/photo-1598970434795-0c54fe7c0642?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8eW9nYSUyMG1hdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
            price: "$49",
            description: "Non-slip yoga mat for all types of yoga."
        },
        {
            name: "Kettlebell",
            image: "https://images.unsplash.com/photo-1598970434795-0c54fe7c0642?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2V0   dGxlYmVsbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
            price: "$89",
            description: "Versatile kettlebell for dynamic workouts."
        },
        {
            name: "Pull-Up Bar",
            image: "https://images.unsplash.com/photo-1598970434795-0c54fe7c0642?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHVsbCUyMHVwJTIwYmFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
            price: "$59",
            description: "Doorway pull-up bar for upper body strength."
        },
        {
            name: "Resistance Bands",
            image: "https://images.unsplash.com/photo-1598970434795-0c54fe7c0642?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzaXN0YW5jZSUyMGJhbmRzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
            price: "$29",
            description: "Set of resistance bands for strength training."
        },
        {
            name: "Rowing Machine",
            image: "https://images.unsplash.com/photo-1598970434795-0c54fe7c0642?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cm93aW5nJTIwbWFjaGluZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
            price: "$699",
            description: "Full-body rowing machine for cardio and strength."
        }
    ];
    return (
        
        <ProductContext.Provider value={{equipment, FadeInvariant, buttonVariant}}>
            {children}
        </ProductContext.Provider>
    )
}

export const useProduct = () => {
   const context = useContext(ProductContext);
   if(!context) {
    throw new Error("useProduct must be used within a ProductProvider");
   }
    return context;
}