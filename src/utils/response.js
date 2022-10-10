const response = (obj) => {
    const { res, data = null, error = null } = obj
    if (!data && !error) {
        return res.json({
            message: "No data available"
        });
    }
    if (error) {
        return res.json({
            error,
            message: "Something wento wrong"
        });
    }
    else {
        return res.json({
            data,
            message: "Data Available"
        })
    }
}
module.exports = response;