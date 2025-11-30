import express from "express";

const router=express.Router();

router.get("/send",(req,res)=>{
    res.send("send message to end point")
})
export default router;