import React from "react";

const Input = ({ label, type, name, classname, placeholder }) => {
  return (
    <>
      {type !== "checkbox" ? (
        <div className={classname}>
          <label htmlFor={name}>{label}</label>
          <input type={type} id={name} placeholder={placeholder} />
        </div>
      ) : (
        <div className={classname}>
          <input type={type} id={name} />
          <label htmlFor={name}>{label}</label>
        </div>
      )}
    </>
  );
};

export default Input;
