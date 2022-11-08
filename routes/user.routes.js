
const { ObjectId } = require('bson');
const express = require('express');
const router = express.Router();

const Student = require('../models/user.models');

router.post('/', async(req,res)=>{
    try {
        let exits = await Student.findOne({ phoneNumber : req.body.phoneNumber })
        //console.log('exits :', exits);
        if(exits){
            res.json({ status : 200, message : 'Phone number already registered...!'});
        }
        else{
            let check = new Student(req.body);
            //console.log('check :', check);
            let std = check.save();
            res.json({ status :200, message : 'Record is added..!', data : check});
        }

    } catch (error) {
        res.json({status : 200, error : error})
    }
});


router.get('/studentrecord', async (req,res)=>{
    try {
        let check = await Student.findById({ _id : ObjectId(req.body._id) });

        if(check){
            res.json({ status : 200, message : 'Data found..!', data : check});
        }else{
            res.json({ status : 200, message : 'Data not found..!', data : []});
        }
    } catch (error) {
        res.json({ status : 200, error : error});
    }
});

router.put('/editdata', async (req,res)=>{
    try {
        finalObj = {}
        if(req.body.name){
            finalObj.name = req.body.name;
        }if(req.body.email){
            finalObj.email = req.body.email;
        }if(req.body.phoneNumber){
            finalObj.phoneNumber = req.body.phoneNumber
        }

        finalObj.type = "Student";
        // console.log('finalObj :', finalObj);

        let editdata = await Student.updateOne({ _id : ObjectId(req.body._id)}, { $set : finalObj });
        //console.log('editdata ==>:', editdata);
        
        if(editdata){
            res.json({ status : 200, message : 'Data updated successfully..!', data : editdata})
        }else{
            res.json({ status : 200, message : 'Data not updated..!', data : []})
        }
    } catch (error) {
        res.json({ status : 200, error : error})
    }
});

router.delete('/recordDelted', async(req,res)=> {
    let check = await Student.deleteOne({_id: ObjectId(req.body._id)});
    if(check){
        res.json({ status : 200, message : 'Data deleted successfully...', data : check })
    }else{
        res.json({ status : 200, message : 'Data not deleted..!'})
    }
})


module.exports = router;