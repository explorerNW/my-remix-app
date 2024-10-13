import "./loading.css";

export default function Loading(props: { loading: boolean }) {
  if (props.loading) {
    return (
      <div className="absolute w-full h-full">
        <div className={props.loading ? "loading" : ""}></div>
        <div className={props.loading ? "drop-shadow" : ""}></div>
      </div>
    );
  } else {
    return;
  }
}
