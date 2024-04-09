import React, { useEffect, useMemo } from "react";
import { TextField } from "@mui/material";
import debounce from "lodash.debounce";


export default function TextFieldWithPreview ({name, label, onInputChange}) {
    const renderPreview = (text) => {
        const previewContent = document.getElementById("preview");
        if (previewContent) previewContent.innerHTML = text;
    }

    const debounceInput = useMemo(
        () => debounce(({ target: { value } }) => {
            renderPreview(value);
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
            <div id="preview"></div>
        </div>
    );
}