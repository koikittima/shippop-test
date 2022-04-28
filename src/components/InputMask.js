import React from "react";
import { Form } from "react-bootstrap";
import InputMask from "react-input-mask";
function InputTextMask({ title, star, mask, idName, value, placeholder, classLabel, handleChange,
  invalid, handleInvalid, classFormGroup, disabled }) {

  return (
    <Form.Group className={classFormGroup}>
      {title ?
        <Form.Label className={`${classLabel} mb-1`}>
          {title} <span className="text-danger">{star ? "*" : ""}</span>
        </Form.Label>
        : ""}
      <InputMask
        mask={mask}
        maskChar={null}
        id={idName}
        name={idName}
        className={invalid ? "is-invalid form-control" : " form-control"}
        value={value}
        disabled={disabled ? true : false}
        placeholder={placeholder}
        onChange={(e) => {
          handleChange(e.target.value)
          if (handleInvalid) {
            handleInvalid()
          }
        }}
      />
      {invalid ? <div className="invalid-error">{invalid}</div> : ""}
    </Form.Group>
  );
}

export default InputTextMask;
