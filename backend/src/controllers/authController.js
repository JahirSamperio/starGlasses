import {loginService, registerService } from "../services/authServices.js";

const loginController = async (req = request, res = response) => {
    const {email, password} = req.body;
    try {
        let response = await loginService(email, password);
        if(response.lenght === 0) {
            return res.status(404).json({
                msg: "Usuario no encontrado"
            })
        }
        return res.status(200).json({
            response: response[0]
        });
    } catch (err) {
        return res.status(500).json({
            msg: "Informacion no encontrada"
        });
    }
}
const registerController = async (req = request, res = response) => {
    try {
        let response = await registerService(req.body);
        
        return res.status(200).json({
            response
        });
    } catch (err) {
        return res.status(500).json({
            msg: "Error en el servidor"
        });
    }
}


export {
    loginController,
    registerController
};