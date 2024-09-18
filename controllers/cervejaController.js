const cervejas = require('../models/cervejaModel');

// A. Buscar cerveja pelo nome
exports.buscarPorNome = (req, res) => {
  const { nome } = req.params;
  const cerveja = cervejas.find(c => c.nome.toLowerCase() === nome.toLowerCase());
  if (cerveja) {
    res.status(200).json(cerveja);
  } else {
    res.status(404).json({ mensagem: 'Cerveja não encontrada' });
  }
};

// B. Buscar cervejas pela nacionalidade
exports.buscarPorNacionalidade = (req, res) => {
  const { nacionalidade } = req.params;
  const cervejasNacionais = cervejas.filter(c => c.nacionalidade.toLowerCase() === nacionalidade.toLowerCase());
  res.status(200).json(cervejasNacionais);
};

// C. Ordenar as cervejas pelo maior ABV
exports.ordenarPorABV = (req, res) => {
  const cervejasOrdenadas = [...cervejas].sort((a, b) => b.abv - a.abv);
  res.status(200).json(cervejasOrdenadas);
};

// D. Buscar cervejas pelo tipo
exports.buscarPorTipo = (req, res) => {
  const { tipo } = req.params;
  const cervejasTipo = cervejas.filter(c => c.tipo.toLowerCase() === tipo.toLowerCase());
  res.status(200).json(cervejasTipo);
};

// E. Buscar cervejas pelo nome parcial
exports.buscarPorNomeParcial = (req, res) => {
  const { nome } = req.params;
  const cervejasParciais = cervejas.filter(c => c.nome.toLowerCase().includes(nome.toLowerCase()));
  res.status(200).json(cervejasParciais);
};
