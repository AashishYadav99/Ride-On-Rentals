import AdminModel from "../models/admin.model.js";
export const home = (req, res) => {
  res.send("<h1>server send by admin </h1>");
};

//for Admin Login
export const login = async (req, res) => {
  try {
    let account_Info = req.body;
    console.log(account_Info);
    // account_Info.id
    // account_Info.pass
    const { email, pass } = account_Info;//destructring it shoul be same as useState data
    const admin_data = await AdminModel.findOne({ admin_id: email }); //atrribute:value
    console.log(admin_data);
    if (admin_data !== null) {
      
      if (admin_data.admin_pass === pass) {
        
        res.send({code:200,message:"admin exists",token:admin_data.admin_id})

      } else {
        // res.send("incorrect password");
        res.send({code:404,message:"Password error"})
      }
    } else {
      res.send("user not found");
    }
  } catch (err) {
    console.log(err);
  }
};
