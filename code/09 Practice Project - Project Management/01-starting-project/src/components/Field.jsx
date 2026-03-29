const inputClasses =
  'w-full rounded-md border border-stone-300 bg-stone-50 px-3 py-2 text-stone-700 outline-none transition focus:border-stone-400 focus:ring-2 focus:ring-stone-300';

export default function Field({
  label,
  id,
  textarea,
  className = '',
  ...props
}) {
  return (
    <div className={`mb-5 text-left ${className}`.trim()}>
      <label
        className="mb-1 block text-xs font-bold uppercase tracking-wide text-stone-500"
        htmlFor={id}
      >
        {label}
      </label>
      {textarea ? (
        <textarea id={id} className={inputClasses} {...props} />
      ) : (
        <input id={id} className={inputClasses} {...props} />
      )}
    </div>
  );
}
