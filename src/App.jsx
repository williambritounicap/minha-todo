import { useState } from 'react';
import TarefaItem from './components/TarefaItem.jsx';

function App() {
  const [tarefas, setTarefas] = useState([]);
  const [input, setInput] = useState('');

  // Adiciona uma nova tarefa ao estado
  function adicionarTarefa() {
    if (input.trim()) {
      setTarefas([...tarefas, input.trim()]);
      setInput('');
    }
  }

  // Remove a tarefa pelo índice
  function removerTarefa(indexRemover) {
    setTarefas(tarefas.filter((_, index) => index !== indexRemover));
  }

  return (
    <div className="app-container">
      <div className="card">
        <h1>Minha Lista de Tarefas</h1>
        <p>Usando React, JSX, componentes e useState.</p>

        <div className="form-group">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Nova tarefa"
          />
          <button onClick={adicionarTarefa}>Adicionar</button>
        </div>

        {tarefas.length === 0 ? (
          <p className="vazio">Nenhuma tarefa adicionada ainda.</p>
        ) : (
          <ul className="lista-tarefas">
            {tarefas.map((tarefa, index) => (
              <TarefaItem
                key={index}
                tarefa={tarefa}
                index={index}
                onRemover={removerTarefa}
              />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
