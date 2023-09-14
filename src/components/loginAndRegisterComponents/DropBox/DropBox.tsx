import styles from './DropBox.module.css';


export function DropBox(this: any, props: any) {

  const aoSelecionado = (evento: any) =>{
    props.aoAlterado(evento.target.value);
  };

  return (
    <div className={styles.dropBox}>
      <label>{props.label}</label>
      <select value={props.valor} className="border border-zinc-300 rounded-lg focus:border focus:border-blue-300"onChange={aoSelecionado}>
      <option value="" disabled selected>Selecione uma opção</option>
        {props.values}
      </select>
    </div>
  );
}
