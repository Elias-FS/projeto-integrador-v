import styles from './DropBox.module.css';

export function DropBox(props: any) {

  return (
    <div className={styles.dropBox}>
      <label>{props.label}</label>
      <select>
        {[props.values]}
      </select>
    </div>
  );
}
