create database veteran_car; 

CREATE TABLE evento (
    id int PRIMARY KEY,
    local VARCHAR(255),
    endereco VARCHAR(255),
    data DATE,
    convidado BOOLEAN,
    edicao VARCHAR(255)
);

CREATE TABLE financeiro (
    movimento DECIMAL(10,2),
    saldo DECIMAL(10,2),
    descricao VARCHAR(255),
    data DATE
);

CREATE TABLE membro (
    id int PRIMARY KEY,
    nome VARCHAR(255),
    email VARCHAR(255),
    telefone VARCHAR(20),
    endereco VARCHAR(255),
    dataDeNascimento DATE,
    CPF VARCHAR(14),
    CEP VARCHAR(10)
);

CREATE TABLE veiculo (
    id int PRIMARY KEY,
    marca VARCHAR(255),
    modelo VARCHAR(255),
    ano VARCHAR(4),
    placa VARCHAR(10),
    placaPreta BOOLEAN,
    cor VARCHAR(50),
    quilometragem DECIMAL(10, 2),
    membro_id int,
        FOREIGN KEY(membro_id) REFERENCES membro(id)
);
