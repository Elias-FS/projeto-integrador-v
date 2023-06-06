import styles from './Input.module.css';

export function InputText(props: any) {
  const placeholderModificada = `${props.placeholder}`;

  const aoDigitado = (evento: any) => {
    props.aoAlterado(evento.target.value);
  };
  return (
    <div className={styles.inputBox}>
      <label>{props.label}</label>
      <input
        type={props.type}
        value={props.valor}
        onChange={aoDigitado}
        required={props.obrigatorio}
        placeholder={placeholderModificada}
      />
    </div>
  );
}
