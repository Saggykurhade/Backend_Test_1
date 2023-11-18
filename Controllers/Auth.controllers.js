import UserModal from "../Modals/User.modal.js";


export const Register = async (req, res) => {
try {
    const { name, email, password } = req.body ;
    
    if (!name || !email || !password) return res.status(401).json({success: false, message: "all fields are mandetory"})
    
    const user = new UserModal ({
        name,
        email,
        password
})
await user.save()

return res.status(200).json({ message: "registeration successful", success: true })
} catch (error) {
    return res.status(500).json({ message: error, success: false })
    }
}

// export const Login = async (req, res) => {
//     try {
//     const { email, password } = req.body ;

//     if (!email || !password) return res.status(401).json({success: false, message: "all fields are mandetory"})
//         return res.status(200).json({ message: "login successful", success: 'true' })

//     const user = await UserModal.findOne({ email })

//     } catch (error) {
//         return res.status(401).json({ message: 'all fields are mandetory', success: 'false' })
//     }
// }