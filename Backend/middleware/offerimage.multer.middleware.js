import exp from 'constants'
import multer from 'multer';
import path from 'path'
const storage=multer.diskStorage({
destination:'./public/offers',
filename:(req,file,cb)=>{
    cb(null,file.originalname)
    //cb(null,file.originalname+"_"+Date.now()+path.extname(file.originalname))
}
})

const offer_image=multer({
storage:storage
}).single("pic")//input type=file name="pic"
export default offer_image