"use client";
import Loader from "@/components/svg/Loader";
import { useCallback, useState } from "react";

function Button(props) {
  const { children, onClickFn = () => {}, btnClasses = "", ...rest } = props;
  const [hasButtonPressed, setHasButtonPressed] = useState(false);

  const onClickHandler = useCallback(async () => {
    if (hasButtonPressed) return;

    setHasButtonPressed(true);

    await onClickFn();

    setHasButtonPressed(false);
  }, [onClickFn, hasButtonPressed]);

  return (
    <button
      className={`${btnClasses} disabled:cursor-not-allowed disabled:opacity-75`}
      onClick={onClickHandler}
      {...rest}
    >
      {hasButtonPressed ? <Loader /> : children}
    </button>
  );
}

export default Button;
