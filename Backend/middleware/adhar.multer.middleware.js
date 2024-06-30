import exp from 'constants'
import multer from 'multer';
import path from 'path'
const storage = multer.diskStorage({
destination:'./public/userdocsimages',
filename:(req,file,cb)=>{
    cb(null,file.originalname)
    //cb(null,file.originalname+"_"+Date.now()+path.extname(file.originalname))
}
})

const upload_aadhardl=multer({
storage:storage
}).array("pic_multiple")//input type=file name="pic_multiple" 
export default upload_aadhardl;