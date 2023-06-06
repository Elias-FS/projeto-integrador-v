export function MenuItem(props: any) {
  return (
    <option value={props.name}>
        {props.value}
    </option>
  );
}