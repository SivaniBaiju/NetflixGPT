import { useField } from "formik";

const TextInput = ({ label, ...props }) => {
    // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
    // which we can spread on <input>. We can use field meta to show an error
    // message if the field is invalid and it has been touched (i.e. visited)
    const [field, meta] = useField(props);
    return (
      <div className="mb-6 w-full">
        {/* <label htmlFor={props.id || props.name}>{label}</label> */}
        <input className="w-full text-white placeholder-[#8c8c8c] rounded bg-[#333] p-3 focus:outline-slate-500" {...field} {...props} />
        {meta.touched && meta.error ? (
          <div className="text-red-600">{meta.error}</div>
        ) : null}
      </div>
    );
  };

  export default TextInput;