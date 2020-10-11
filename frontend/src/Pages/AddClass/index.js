import React, { useState } from "react";

import NavOptions from "../../Components/Teacher/NavOptions";

import { Container } from "./styles";

import api from "../../Services/api";

import {useHistory} from 'react-router-dom'

function AddClass(props) {
  document.title = "MyClass - Adicionando Alunos";

  const history = useHistory()

  const [username, setUsername] = useState("");
  const [period, setPeriod] = useState("");
  const [group, setGroup] = useState("");


  async function handleSubmit(e) {
    
      api.post("student", {
        username,
        period,
        group,
      })
      .then(() => {
        alert("Cadastro realizado com sucesso");
      })
      .catch(() => {
        alert("Erro no cadastro");
      });

      history.push('/teacher')
  }

  return (
    <>
      <NavOptions title="Criar Grupo" back="/create-class" />
      <Container>
        <form onSubmit={handleSubmit} action="">
          <input
            type="text"
            required
            placeholder="Nome do Aluno"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <select value={period} onChange={(e) => setPeriod(e.target.value)}>
            <option>Selecionar Período</option>
            <option>Matutino</option>
            <option>Vespertino</option>
            <option>Noturno</option>
            <option>Diurno</option>
          </select>

          <select
            value={group}
            onChange={(e) => setGroup(e.target.value)}
            name=""
            id=""
          >
            <option>Selecionar Turma</option>
            <option>Turma 1</option>
            <option>Turma 2</option>
            <option>Turma 3</option>
            <option>Turma 4</option>
            <option>Turma 5</option>
          </select>

          <button type="submit">Criar</button>
        </form>
      </Container>
    </>
  );
}

export default AddClass;
