



function validatorHandler(schema, property) {
    return (req, res, next) => {
        // Obtiene los datos de la propiedad especificada de la solicitud
        const data = req[property];
        // Valida los datos contra el esquema proporcionado
        const { error } = schema.validate(data, { abortEarly: false });
        // Si hay errores de validación, devuelve una respuesta de error 400
        if (error) {
            return res.status(400).json({
                message: 'Validation error',
                details: error.details,
            });
        }
        // Si no hay errores, continúa con el siguiente middleware o controlador
        next();
    };
}

export default validatorHandler;