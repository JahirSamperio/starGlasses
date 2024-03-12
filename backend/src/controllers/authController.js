import loginService from "../services/authServices.js"

const loginController = async (req = request, res = response) => {
    const {correo, password} = req.body;
    try {
        let response = await loginService(correo, password);
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

export default loginController;