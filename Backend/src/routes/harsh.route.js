import express from "express";

const router=express.Router();

router.get("/harsh",(req,res)=>{
    res.send("harsh is a good boy")
})
export default router;