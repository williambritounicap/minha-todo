function TarefaItem({ tarefa, index, onRemover }) {
  return (
    <li className="tarefa-item">
      <span>{tarefa}</span>
      <button className="remover-btn" onClick={() => onRemover(index)}>
        Remover
      </button>
    </li>
  );
}

export default TarefaItem;
