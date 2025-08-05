module.exports= fn =>  (req, res, next) => {
    fn(req, res, next).catch(next);//same as catch(err=>next(err))
  };
