const Controller = require('../controller');
let VlModel = require('../../models/vlModel');
let Calcu = require('../../helpers/calcu');

class ControladorBase extends Controller {
    constructor(req, res, next) {
        super(req, res, next);
    }
    compararBase() {
        let isin = this.req.query.isin;
        let dateFrom = this.req.query.dateFrom;
        let dateTo = this.req.query.dateTo;

        VlModel.find({
            isin: isin,
            fecha: {
                $gt: +dateFrom - 1,
                $lt: +dateTo + 1
            },
        }, (err, data) => {
            let calcu = new Calcu(this.req, this.res, this.next);
            calcu.operation(isin, dateFrom, dateTo, data)
        })
    }
}
module.exports = ControladorBase;