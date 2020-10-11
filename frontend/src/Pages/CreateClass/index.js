import React, { useState } from "react";
import Header from "../../Components/Teacher/Header";
import Navbar from "../../Components/Teacher/Navbar";

import { FaArrowRight } from "react-icons/fa";

import { Container } from "./styles";
import NavOptions from "../../Components/Teacher/NavOptions";

import api from "../../Services/api";

function CreateClass(props) {
  console.log(document.title);
  document.title = "MyClass - Criando Turma";

  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");

  async function handleSubmit(e) {
    api.post("classes", {
        name,
        subject,
      })
      .then(() => {
        alert("Cadastro realizado com sucesso");
      })
      .catch(() => {
        alert("Erro no cadastro");
      });
  }

  return (
    <>
      <NavOptions title="Criar Turma" back="/teacher" />
      <Container>
        <form onSubmit={handleSubmit} action="/addClass">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nome da turma"
            required
          />
          <select value={subject} onChange={(e) => setSubject(e.target.value)}>
            <option>Disciplinas</option>
            <option>Português</option>
            <option>Matemática</option>
            <option>Geografia</option>
            <option>Ciências</option>
          </select>
          <button type="submit">
            Próximo <FaArrowRight className="icon" />
          </button>
        </form>
      </Container>
      {/* <Navbar /> */}
    </>
  );
}

export default CreateClass;
