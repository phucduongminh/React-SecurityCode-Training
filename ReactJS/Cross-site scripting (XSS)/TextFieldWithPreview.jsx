import React, { useEffect, useMemo, useState } from "react";
import { TextField } from "@mui/material";
import debounce from "lodash.debounce";
import DOMPurify from "isomorphic-dompurify";

export default function TextFieldWithPreview ({name, label, onInputChange}) {
    const [preview, setPreview] = useState('')
    const clean = DOMPurify.sanitize(preview);

    const debounceInput = useMemo(
        () => debounce(({ target: { value } }) => {
            setPreview(value);
            onInputChange(value);
        }, 500), []
    );

    useEffect(() => {
        return () => {
          debounceInput.cancel();
        };
      }, [debounceInput]);

    return (
        <div>
            <TextField
                name={name}
                label={label} 
                onChange={debounceInput} 
                multiline
                fullWidth
                maxRows={6}
            />
            <label>Preview:</label>
            <div dangerouslySetInnerHTML={{__html: clean}} id="preview"/>
        </div>
    );
}