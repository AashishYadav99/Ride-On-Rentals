import exp from 'constants'
import multer from 'multer';
import path from 'path'

// import upload_image from './path/to/upload_image_middleware.js';
 // Adjust the path as needed

const storage=multer.diskStorage({
destination:'./public/uploads',
filename:(req,file,cb)=>{
    cb(null,file.originalname)
    //cb(null,file.originalname+"_"+Date.now()+path.extname(file.originalname))
}
})

const upload_image=multer({
storage:storage
}).single("pic")//input type=file name="pic"
export default upload_image

