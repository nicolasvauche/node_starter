exports.index = (req, res, next) => {
  res.status(200).json('Bienvenue')
}

exports.start = (req, res, next) => {
  res.status(200).json('Coucou ' + req.params.prenom)
}
