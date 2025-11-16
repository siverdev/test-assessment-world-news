interface SearchBarProps {
  value: string;
  setValue: (value: string) => void;
  setSubmittedValue: (submittedValue: string | undefined) => void;
}

export default function SearchBar({ value, setValue, setSubmittedValue }: SearchBarProps) {
  
  const onSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmittedValue(value);
  };

  return (
    <form
      onSubmit={(e) => {onSearch(e);}}
      className="flex justify-center gap-2 w-full mb-8"
    >
      <input
        type="text"
        placeholder="Search news..."
        value={value}
        onChange={(e) => {setValue(e.target.value);}}
        className="w-1/2 px-6 py-3  bg-white border border-gray-300 rounded-xl
                   focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                   transition-shadow"
      />

      <button
        type="submit"
        className="px-6 py-2 rounded-xl bg-blue-600 text-white font-medium
                   hover:bg-blue-700 transition-colors cursor-pointer"
      >
        Search
      </button>
    </form>
  );
}
