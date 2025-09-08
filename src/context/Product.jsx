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
        image:
          "https://images.unsplash.com/photo-1652364653960-1c23c208ef43?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: "$799",
        description: "High-quality treadmill for cardio workouts.",
      },
      {
        name: "Dumbbell Set",
        image:
          "https://images.unsplash.com/photo-1638536532686-d610adfc8e5c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: "$199",
        description: "Adjustable dumbbell set for strength training.",
      },
      {
        name: "Exercise Bike",
        image:
          "https://images.unsplash.com/photo-1591741535018-d042766c62eb?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: "$499",
        description: "Stationary exercise bike for home workouts.",
      },
      {
        name: "Yoga Mat",
        image:
          "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: "$49",
        description: "Non-slip yoga mat for all types of yoga.",
      },
      {
        name: "Kettlebell",
        image:
          "https://images.unsplash.com/photo-1632077804406-188472f1a810?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: "$89",
        description: "Versatile kettlebell for dynamic workouts.",
      },
      {
        name: "Pull-Up Bar",
        image:
          "https://images.unsplash.com/photo-1614091245074-bbf4d04a3c32?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: "$59",
        description: "Doorway pull-up bar for upper body strength.",
      },
      {
        name: "Resistance Bands",
        image:
          "https://images.unsplash.com/photo-1584827386916-b5351d3ba34b?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: "$29",
        description: "Set of resistance bands for strength training.",
      },
      {
        name: "Rowing Machine",
        image:
          "https://images.unsplash.com/photo-1519505907962-0a6cb0167c73?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: "$699",
        description: "Full-body rowing machine for cardio and strength.",
      },
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