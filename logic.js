const express = require('express');

const router = express.Router();

router.post("/bfhl", (req, res, next) => {
    const {data} = req.body;
    if(!data || Array.isArray(data)){
        return res.status(400)
        .send({
            "is_Success": false,
            "user_id": "Abhishek_ppandey_090999",
            "msg": "An array is required"
        })
    }

    let alphabets = [];
    let numbers = [];
    data.map((ele)=> {
        if(isNaN(ele)){
            alphabets.push(ele);
        } else{numbers.push(ele);}
    })

    res.send({
        "is_success": true,
        "user_id": "Abhishek_ppandey_090999",
        "email": "shubham123rahana",
        "roll_number": "0101CS191005",
        "numbers": numArray,
        "alphabets": alphaArray
    })
})

module.exports = router;